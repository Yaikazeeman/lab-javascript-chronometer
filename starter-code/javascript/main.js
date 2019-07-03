var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerHTML == "START"){
        btnLeft.innerHTML = "STOP"
        btnLeft.setAttribute("class", "btn stop")

        btnRight.innerHTML = "SPLIT"
        btnRight.setAttribute("class", "btn split")
        chronometer.startClick(); 
    }else{
        btnLeft.innerHTML = "START"
        btnLeft.setAttribute("class", "btn start")

        btnRight.innerHTML = "RESET"
        btnRight.setAttribute("class", "btn reset")
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML == "SPLIT"){
        printSplit();
    }else{
        setResetBtn();
    }
        
});


function printTime() {
    let nowTime = chronometer.setTime();
    minDec.innerText = nowTime.charAt(0);
    minUni.innerText = nowTime.charAt(1);
    secDec.innerText = nowTime.charAt(2);
    secUni.innerText = nowTime.charAt(3);
    return nowTime.charAt(0) + nowTime.charAt(1) + ":" + nowTime.charAt(2) + nowTime.charAt(3);
}

function printMilliseconds() {

}

function printSplit() {
    let splitTime = document.createElement("li")
    splitTime.innerHTML = printTime();
    document.getElementById("splits").appendChild(splitTime); 
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
}

function setResetBtn() {
    clearSplits();
    chronometer.resetClick();
    let backToZero = "0000"
    minDec.innerText = backToZero.charAt(0);
    minUni.innerText = backToZero.charAt(1);
    secDec.innerText = backToZero.charAt(2);
    secUni.innerText = backToZero.charAt(3);
    return backToZero.charAt(0) + backToZero.charAt(1) + ":" + backToZero.charAt(2) + backToZero.charAt(3);
    }