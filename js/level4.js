var add4 = 0;
var subtract4 = 0;
var multiply4 = 0;
var divide4 = 0;
var pos4 = 0;
var a4 = 0;
var s4 = 0;
var m4 = 0;
var d4 = 0;
var again = 0;
var countQues4 = 0;
var level4Num1 = [16];
var level4Num2 = [16];

function level4Add() {
    if (pos4 < 16 ) {
        level4Num1[pos4] = Math.floor(Math.random() * 99) + 1;
        level4Num2[pos4] = Math.floor(Math.random() * 999) + 1;
        add4 = level4Num1[pos4] + level4Num2[pos4];
        document.getElementById("add4").innerHTML = "Question #" + countQues4 + "<br><br>Calculate the value of: <br><br>" + level4Num1[pos4] + "+" + level4Num2[pos4] + "<br><br>";
        countQues4++;
        pos4++;
    } else {
        document.getElementById("addition4").innerHTML = ("You have completed all questions!");
        reportAdd4();
    }

}

function level4Subtract() {

    if (pos4 < 16) {
        level4Num1[pos4] = Math.floor(Math.random() * 99) + 1;
        level4Num2[pos4] = Math.floor(Math.random() * 999) + 1;
        subtract4 = level4Num1[pos4] - level4Num2[pos4];
        document.getElementById("subtract4").innerHTML = "Question #" + countQues4 + "<br><br>Calculate the value of: <br><br>" + level4Num1[pos4] + "-" + level4Num2[pos4] + "<br><br>";
        countQues4++;
        pos4++;
    } else {
        document.getElementById("subtract4").innerHTML = ("You have completed all questions!");
        reportSubtract4();
    }
}

function level4Multiply() {

    if (pos4 < 16) {
        level4Num1[pos4] = Math.floor(Math.random() * 99) + 1;
        level4Num2[pos4] = Math.floor(Math.random() * 999) + 1;
        multiply4 = level4Num1[pos4] * level4Num2[pos4];
        document.getElementById("multiply").innerHTML = "Question #" + countQues4 + "<br><br>Calculate the value of: <br><br>" + level4Num1[pos4] + "*" + level4Num2[pos4] + "<br><br>";
        countQues4++;
        pos4++;
    } else {
        document.getElementById("multiply4").innerHTML = ("You have completed all questions!");
        reportMultiply4();
    }
}

function level4Divide() {
    if (pos4 < 16) {
        level4Num1[pos4] = Math.floor(Math.random() * 99) + 1;
        level4Num2[pos4] = Math.floor(Math.random() * 999) + 1;
        divide4 = level4Num1[pos4] / level4Num2[pos4];
        document.getElementById("divide4").innerHTML = "Question #" + countQues4 + "<br><br>Calculate the value of: <br><br>" + level4Num1[pos4] + "/" + level4Num2[pos4] + "<br><br>";
        countQues4++;
        pos4++;
    } else {
        document.getElementById("divide4").innerHTML = ("You have completed all questions!");
        reportDivide4();
    }
}

function checkAdd4() {
    if (add4 == parseInt(document.getElementById("answer4").value)) {
        document.getElementById("status4").innerHTML = "GOOD JOB!";
        document.getElementById("status4").style.textAlign = "center";
        a4++;
        level4Add();
    } else {
        document.getElementById("status4").innerHTML = "Incorrect.";
        document.getElementById("status4").style.textAlign = "center";
        level4Add();
    }
    document.getElementById('answer4').value = '';
}

function checkSubtract4() {
    if (subtract4 == parseInt(document.getElementById("subtractAns").value)) {
        document.getElementById("subtractStatus").innerHTML = "GOOD JOB!";
        document.getElementById("subtractStatus").style.textAlign = "center";
        s4++;
        level4Subtract();
    } else {
        document.getElementById("subtractStatus").innerHTML = "Incorrect.";
        document.getElementById("subtractStatus").style.textAlign = "center";
        level4Subtract();
    }
    document.getElementById("subtractAns").value = '';
}

function checkMultiply4() {
    if (multiply4 == parseInt(document.getElementById("multiplyAns").value)) {
        document.getElementById("multiplyStatus").innerHTML = "GOOD JOB!";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        m4++;
        level4Multiply();
    } else {
        document.getElementById("multiplyStatus").innerHTML = "Incorrect.";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        level4Multiply();
    }
    document.getElementById("multiplyAns").value = '';
}

function checkDivide4() {
    if (divide4 == parseInt(document.getElementById("divide4Ans").value)) {
        document.getElementById("divide4Status").innerHTML = "GOOD JOB!";
        document.getElementById("divide4Status").style.textAlign = "center";
        d++;
        level4Divide();
    } else {
        document.getElementById("divide4Status").innerHTML = "Incorrect.";
        document.getElementById("divide4Status").style.textAlign = "center";
        level4Divide();
    }
    document.getElementById("divide4Ans").value = '';
}

function addition4() {
    if (document.getElementById('addition4').style.display == "none") {
        document.getElementById('addition4').style.display = "block";
        document.getElementById('additionBtn4').style.display = "none";
        document.getElementById('subtractionBtn4').style.display = "none";
        document.getElementById('multiplicationBtn4').style.display = "none";
        document.getElementById('divisionBtn4').style.display = "none";
        document.getElementById('report4').style.display = "none";
    } else {
        document.getElementById('addition4').style.display = "none";
    }

}

function subtraction4() {
    if (document.getElementById('subtraction4').style.display == "none") {
        document.getElementById('additionBtn4').style.display = "none";
        document.getElementById('subtraction4').style.display = "block";
        document.getElementById('subtractionBtn4').style.display = "none";
        document.getElementById('multiplicationBtn4').style.display = "none";
        document.getElementById('divisionBtn4').style.display = "none";
        document.getElementById('report4').style.display = "none";
    } else {
        document.getElementById('subtraction4').style.display = "none";
    }
}

function multiplication4() {
    if (document.getElementById('multiplication4').style.display == "none") {
        document.getElementById('additionBtn4').style.display = "none";
        document.getElementById('subtractionBtn4').style.display = "none";
        document.getElementById('multiplication4').style.display = "block";
        document.getElementById('multiplicationBtn4').style.display = "none";
        document.getElementById('divisionBtn4').style.display = "none";
        document.getElementById('report4').style.display = "none";
    } else {
        document.getElementById('multiplication4').style.display = "none";
    }
}

function division4() {
    if (document.getElementById('division4').style.display == "none") {
        document.getElementById('additionBtn4').style.display = "none";
        document.getElementById('subtractionBtn4').style.display = "none";
        document.getElementById('multiplicationBtn4').style.display = "none"
        document.getElementById('division4').style.display = "block";
        document.getElementById('divisionBtn4').style.display = "none";
        document.getElementById('report4').style.display = "none";
    } else {
        document.getElementById('division4').style.display = "none";
    }
}