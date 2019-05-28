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
}

function operatorButtonHandler(event) {
}

function equalsButtonHandler(event) {
}
