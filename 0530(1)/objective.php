
<?php


$apiKey="api key";
        $url = 'https://api.openai.com/v1/chat/completions';
 
        $headers = array(
            "Authorization: Bearer {$apiKey}",
            "OpenAI-Organization: org",
            "Content-Type: application/json"
        );

        $userInput = $_POST['userInput'];

// Define messages
        $messages = array();
        $initialPrompt = "依循所給定的病人主訴及資料，生成給病人看的病歷敘述或建議。若是提供FHIR，請詳細說明各項數值及正常性";

      
        $messages[] = array("role" => "system", "content" => $initialPrompt);
        $messages[] = array("role" => "user", "content" => $userInput);

 
// Define data
        $data = array();
        $data["model"] = "gpt-3.5-turbo";
        $data["messages"] = $messages;
        $data["max_tokens"] = 1000;
       
 
// init curl
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
 
        $result = curl_exec($curl);

        if (curl_errno($curl)) {
            echo 'Error:' . curl_error($curl);
        } 
        else {
                // Parse JSON data
                $jsonResponse = json_decode($result, true);

                // Check if choices array is present and not empty
                if (isset($jsonResponse['choices']) && !empty($jsonResponse['choices'])) {
                // Get assistant's response content and Display assistant's response
                $assistantResponse = $jsonResponse['choices'][0]['message']['content'];
                $totalTokens = $jsonResponse['usage']['total_tokens'];
                
                echo "$assistantResponse";
                echo "///Total Token:$totalTokens";
                } 
                else {
                echo "No valid response from OpenAI.";
                }

                }
 
        curl_close($curl);
?>