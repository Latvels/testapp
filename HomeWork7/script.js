//поля ввода и вывода
let input_out = document.getElementById('cursOut');

let input_in = document.getElementById('cursInp');
input_in.value = localStorage.getItem('dataForMyInput') || '';
input_in.oninput = function() {
        localStorage.setItem('dataForMyInput', input_in.value);
    }

//кнопка и функция к ней
const btn_convert = document.getElementById('btn_con');
btn_convert.addEventListener('click', getCurrency);

//селектор
const curId = document.querySelector('select');
curId.addEventListener('change', currencySel);

function currencySel() {
    let selVal = document.getElementById('selectVal').value;
    console.log(selVal)
}
/*
ид валюты - Cur_ID
кол измерение - Cur_Scale
стоимость вал - Cur_OfficialRate
*/
async function getCurrency() {
    let cursID = document.getElementById('selectVal').value;

    console.log(cursID)
    if (!cursID) {
        return;
    }
    
    const url = `https://www.nbrb.by/api/exrates/rates/${cursID}`;

    const response = await fetch(url);
    const result = await response.json();
    
    const curRate = result.Cur_OfficialRate;
    const curScale = result.Cur_Scale;

    const st = curRate / curScale;
    const str = input_in.value / st;
    document.getElementById('cursOut').innerHTML = str.toFixed(2);

}
