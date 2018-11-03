var add = 0;
var subtract = 0;
var multiply = 0;
var divide = 0
var pos = 0;
var a = 0;
var s = 0;
var m = 0;
var d = 0;
var countQues = 0;
var level1Num1 = [5];
var level1Num2 = [5];
var addPassLevel1 = 0;
var addPassLevel2 = 0;
var addPassLevel3 = 0;
var addPassLevel4 = 0;
var addPassLevel5 = 0;
var subtractPassLevel1 = 0;
var subtractPassLevel2 = 0;
var subtractPassLevel3 = 0;
var subtractPassLevel4 = 0;
var subtractPassLevel5 = 0;
var multiplyPassLevel1 = 0;
var multiplyPassLevel2 = 0;
var multiplyPassLevel3 = 0;
var multiplyPassLevel4 = 0;
var multiplyPassLevel5 = 0;
var dividePassLevel1 = 0;
var dividePassLevel2 = 0;
var dividePassLevel3 = 0;
var dividePassLevel4 = 0;
var dividePassLevel5 = 0;
var i=0;

function level1Add() {
    if (pos < 16) {
        level1Num1[pos] = Math.floor(Math.random() * 9) + 1;
        level1Num2[pos] = Math.floor(Math.random() * 9) + 1;
        add = level1Num1[pos] + level1Num2[pos];
        document.getElementById("addDiv").innerHTML = "Question #" + countQues + "<br><br>Calculate the value of: <br><br>" + level1Num1[pos] + "+" + level1Num2[pos] + "<br><br>";
        countQues++;
        pos++;
    } else {
        document.getElementById("addition").innerHTML = ("You have completed all questions!");
        reportAdd();

    }
}

function level1Subtract() {
    if (pos < 16) {
        level1Num1[pos] = Math.floor(Math.random() * 9) + 1;
        level1Num2[pos] = Math.floor(Math.random() * 9) + 1;
        subtract = level1Num1[pos] - level1Num2[pos];
        document.getElementById("subtract").innerHTML = "Question #" + countQues + "<br><br>Calculate the value of: <br><br>" + level1Num1[pos] + "-" + level1Num2[pos] + "<br><br>";
        countQues++;
        pos++;
    } else {
        document.getElementById("subtract").innerHTML = ("You have completed all questions!");
        reportSubtract();
    }

}

function level1Multiply() {
    if (pos < 16) {
        level1Num1[pos] = Math.floor(Math.random() * 9) + 1;
        level1Num2[pos] = Math.floor(Math.random() * 9) + 1;
        multiply = level1Num1[pos] * level1Num2[pos];
        document.getElementById("multiply").innerHTML = "Question #" + countQues + "<br><br>Calculate the value of: <br><br>" + level1Num1[pos] + "*" + level1Num2[pos] + "<br><br>";
        countQues++;
        pos++;
    } else {
        document.getElementById("multiply").innerHTML = ("You have completed all questions!");
        reportMultiply();
    }

}

function level1Divide() {
    if (pos < 16) {
        level1Num1[pos] = Math.floor(Math.random() * 9) + 1;
        level1Num2[pos] = Math.floor(Math.random() * 9) + 1;
        divide = parseFloat(level1Num1[pos] / level1Num2[pos]).toFixed(2);

        document.getElementById("divide").innerHTML = "Question #" + countQues + "<br><br>Calculate the value of: <br><br>" + level1Num1[pos] + "/" + level1Num2[pos] + "<br><br>";
        countQues++;
        pos++;
    } else {
        document.getElementById("divide").innerHTML = ("You have completed all questions!");
        reportDivide();
    }

}

function checkAdd() {
    if (add == parseInt(document.getElementById("answer").value)) {
        document.getElementById("status").innerHTML = "GOOD JOB!";
        document.getElementById("status").style.textAlign = "center";
        a++;
        level1Add();
    } else {
        document.getElementById("status").innerHTML = "Incorrect.";
        document.getElementById("status").style.textAlign = "center";
        level1Add();
    }
    document.getElementById('answer').value = '';
}

function checkSubtract() {
    if (subtract == parseInt(document.getElementById("subtractAns").value)) {
        document.getElementById("subtractStatus").innerHTML = "GOOD JOB!";
        document.getElementById("subtractStatus").style.textAlign = "center";
        s++;
        level1Subtract();
    } else {
        document.getElementById("subtractStatus").innerHTML = "Incorrect.";
        document.getElementById("subtractStatus").style.textAlign = "center";
        level1Subtract();
    }
    document.getElementById("subtractAns").value = '';
}

function checkMultiply() {
    if (multiply == parseInt(document.getElementById("multiplyAns").value)) {
        document.getElementById("multiplyStatus").innerHTML = "GOOD JOB!";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        m++;
        level1Multiply();
    } else {
        document.getElementById("multiplyStatus").innerHTML = "Incorrect.";
        document.getElementById("multiplyStatus").style.textAlign = "center";
        level1Multiply();
    }
    document.getElementById("multiplyAns").value = '';
}

function checkDivide() {
    if (divide == parseInt(document.getElementById("divideAns").value)) {
        document.getElementById("divideStatus").innerHTML = "GOOD JOB!";
        document.getElementById("divideStatus").style.textAlign = "center";
        d++;
        level1Divide();
    } else {
        document.getElementById("divideStatus").innerHTML = "Incorrect.";
        document.getElementById("divideStatus").style.textAlign = "center";
        level1Divide();
    }
    document.getElementById("divideAns").value = '';
}

function addition() {
    if (document.getElementById('addition').style.display == "none") {
        document.getElementById('addition').style.display = "block";
        document.getElementById('additionBtn').style.display = "none";
        document.getElementById('subtractionBtn').style.display = "none";
        document.getElementById('divisionBtn').style.display = "none";
        document.getElementById('multiplicationBtn').style.display = "none";
        document.getElementById('report').style.display = "none";
    } else {
        document.getElementById('addition').style.display = "none";
    }

}

function subtraction() {
    if (document.getElementById('subtraction').style.display == "none") {
        document.getElementById('subtraction').style.display = "block";
        document.getElementById('subtractionBtn').style.display = "none";
        document.getElementById('additionBtn').style.display = "none";
        document.getElementById('divisionBtn').style.display = "none";
        document.getElementById('multiplicationBtn').style.display = "none";
        document.getElementById('report').style.display = "none";
    } else {
        document.getElementById('subtraction').style.display = "none";
    }

}

function multiplication() {
    if (document.getElementById('multiplication').style.display == "none") {
        document.getElementById('additionBtn').style.display = "none";
        document.getElementById('subtractionBtn').style.display = "none";
        document.getElementById('multiplication').style.display = "block";
        document.getElementById('multiplicationBtn').style.display = "none";
        document.getElementById('divisionBtn').style.display = "none";
        document.getElementById('report').style.display = "none";
    } else {
        document.getElementById('multiplication').style.display = "none";
    }
}

function division() {
    if (document.getElementById('division').style.display == "none") {
        document.getElementById('additionBtn').style.display = "none";
        document.getElementById('subtractionBtn').style.display = "none";
        document.getElementById('multiplicationBtn').style.display = "none"
        document.getElementById('division').style.display = "block";
        document.getElementById('divisionBtn').style.display = "none";
        document.getElementById('report').style.display = "none";
    } else {
        document.getElementById('division').style.display = "none";
    }
}