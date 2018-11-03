var add3 = 0;
var subtract3 = 0;
var multiply3 = 0;
var divide3 = 0;
var pos3 = 0;
var a3 = 0;
var s3 = 0;
var m3 = 0;
var d3 = 0;
var again = 0;
var countQues3 = 0;
var level3Num1 = [16];
var level3Num2 = [16];

function level3Add() {
    if (pos3 < 16 ) {
        level3Num1[pos3] = Math.floor(Math.random() * 99) + 1;
        level3Num2[pos3] = Math.floor(Math.random() * 99) + 1;
        add3 = level3Num1[pos3] + level3Num2[pos3];
        document.getElementById("add3").innerHTML = "Question #" + countQues3 + "<br><br>Calculate the value of: <br><br>" + level3Num1[pos3] + "+" + level3Num2[pos3] + "<br><br>";
        countQues3++;
        pos3++;
    } else {
        document.getElementById("addition3").innerHTML = ("You have completed all questions!");
        reportAdd3();
    }

}

function level3Subtract() {

    if (pos3 < 16) {
        level3Num1[pos3] = Math.floor(Math.random() * 99) + 1;
        level3Num2[pos3] = Math.floor(Math.random() * 99) + 1;
        subtract3 = level3Num1[pos3] - level3Num2[pos3];
        document.getElementById("subtract3").innerHTML = "Question #" + countQues3 + "<br><br>Calculate the value of: <br><br>" + level3Num1[pos3] + "-" + level3Num2[pos3] + "<br><br>";
        countQues3++;
        pos3++;
    } else {
        document.getElementById("subtract3").innerHTML = ("You have completed all questions!");
        reportSubtract3();
    }
}

function level3Multiply() {

    if (pos3 < 16) {
        level3Num1[pos3] = Math.floor(Math.random() * 99) + 1;
        level3Num2[pos3] = Math.floor(Math.random() * 99) + 1;
        multiply3 = level3Num1[pos3] * level3Num2[pos3];
        document.getElementById("multiply").innerHTML = "Question #" + countQues3 + "<br><br>Calculate the value of: <br><br>" + level3Num1[pos3] + "*" + level3Num2[pos3] + "<br><br>";
        countQues3++;
        pos3++;
    } else {
        document.getElementById("multiply3").innerHTML = ("You have completed all questions!");
        reportMultiply3();
    }
}

function level3Divide() {
    if (pos3 < 16) {
        level3Num1[pos3] = Math.floor(Math.random() * 99) + 1;
        level3Num2[pos3] = Math.floor(Math.random() * 99) + 1;
        divide3 = level3Num1[pos3] / level3Num2[pos3];
        document.getElementById("divide3").innerHTML = "Question #" + countQues3 + "<br><br>Calculate the value of: <br><br>" + level3Num1[pos3] + "/" + level3Num2[pos3] + "<br><br>";
        countQues3++;
        pos3++;
    } else {
        document.getElementById("divide3").innerHTML = ("You have completed all questions!");
        reportDivide3();
    }
}

function checkAdd3() {
    if (add3 == parseInt(document.getElementById("answer3").value)) {
        document.getElementById("status3").innerHTML = "GOOD JOB!";
        document.getElementById("status3").style.textAlign = "center";
        a3++;
        level3Add();
    } else {
        document.getElementById("status3").innerHTML = "Incorrect.";
        document.getElementById("status3").style.textAlign = "center";
        level3Add();
    }
    document.getElementById('answer3').value = '';
}

function checkSubtract3() {
    if (subtract3 == parseInt(document.getElementById("subtractAns").value)) {
        document.getElementById("subtractStatus").innerHTML = "GOOD JOB!";
        document.getElementById("subtractStatus").style.textAlign = "center";
        s3++;
        level3Subtract();
    } else {
        document.getElementById("subtractStatus").innerHTML = "Incorrect.";
        document.getElementById("subtractStatus").style.textAlign = "center";
        level3Subtract();
    }
    document.getElementById("subtractAns").value = '';
}

function checkMultiply3() {
    if (multiply3 == parseInt(document.getElementById("multiplyAns").value)) {
        document.getElementById("multiplyStatus").innerHTML = "GOOD JOB!";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        m3++;
        level3Multiply();
    } else {
        document.getElementById("multiplyStatus").innerHTML = "Incorrect.";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        level3Multiply();
    }
    document.getElementById("multiplyAns").value = '';
}

function checkDivide3() {
    if (divide3 == parseInt(document.getElementById("divide3Ans").value)) {
        document.getElementById("divide3Status").innerHTML = "GOOD JOB!";
        document.getElementById("divide3Status").style.textAlign = "center";
        d++;
        level3Divide();
    } else {
        document.getElementById("divide3Status").innerHTML = "Incorrect.";
        document.getElementById("divide3Status").style.textAlign = "center";
        level3Divide();
    }
    document.getElementById("divide3Ans").value = '';
}

function addition3() {
    if (document.getElementById('addition3').style.display == "none") {
        document.getElementById('addition3').style.display = "block";
        document.getElementById('additionBtn3').style.display = "none";
        document.getElementById('subtractionBtn3').style.display = "none";
        document.getElementById('multiplicationBtn3').style.display = "none";
        document.getElementById('divisionBtn3').style.display = "none";
        document.getElementById('report3').style.display = "none";
    } else {
        document.getElementById('addition3').style.display = "none";
    }

}

function subtraction3() {
    if (document.getElementById('subtraction3').style.display == "none") {
        document.getElementById('additionBtn3').style.display = "none";
        document.getElementById('subtraction3').style.display = "block";
        document.getElementById('subtractionBtn3').style.display = "none";
        document.getElementById('multiplicationBtn3').style.display = "none";
        document.getElementById('divisionBtn3').style.display = "none";
        document.getElementById('report3').style.display = "none";
    } else {
        document.getElementById('subtraction3').style.display = "none";
    }
}

function multiplication3() {
    if (document.getElementById('multiplication3').style.display == "none") {
        document.getElementById('additionBtn3').style.display = "none";
        document.getElementById('subtractionBtn3').style.display = "none";
        document.getElementById('multiplication3').style.display = "block";
        document.getElementById('multiplicationBtn3').style.display = "none";
        document.getElementById('divisionBtn3').style.display = "none";
        document.getElementById('report3').style.display = "none";
    } else {
        document.getElementById('multiplication3').style.display = "none";
    }
}

function division3() {
    if (document.getElementById('division3').style.display == "none") {
        document.getElementById('additionBtn3').style.display = "none";
        document.getElementById('subtractionBtn3').style.display = "none";
        document.getElementById('multiplicationBtn3').style.display = "none"
        document.getElementById('division3').style.display = "block";
        document.getElementById('divisionBtn3').style.display = "none";
        document.getElementById('report3').style.display = "none";
    } else {
        document.getElementById('division3').style.display = "none";
    }
}