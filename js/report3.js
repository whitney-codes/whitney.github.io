function reportAdd3() {
    document.getElementById('additionBtn3').style.display = "none";
    document.getElementById('subtractionBtn3').style.display = "none";
    document.getElementById('multiplicationBtn3').style.display = "none";
    document.getElementById('divisionBtn3').style.display = "none";
    if (a3 < 12) {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "YOU FAILED. TRY AGAIN LATER";

    }else {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "CONGRATS YOU PASSED ADDITION LEVEL 3";
        document.getElementById('additionBtn4').style.display = "inline-block";
        addPassLevel3++;
    }
}

function reportSubtract3() {
    document.getElementById('additionBtn3').style.display = "none";
    document.getElementById('subtractionBtn3').style.display = "none";
    document.getElementById('multiplicationBtn3').style.display = "none";
    document.getElementById('divisionBtn3').style.display = "none";
    if (s3 < 12) {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "CONGRATS YOU PASSED SUBTRACTION LEVEL 3";
        document.getElementById('subtractionBtn4').style.display = "inline-block";
        subtractPassLevel3++;
    }
}

function reportMultiply3() {
    document.getElementById('additionBtn3').style.display = "none";
    document.getElementById('subtractionBtn3').style.display = "none";
    document.getElementById('multiplicationBtn3').style.display = "none";
    document.getElementById('divisionBtn3').style.display = "none";
    if (m < 12) {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "CONGRATS YOU PASSED MULTIPLICATION LEVEL 3";
        document.getElementById('multiplicationBtn4').style.display = "inline-block";
        multiplyPassLevel3++;
    }
}

function reportDivide3() {
    document.getElementById('additionBtn3').style.display = "none";
    document.getElementById('subtractionBtn3').style.display = "none";
    document.getElementById('multiplicationBtn3').style.display = "none";
    document.getElementById('divisionBtn3').style.display = "none";
    if (d3 < 12) {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "YOU FAILED. TRY AGAIN LATER";
    }else {
        document.getElementById('report3').style.display = "block";
        document.getElementById("report3").innerHTML = "CONGRATS YOU PASSED DIVISON LEVEL 3";
        document.getElementById('divisionBtn4').style.display = "inline-block";
        dividePassLevel3++;
    }
}
