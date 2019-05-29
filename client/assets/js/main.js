var calculationArray = [];
var displayArray = [];
var stringNumberToPush = '';
var calculationResult = null;

$(document).ready(initializeApp);

function initializeApp() {
    applyClickHandlers();
}

function applyClickHandlers() {
    $('#number-block').on('click','.number',numberButtonHandler);
    $('#operator-column').on('click','.operator',operatorButtonHandler);
    $('#number-block').on('click','#equals',equalsButtonHandler);
}

function numberButtonHandler(event) {
    var inputtedNumber = '';
    inputtedNumber = $(event.currentTarget).find("p").text();
    stringNumberToPush = stringNumberToPush + inputtedNumber;
    displayArray.push(inputtedNumber);
    updateDisplay()
}

function operatorButtonHandler(event) {
    var inputtedOperator = '';
    inputtedOperator = $(event.currentTarget).find("p").text();
    displayArray.push(inputtedOperator);
    updateDisplay();
    calculationArray.push(stringNumberToPush);
    calculationArray.push(inputtedOperator);
    stringNumberToPush = '';
}

function equalsButtonHandler(event) {
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = '';
    displayArray = [];
    console.log(calculationArray);
}

function updateDisplay() {
    var displayText = displayArray.join("");
    $('#display-text').text(displayText);
}