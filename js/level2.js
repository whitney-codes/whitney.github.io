var add2 = 0;
var subtract2 = 0;
var multiply2 = 0;
var divide2 = 0;
var pos2 = 0;
var a2 = 0;
var s2 = 0;
var m2 = 0;
var d2= 0;
var again = 0;
var countQues2 = 0;
var level2Num1 = [16];
var level2Num2 = [16];

function level2Add() {
    if (pos2 < 16) {
        level2Num1[pos2] = Math.floor(Math.random() * 9) + 1;
        level2Num2[pos2] = Math.floor(Math.random() * 99) + 1;
        add2 = level2Num1[pos2] + level2Num2[pos2];
        document.getElementById("add2").innerHTML = "Question #" + countQues2 + "<br><br>Calculate the value of: <br><br>" + level2Num1[pos2] + "+" + level2Num2[pos2] + "<br><br>";
        countQues2++;
        pos2++;
    } else {
        document.getElementById("addition2").innerHTML = ("You have completed all questions!");
        reportAdd2();
    }

}

function level2Subtract() {

    if (pos2 < 16) {
        level2Num1[pos2] = Math.floor(Math.random() * 9) + 1;
        level2Num2[pos2] = Math.floor(Math.random() * 99) + 1;
        subtract2 = level2Num1[pos2] - level2Num2[pos2];
        document.getElementById("subtract2").innerHTML = "Question #" + countQues2 + "<br><br>Calculate the value of: <br><br>" + level2Num1[pos2] + "-" + level2Num2[pos2] + "<br><br>";
        countQues2++;
        pos2++;
    } else {
        document.getElementById("subtract2").innerHTML = ("You have completed all questions!");
        reportSubtract2();
    }
}

function level2Multiply() {

    if (pos2 < 16) {
        level2Num1[pos2] = Math.floor(Math.random() * 9) + 1;
        level2Num2[pos2] = Math.floor(Math.random() * 99) + 1;
        multiply2 = level2Num1[pos2] * level2Num2[pos2];
        document.getElementById("multiply").innerHTML = "Question #" + countQues2 + "<br><br>Calculate the value of: <br><br>" + level2Num1[pos2] + "*" + level2Num2[pos2] + "<br><br>";
        countQues2++;
        pos2++;
    } else {
        document.getElementById("multiply2").innerHTML = ("You have completed all questions!");
        reportMultiply2();
    }
}

function level2Divide() {
    if (pos2 < 16) {
        level2Num1[pos2] = Math.floor(Math.random() * 9) + 1;
        level2Num2[pos2] = Math.floor(Math.random() * 99) + 1;
        divide2 = level2Num1[pos2] / level2Num2[pos2];
        document.getElementById("divide2").innerHTML = "Question #" + countQues2 + "<br><br>Calculate the value of: <br><br>" + level2Num1[pos2] + "/" + level2Num2[pos2] + "<br><br>";
        countQues2++;
        pos2++;
    } else {
        document.getElementById("divide2").innerHTML = ("You have completed all questions!");
        reportDivide2();
    }
}

function checkAdd2() {
    if (add2 == parseInt(document.getElementById("answer2").value)) {
        document.getElementById("status2").innerHTML = "GOOD JOB!";
        document.getElementById("status2").style.textAlign = "center";
        a2++;
        level2Add();
    } else {
        document.getElementById("status2").innerHTML = "Incorrect.";
        document.getElementById("status2").style.textAlign = "center";
        level2Add();
    }
    document.getElementById('answer2').value = '';
}

function checkSubtract2() {
    if (subtract2 == parseInt(document.getElementById("subtractAns").value)) {
        document.getElementById("subtractStatus").innerHTML = "GOOD JOB!";
        document.getElementById("subtractStatus").style.textAlign = "center";
        s2++;
        level2Subtract();
    } else {
        document.getElementById("subtractStatus").innerHTML = "Incorrect.";
        document.getElementById("subtractStatus").style.textAlign = "center";
        level2Subtract();
    }
    document.getElementById("subtractAns").value = '';
}

function checkMultiply2() {
    if (multiply2 == parseInt(document.getElementById("multiplyAns").value)) {
        document.getElementById("multiplyStatus").innerHTML = "GOOD JOB!";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        m2++;
        level2Multiply();
    } else {
        document.getElementById("multiplyStatus").innerHTML = "Incorrect.";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        level2Multiply();
    }
    document.getElementById("multiplyAns").value = '';
}

function checkDivide2() {
    if (divide2 == parseInt(document.getElementById("divide2Ans").value)) {
        document.getElementById("divide2Status").innerHTML = "GOOD JOB!";
        document.getElementById("divide2Status").style.textAlign = "center";
        d++;
        level2Divide();
    } else {
        document.getElementById("divide2Status").innerHTML = "Incorrect.";
        document.getElementById("divide2Status").style.textAlign = "center";
        level2Divide();
    }
    document.getElementById("divide2Ans").value = '';
}

function addition2() {
    if (document.getElementById('addition2').style.display == "none") {
        document.getElementById('addition2').style.display = "block";
        document.getElementById('additionBtn2').style.display = "none";
        document.getElementById('subtractionBtn2').style.display = "none";
        document.getElementById('multiplicationBtn2').style.display = "none";
        document.getElementById('divisionBtn2').style.display = "none";
        document.getElementById('report2').style.display = "none";
    } else {
        document.getElementById('addition2').style.display = "none";
    }

}

function subtraction2() {
    if (document.getElementById('subtraction2').style.display == "none") {
        document.getElementById('additionBtn2').style.display = "none";
        document.getElementById('subtraction2').style.display = "block";
        document.getElementById('subtractionBtn2').style.display = "none";
        document.getElementById('multiplicationBtn2').style.display = "none";
        document.getElementById('divisionBtn2').style.display = "none";
        document.getElementById('report2').style.display = "none";
    } else {
        document.getElementById('subtraction2').style.display = "none";
    }
}

function multiplication2() {
    if (document.getElementById('multiplication2').style.display == "none") {
        document.getElementById('additionBtn2').style.display = "none";
        document.getElementById('subtractionBtn2').style.display = "none";
        document.getElementById('multiplication2').style.display = "block";
        document.getElementById('multiplicationBtn2').style.display = "none";
        document.getElementById('divisionBtn2').style.display = "none";
        document.getElementById('report2').style.display = "none";
    } else {
        document.getElementById('multiplication2').style.display = "none";
    }
}

function division2() {
    if (document.getElementById('division2').style.display == "none") {
        document.getElementById('additionBtn2').style.display = "none";
        document.getElementById('subtractionBtn2').style.display = "none";
        document.getElementById('multiplicationBtn2').style.display = "none"
        document.getElementById('division2').style.display = "block";
        document.getElementById('divisionBtn2').style.display = "none";
        document.getElementById('report2').style.display = "none";
    } else {
        document.getElementById('division2').style.display = "none";
    }
}