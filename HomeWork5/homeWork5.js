// button clear textarea one (left)
function btn_textOne_Clear() {
    document.getElementById('TextOne').value = '';
}

// button clear textarea two  (right)
function btn_textTwo_Clear() {
    document.getElementById('TextTwo').value = '';
}
const tarOne = 'Привет, <i>меня</i> зовут <b>Игорь</b>';
document.getElementById('TextOne').value = tarOne;
// button convert
function btnConvert() {
    document.getElementById('TextTwo').innerHTML = document.getElementById('TextOne').value;
}

// Select chose color for textarea two (right)
function selectChooseColor() {
const color = document.getElementById('ChooseColor').value;
const list = document.getElementById('TextTwo');
list.style.color = color;
}
