window.addEventListener('load', function OnWindowLoaded() {
    
    let calculateKeys = [
        'C', '<-', '(', ')',
        '1', '2', '3', '*',
        '4', '5', '6', '/',
        '7', '8', '9', '-',
        '0', '.', '+', '='
    ];
 
    // форма калькулятора
    let calcBody = document.getElementById('calcBody');
 
    // текстовое поле с математическим выражением
    let textArea = document.getElementById('inputVal');
 
    // Добавление кнопок к форме калькулятора
    calculateKeys.forEach(function (sign) {
        let signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calcBody.appendChild(signElement);
    });
 
    // проходит по всем кнопкам калькулятора
    // добавляет обработчик на клик
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на любую кнопку
        button.addEventListener('click', onButtonClick);
    });
 
    // функция клика по кнопке калькулятора
    function onButtonClick(e) {
        // e - MouseEvent (содержит информацию о клике)
        if (e.target.innerHTML === 'C') {
            // Если нажата кнопка "с", то стирает все из текстового поля
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            // Если нажата кнопка "=", то, приведя выражение
            // в текстовом поле к javascript, вычислить значение
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            // Если textarea содержит только "0", то
            // стереть "0" и записать
            // значения кнопки в текстовое поле
            textArea.innerHTML = e.target.innerHTML;
        } else {
            // Добавление значения кнопки в текстовое поле
            textArea.innerHTML += e.target.innerHTML;
        }
    }
});