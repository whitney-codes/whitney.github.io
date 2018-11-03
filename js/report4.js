function reportAdd4() {
    document.getElementById('additionBtn4').style.display = "none";
    document.getElementById('subtractionBtn4').style.display = "none";
    document.getElementById('multiplicationBtn4').style.display = "none";
    document.getElementById('divisionBtn4').style.display = "none";
    if (a4 < 12) {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "YOU FAILED. TRY AGAIN LATER";

    }else {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "CONGRATS YOU PASSED ADDITION LEVEL 4";
        document.getElementById('additionBtn5').style.display = "inline-block";
        addPassLevel4++;
    }
}

function reportSubtract4() {
    document.getElementById('additionBtn4').style.display = "none";
    document.getElementById('subtractionBtn4').style.display = "none";
    document.getElementById('multiplicationBtn4').style.display = "none";
    document.getElementById('divisionBtn4').style.display = "none";
    if (s4 < 12) {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "CONGRATS YOU PASSED SUBTRACTION LEVEL 4";
        document.getElementById('subtractionBtn5').style.display = "inline-block";
        subtractPassLevel4++;
    }
}

function reportMultiply4() {
    document.getElementById('additionBtn4').style.display = "none";
    document.getElementById('subtractionBtn4').style.display = "none";
    document.getElementById('multiplicationBtn4').style.display = "none";
    document.getElementById('divisionBtn4').style.display = "none";
    if (m < 12) {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "CONGRATS YOU PASSED MULTIPLICATION LEVEL 4";
        document.getElementById('multiplicationBtn5').style.display = "inline-block";
        multiplyPassLevel4++;
    }
}

function reportDivide4() {
    document.getElementById('additionBtn4').style.display = "none";
    document.getElementById('subtractionBtn4').style.display = "none";
    document.getElementById('multiplicationBtn4').style.display = "none";
    document.getElementById('divisionBtn4').style.display = "none";
    if (d4 < 12) {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report4').style.display = "block";
        document.getElementById("report4").innerHTML = "CONGRATS YOU PASSED DIVISON LEVEL 4";
        document.getElementById('divisionBtn5').style.display = "inline-block";
        dividePassLevel4++;
    }
}