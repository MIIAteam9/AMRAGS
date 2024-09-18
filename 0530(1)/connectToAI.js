/**
 * @license
 * Project Name: 自動化病歷輔助生成系統
 * Description: 輔仁大學醫學資訊與創新應用學士學位學程第七屆第九組專題
 * Author: 410570310 李東壕
 * Version: 113.5.29 
 * Professor:郭冠良醫師 
 */


const response = [{ "icd10": "ICD", "symptom": " Discription" }];
const responseP = [{ "medicalCode": "MEDC", "discription": " Discription" }];
window.onload = fillAData(response);
window.onload = fillPData(responseP);



function sendPlan(){
    var userInput = document.getElementById('database-input-O').value;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display OpenAI's response in the output-P input


            const responseMsg = [{ "medicalCode": "MEDC", "discription": "D0" }];
                const index = responseMsg.findIndex(item => item.medicalCode === "MEDC");

                if (index !== -1) {
                    
                    const regExr = xhr.response.replace(/\r/g, '').replace(/\n/g,'').replace(/\\/g,'');
                    var obj = JSON.parse(regExr);

                    responseMsg.length = 0;
                    responseMsg.push(...obj);
                    console.log(responseMsg);
                }
                
                fillPData(responseMsg);
        }
    };
    xhr.open("POST", "plan.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("userInput=" + userInput);
}

function sendAssessment(){
    var userInput = document.getElementById('database-input-O').value;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display OpenAI's response in the output-O input

                const responseMsg = [{ "icd10": "ICD0", "symptom": "D0" }];
                const index = responseMsg.findIndex(item => item.icd10 === "ICD0");

                if (index !== -1) {
                    
                    const regExr = xhr.response.replace(/\r/g, '').replace(/\n/g,'').replace(/\\/g,'');
                    var obj = JSON.parse(regExr);

                    responseMsg.length = 0;
                    responseMsg.push(...obj);
                    console.log(responseMsg);
                }
                
                fillAData(responseMsg);
    }
    };

    xhr.open("POST", "assessment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("userInput=" + userInput);
}  

function storeOnclick() {
    var textareas = document.getElementsByClassName("ICD10Row");
    var textareaICD10Row = [];
    for (var i = 0; i < textareas.length; i++) {
        textareaICD10Row.push(textareas[i].value);
    }
    
    // 確認按鈕點擊事件是否觸發
    console.log('儲存內容:', textareaICD10Row.join(", "));

    var userInput = textareaICD10Row.join(" ");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display OpenAI's response in the output-O input

                

                const responseMsg = [{ "icd10": "ICD0", "symptom": "D0" }];
                const index = responseMsg.findIndex(item => item.icd10 === "ICD0");

                if (index !== -1) {
                    
                    const regExr = xhr.response.replace(/\r/g, '').replace(/\n/g,'').replace(/\\/g,'');
                    //console.log(regExr);
                    var obj = JSON.parse(regExr);

                    responseMsg.length = 0;
                    responseMsg.push(...obj);
                    console.log(responseMsg);
                }
                
                fillAData(responseMsg);
    }
    };

    xhr.open("POST", "ARefresh.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("userInput=" + encodeURIComponent(userInput));
}

function fillAData(response) {
    const icd10Rows = document.querySelectorAll('.ICD10Row');
    const symptomRows = document.querySelectorAll('.symptomRow');

    response.forEach((item, index) => {
        if (index < icd10Rows.length && index < symptomRows.length) {
            icd10Rows[index].value = item.icd10;
            symptomRows[index].value = item.symptom;
        }
    });
}

function fillPData(response) {
    const medRows = document.querySelectorAll('.medicalRow');
    const disRows = document.querySelectorAll('.discriptionRow');

    response.forEach((item, index) => {
        if (index < medRows.length && index < disRows.length) {
            medRows[index].value = item.medicalCode;
            disRows[index].value = item.discription;
        }
    });
}


