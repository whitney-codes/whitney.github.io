function reportAdd5() {
    document.getElementById('additionBtn5').style.display = "none";
    document.getElementById('subtractionBtn5').style.display = "none";
    document.getElementById('multiplicationBtn5').style.display = "none";
    document.getElementById('divisionBtn5').style.display = "none";
    if (a5 < 12) {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "YOU FAILED. TRY AGAIN LATER";

    }else {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "CONGRATS YOU PASSED ADDITION LEVEL 5";
        addPassLevel5++;
    }
}

function reportSubtract5() {
    document.getElementById('additionBtn5').style.display = "none";
    document.getElementById('subtractionBtn5').style.display = "none";
    document.getElementById('multiplicationBtn5').style.display = "none";
    document.getElementById('divisionBtn5').style.display = "none";
    if (s5 < 12) {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "CONGRATS YOU PASSED SUBTRACTION LEVEL 5";
        subtractPassLevel5++;

    }
}

function reportMultiply5() {
    document.getElementById('additionBtn5').style.display = "none";
    document.getElementById('subtractionBtn5').style.display = "none";
    document.getElementById('multiplicationBtn5').style.display = "none";
    document.getElementById('divisionBtn5').style.display = "none";
    if (m < 12) {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "CONGRATS YOU PASSED MULTIPLICATION LEVEL 5";
        multiplyLevel5++;
    }
}

function reportDivide5() {
    document.getElementById('additionBtn5').style.display = "none";
    document.getElementById('subtractionBtn5').style.display = "none";
    document.getElementById('multiplicationBtn5').style.display = "none";
    document.getElementById('divisionBtn5').style.display = "none";
    if (d5 < 12) {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    } else {
        document.getElementById('report5').style.display = "block";
        document.getElementById("report5").innerHTML = "CONGRATS YOU PASSED DIVISON LEVEL 5";
        dividePassLevel5++;
    }
}