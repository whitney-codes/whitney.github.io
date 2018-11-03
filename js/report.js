function reportAdd() {
    if (a < 12) {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "YOU FAILED. TRY AGAIN LATER";
        document.getElementById('additionBtn').style.display = "block";
        level1Add();
    } else {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "CONGRATS YOU PASSED ADDITION LEVEL";
        addPassLevel1++;
        document.getElementById('additionBtn2').style.display = "inline-block";
        level2Add();
    }
}

function reportSubtract() {
    document.getElementById('additionBtn').style.display = "none";
    document.getElementById('subtractionBtn').style.display = "none";
    document.getElementById('multiplicationBtn').style.display = "none";
    document.getElementById('divisionBtn').style.display = "none";
    if (s < 12) {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "CONGRATS YOU PASSED SUBTRACTION LEVEL 1";
        document.getElementById('subtractionBtn2').style.display = "inline-block";
        subtractPassLevel1++;
    }
}

function reportMultiply() {
    document.getElementById('additionBtn').style.display = "none";
    document.getElementById('subtractionBtn').style.display = "none";
    document.getElementById('multiplicationBtn').style.display = "none";
    document.getElementById('divisionBtn').style.display = "none";
    if (m < 12) {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "CONGRATS YOU PASSED MULTIPLICATION LEVEL 1";
        document.getElementById('multiplicationBtn2').style.display = "inline-block";
        multiplyPassLevel1++;
    }
}

function reportDivide() {
    document.getElementById('additionBtn').style.display = "none";
    document.getElementById('subtractionBtn').style.display = "none";
    document.getElementById('multiplicationBtn').style.display = "none";
    document.getElementById('divisionBtn').style.display = "none";
    if (d < 12) {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }  else {
        document.getElementById('report').style.display = "block";
        document.getElementById("report").innerHTML = "CONGRATS YOU PASSED DIVISION LEVEL 1";
        document.getElementById('divisionBtn2').style.display = "inline-block";
        dividePassLevel1++;
    }
}