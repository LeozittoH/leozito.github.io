var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1; 
    if (currentNumber >= 10) {
        currentNumber = 10;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1; 
    if (currentNumber <= 0) {
        currentNumber = 0;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

