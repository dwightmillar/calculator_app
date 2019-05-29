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
}

function equalsButtonHandler(event) {
}

function updateDisplay() {
    var displayText = displayArray.join("");
    $('#display-text').text(displayText);
}