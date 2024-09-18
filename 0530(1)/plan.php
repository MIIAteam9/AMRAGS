
<?php


$apiKey="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";
        $url = 'https://api.openai.com/v1/chat/completions';
 
        $headers = array(
            "Authorization: Bearer {$apiKey}",
            "OpenAI-Organization: org-cZt5Sbg9X6bFUAVHFTchNZqp",
            "Content-Type: application/json"
        );

        $userInput = $_POST['userInput'];

// Define messages
        $messages = array();
        $initialPrompt = "Generate the medicines that can be used and its dosage based on the given examination results, without generating anything irrelevant，must be the medicines.Use [{\"medicalCode\": \"medicines\", \"discription\": \"dosage\" },{\"medicalCode\": \"medicines\",\"discription\": \"dosage\" },...] format, separated by commas between curly brackets, use English";

      
        $messages[] = array("role" => "system", "content" => $initialPrompt);
        $messages[] = array("role" => "user", "content" => $userInput);

 
// Define data
        $data = array();
        $data["model"] = "gpt-3.5-turbo";
        $data["messages"] = $messages;
        $data["max_tokens"] = 500;
       
 
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
                //echo "///Total Token:$totalTokens";
                } 
                else {
                echo "No valid response from OpenAI.";
                }

                }
 
        curl_close($curl);
?>