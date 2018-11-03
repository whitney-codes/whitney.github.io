var add5 = 0;
var subtract5 = 0;
var multiply5 = 0;
var divide5 = 0;
var pos5 = 0;
var a5 = 0;
var s5 = 0;
var m5 = 0;
var d5 = 0;
var again = 0;
var countQues5 = 0;
var level5Num1 = [16];
var level5Num2 = [16];

function level5Add() {
    if (pos5 < 16 ) {
        level5Num1[pos5] = Math.floor(Math.random() * 999) + 1;
        level5Num2[pos5] = Math.floor(Math.random() * 999) + 1;
        add5 = level5Num1[pos5] + level5Num2[pos5];
        document.getElementById("add5").innerHTML = "Question #" + countQues5 + "<br><br>Calculate the value of: <br><br>" + level5Num1[pos5] + "+" + level5Num2[pos5] + "<br><br>";
        countQues5++;
        pos5++;
    } else {
        document.getElementById("addition5").innerHTML = ("You have completed all questions!");
        reportAdd5();
    }

}

function level5Subtract() {

    if (pos5 < 16) {
        level5Num1[pos5] = Math.floor(Math.random() * 999) + 1;
        level5Num2[pos5] = Math.floor(Math.random() * 999) + 1;
        subtract5 = level5Num1[pos5] - level5Num2[pos5];
        document.getElementById("subtract5").innerHTML = "Question #" + countQues5 + "<br><br>Calculate the value of: <br><br>" + level5Num1[pos5] + "-" + level5Num2[pos5] + "<br><br>";
        countQues5++;
        pos5++;
    } else {
        document.getElementById("subtract5").innerHTML = ("You have completed all questions!");
        reportSubtract5();
    }
}

function level5Multiply() {

    if (pos5 < 16) {
        level5Num1[pos5] = Math.floor(Math.random() * 999) + 1;
        level5Num2[pos5] = Math.floor(Math.random() * 999) + 1;
        multiply5 = level5Num1[pos5] * level5Num2[pos5];
        document.getElementById("multiply").innerHTML = "Question #" + countQues5 + "<br><br>Calculate the value of: <br><br>" + level5Num1[pos5] + "*" + level5Num2[pos5] + "<br><br>";
        countQues5++;
        pos5++;
    } else {
        document.getElementById("multiply5").innerHTML = ("You have completed all questions!");
        reportMultiply5();
    }
}

function level5Divide() {
    if (pos5 < 16) {
        level5Num1[pos5] = Math.floor(Math.random() * 999) + 1;
        level5Num2[pos5] = Math.floor(Math.random() * 999) + 1;
        divide5 = level5Num1[pos5] / level5Num2[pos5];
        document.getElementById("divide5").innerHTML = "Question #" + countQues5 + "<br><br>Calculate the value of: <br><br>" + level5Num1[pos5] + "/" + level5Num2[pos5] + "<br><br>";
        countQues5++;
        pos5++;
    } else {
        document.getElementById("divide5").innerHTML = ("You have completed all questions!");
        reportDivide5();
    }
}

function checkAdd5() {
    if (add5 == parseInt(document.getElementById("answer5").value)) {
        document.getElementById("status5").innerHTML = "GOOD JOB!";
        document.getElementById("status5").style.textAlign = "center";
        a5++;
        level5Add();
    } else {
        document.getElementById("status5").innerHTML = "Incorrect.";
        document.getElementById("status5").style.textAlign = "center";
        level5Add();
    }
    document.getElementById('answer5').value = '';
}

function checkSubtract5() {
    if (subtract5 == parseInt(document.getElementById("subtractAns").value)) {
        document.getElementById("subtractStatus").innerHTML = "GOOD JOB!";
        document.getElementById("subtractStatus").style.textAlign = "center";
        s5++;
        level5Subtract();
    } else {
        document.getElementById("subtractStatus").innerHTML = "Incorrect.";
        document.getElementById("subtractStatus").style.textAlign = "center";
        level5Subtract();
    }
    document.getElementById("subtractAns").value = '';
}

function checkMultiply5() {
    if (multiply5 == parseInt(document.getElementById("multiplyAns").value)) {
        document.getElementById("multiplyStatus").innerHTML = "GOOD JOB!";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        m5++;
        level5Multiply();
    } else {
        document.getElementById("multiplyStatus").innerHTML = "Incorrect.";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        level5Multiply();
    }
    document.getElementById("multiplyAns").value = '';
}

function checkDivide5() {
    if (divide5 == parseInt(document.getElementById("divide5Ans").value)) {
        document.getElementById("divide5Status").innerHTML = "GOOD JOB!";
        document.getElementById("divide5Status").style.textAlign = "center";
        d++;
        level5Divide();
    } else {
        document.getElementById("divide5Status").innerHTML = "Incorrect.";
        document.getElementById("divide5Status").style.textAlign = "center";
        level5Divide();
    }
    document.getElementById("divide5Ans").value = '';
}

function addition5() {
    if (document.getElementById('addition5').style.display == "none") {
        document.getElementById('addition5').style.display = "block";
        document.getElementById('additionBtn5').style.display = "none";
        document.getElementById('subtractionBtn5').style.display = "none";
        document.getElementById('multiplicationBtn5').style.display = "none";
        document.getElementById('divisionBtn5').style.display = "none";
        document.getElementById('report5').style.display = "none";
    } else {
        document.getElementById('addition5').style.display = "none";
    }

}

function subtraction5() {
    if (document.getElementById('subtraction5').style.display == "none") {
        document.getElementById('additionBtn5').style.display = "none";
        document.getElementById('subtraction5').style.display = "block";
        document.getElementById('subtractionBtn5').style.display = "none";
        document.getElementById('multiplicationBtn5').style.display = "none";
        document.getElementById('divisionBtn5').style.display = "none";
        document.getElementById('report5').style.display = "none";
    } else {
        document.getElementById('subtraction5').style.display = "none";
    }
}

function multiplication5() {
    if (document.getElementById('multiplication5').style.display == "none") {
        document.getElementById('additionBtn5').style.display = "none";
        document.getElementById('subtractionBtn5').style.display = "none";
        document.getElementById('multiplication5').style.display = "block";
        document.getElementById('multiplicationBtn5').style.display = "none";
        document.getElementById('divisionBtn5').style.display = "none";
        document.getElementById('report5').style.display = "none";
    } else {
        document.getElementById('multiplication5').style.display = "none";
    }
}

function division5() {
    if (document.getElementById('division5').style.display == "none") {
        document.getElementById('additionBtn5').style.display = "none";
        document.getElementById('subtractionBtn5').style.display = "none";
        document.getElementById('multiplicationBtn5').style.display = "none"
        document.getElementById('division5').style.display = "block";
        document.getElementById('divisionBtn5').style.display = "none";
        document.getElementById('report5').style.display = "none";
    } else {
        document.getElementById('division5').style.display = "none";
    }
}