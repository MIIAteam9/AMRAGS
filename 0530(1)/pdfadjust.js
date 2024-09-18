


function downLoad(){

    var stringS = "subjectiveNoInput";
    var stringO = "objectiveNoInput";

    if(document.getElementById('user-input-S').value != ""){
        stringS = document.getElementById('user-input-S').value;
    };
    if(document.getElementById('database-input-O').value !=""){
        stringO = document.getElementById('database-input-O').value;
    };

   

    var assICD = document.getElementsByClassName("ICD10Row");
    var assICD10Row = [];
    for (var i = 0; i < assICD.length; i++) {
        assICD10Row.push(assICD[i].value);
    }

    var assDisc = document.getElementsByClassName("symptomRow");
    var assDiscRow = [];
    for (var i = 0; i < assDisc.length; i++) {
        assDiscRow.push(assDisc[i].value);
    }

    var planMed = document.getElementsByClassName("medicalRow");
    var planMedRow = [];
    for (var i = 0; i < planMed.length; i++) {
        planMedRow.push(planMed[i].value);
    }

    var planDisc = document.getElementsByClassName("discriptionRow");
    var planDiscRow = [];
    for (var i = 0; i < planDisc.length; i++) {
        planDiscRow.push(planDisc[i].value);
    }

    const doc = new jsPDF();

    doc.setFontSize(24);
    doc.text("S", 10, 20);
    doc.text("O", 10, 80);
    doc.text("A", 10, 160);
    doc.text("P", 10, 240);

    doc.setFontSize(12);
    doc.text(stringS, 20, 30);
    doc.text(stringO, 20, 90);
    doc.text(assICD10Row, 20, 170);
    doc.text(assDiscRow, 40, 170);
    doc.text(planMedRow, 20,250);
    doc.text(planDiscRow, 60, 250);


    doc.save("Medical records.pdf");

}