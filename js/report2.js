function reportAdd2() {
    document.getElementById('additionBtn2').style.display = "none";
    document.getElementById('subtractionBtn2').style.display = "none";
    document.getElementById('multiplicationBtn2').style.display = "none";
    document.getElementById('divisionBtn2').style.display = "none";
    if (a2 < 12) {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "YOU FAILED. TRY AGAIN LATER";
        document.getElementById('additionBtn2').style.display = "block";

    } else {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "CONGRATS YOU PASSED ADDITION LEVEL 2";
        document.getElementById('additionBtn3').style.display = "inline-block";
        addPassLevel2++;
    }
}

function reportSubtract2() {
    document.getElementById('additionBtn2').style.display = "none";
    document.getElementById('subtractionBtn2').style.display = "none";
    document.getElementById('multiplicationBtn2').style.display = "none";
    document.getElementById('divisionBtn2').style.display = "none";
    if (s2 < 12) {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "CONGRATS YOU PASSED SUBTRACTION LEVEL 2";
        document.getElementById('subtractionBtn3').style.display = "inline-block";
        subtractPassLevel2++;
    }
}

function reportMultiply2() {
    document.getElementById('additionBtn2').style.display = "none";
    document.getElementById('subtractionBtn2').style.display = "none";
    document.getElementById('multiplicationBtn2').style.display = "none";
    document.getElementById('divisionBtn2').style.display = "none";
    if (m < 12) {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "CONGRATS YOU PASSED MULTIPLICATION LEVEL 2";
        document.getElementById('multiplicationBtn3').style.display = "inline-block";
        multiplyPassLevel2++;
    }
}

function reportDivide2() {
    document.getElementById('additionBtn2').style.display = "none";
    document.getElementById('subtractionBtn2').style.display = "none";
    document.getElementById('multiplicationBtn2').style.display = "none";
    document.getElementById('divisionBtn2').style.display = "none";
    if (d2 < 12) {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report2').style.display = "block";
        document.getElementById("report2").innerHTML = "CONGRATS YOU PASSED DIVISON LEVEL 2";
        document.getElementById('divisionBtn3').style.display = "inline-block";
        dividePassLevel2++;
    }
}