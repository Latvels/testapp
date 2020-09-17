/**
 * fruits arr is a store of fruits, fill as you wish
 * Example
 * ['banana', 'orange', 'orange']
 */
//Добавить больше фрутов. Сейчас тестовые. ФРУКТЫ НЕ БЕСКОНЕЧНЫЕ
const fruits = ['banana', 'orange', 'apple', 'kiwi', 'banana', 'banana', 'apple', 'apple', 'apple', 'orange', 'banana']; //values

 // this comments because not yet needed
//console.table(fruits);
//console.log(Object.values(fruits));

//console.log(Object.values(fruits));

/**
 * fruitsBought arr is a store of bought fruits
 * push fruit here after buying
 */
//сюда загружать купленные фрукты
const fruitsBought = [];
/**
 * logs array is used to store logs on the page.
 * Can be filled with executing log function
 *
 * Example:
 * log(customerName, fruitName, success)
 * where
 * - customerName is name of customer
 * - fruitName is name of fruit
 * - success is state if customer bought a fruit
 */
/*
Массив журналов используется для хранения журналов на странице.
 * Может быть заполнено выполнением функции журнала
 *Пример:
 * журнал (customerName, fruitName, успех)
 * где
 * - customerName - имя клиента
 * - fruitName - это название фрукта
 * - успех - это состояние, если покупатель купил фрукт
*/
//сюда вносим данные о покупателях, кто и что купил
const logs = [];

/**
 * Example of customer
 */
//информация о покупателях
const customers = [
  {
    name: "Ivan",
    balance: 46,
    fruitsToBuy: [
      {
        name: "banana",
        count: 3,
      },
    ],
  },
  {
    name: "Anna",
    balance: 100,
    fruitsToBuy: [
      {
        name: "apple",
        count: 2,
      },
    ],
  },
  {
    name: "Natali",
    balance: 13,
    fruitsToBuy: [
      {
        name: "kiwi",
        count: 2,
      },
    ],
  },
  {
    name: "Maks",
    balance: 130,
    fruitsToBuy: [
      {
        name: "apple",
        count: 3,
      },
    ],
  }
];

const c = [customers[0].fruitsToBuy, customers[1].fruitsToBuy, customers[2].fruitsToBuy, customers[3].fruitsToBuy]
const c_f1 = customers[0].fruitsToBuy;
const c_f2 = customers[1].fruitsToBuy;
const c_f3 = customers[2].fruitsToBuy;
const c_f4 = customers[3].fruitsToBuy;
//console.log(c_f1, customers[0].name)
//console.log(c_f2, customers[1].name)
//console.log(c_f3, customers[2].name)
//console.log(c_f4, customers[3].name)
//console.log(c)
//console.log(Object.values(c))
/**
 * Function buyFruits is used to iterate over array passes as a param
 * if customer wants to buy 4 banana try to remove banana from fruits array (find it above)
 * and push it to fruitsBought array (find it above)
 *
 * Push execution result in log
 * function log is written below, you'll find execution example on line 18 of this file
 *
 * Example:
 * buyFruits(customers)
 */
/*
Функция buyFruits используется для перебора массива в качестве параметра
если клиент хочет купить 4 банана, попробуйте удалить банан из фруктового массива (найдите его выше)
 * и отправьте его в массив fruitsBought (найдите его выше)
Нажмите результат выполнения в журнале
 * журнал функций написан ниже, пример выполнения вы найдете в строке 18 этого файла
function buyFruits(customersArr) {
  //
}
*/

//основное решение 2 функцииconst c = [customers[0].fruitsToBuy, customers[1].fruitsToBuy, customers[2].fruitsToBuy, customers[3].fruitsToBuy] имена и количество
function buyFruits(customersArr) {
  customersArr.forEach(function (customer) {
      customer.fruitsToBuy.forEach(function (fruitToBuy) {
          for (let i = 0; i < fruitToBuy.count; i++) {
              const idx = fruits.findIndex(function (fruit) {
                  return fruit === fruitToBuy.name;
              });

              const successful = idx !== -1;

              if (successful) {
                  fruitsBought.push(fruits.splice(idx, 1));
              }

              log(customer.name, fruitToBuy.name, successful);
          }
      });
  });
}

const buyFru = buyFruits(customers)
//console.log(buyFru)


/*
 * Function getFruitsMap returns map of fruits
 * Example:
 *
 * const fr = ['banana', 'orange', 'orange']
 * getFruitsMap(fr); -> { banana: 1, orange: 2 }
 *
 */
/*
Функция getFruitsMap возвращает карту фруктов
Пример: 
* const fr = ['banana', 'orange', 'orange']
 * getFruitsMap(fr); -> { banana: 1, orange: 2 }
*/

//this function is working
function getFruitsMap(fruitsArr) {
  return fruitsArr.reduce((acc, fruit) => {
      if (!acc[fruit]) {
          acc[fruit] = 0;
      }

      acc[fruit]++;

      return acc;
  }, {})
}

const fr = getFruitsMap(fruits);
//console.log(fr) // this comment for this function as is done


// DONT'T EDIT FOLLOWING CODE
buyFruits(customers);
const fruitsLeftMap = getFruitsMap(fruits);
const fruitsBoughtMap = getFruitsMap(fruitsBought);

function log(customerName, fruitName, success) {
  const action = success ? "bought" : "faliled to buy";
  const className = success ? "green" : "red";
  logs.push(
    `${customerName} <span class=${className}>${action}</span> ${fruitName}`
  );
}

function render() {
  renderLog();
  renderFruits("fruits-left", fruitsLeftMap);
  renderFruits("fruits-bought", fruitsBoughtMap);

  function renderLog() {
    let existingLogsContainer = document.getElementById("messages");
    let mainLogsContainer = document.getElementById("log");

    if (existingLogsContainer) {
      mainLogsContainer.removeChild(existingLogsContainer);
    }

    const logsContainer = document.createElement("ul");
    logsContainer.id = "messages";

    logs.forEach((log) => {
      const logEl = document.createElement("li");
      logEl.innerHTML = log;
      logsContainer.appendChild(logEl);
    });

    mainLogsContainer.appendChild(logsContainer);
  }

  function renderFruits(id, mappedData) {
    const mainFruitsContainer = document.getElementsByClassName(id)[0];
    const existingFruitsBoughtContainer = (mainFruitsContainer.getElementsByClassName(
      "fruits-list"
    ) || [])[0];

    if (existingFruitsBoughtContainer) {
      mainFruitsContainer.removeChild(existingFruitsBoughtContainer);
    }

    const fruitsContainer = document.createElement("ul");
    fruitsContainer.classList.add("fruits-list");

    for (let key in mappedData) {
      const fruitEl = document.createElement("li");
      const nameEl = document.createElement("span");
      const countEl = document.createElement("span");
      nameEl.innerText = `${key}:`;
      countEl.innerText = mappedData[key];

      fruitEl.appendChild(nameEl);
      fruitEl.appendChild(countEl);
      fruitsContainer.appendChild(fruitEl);
    }

    mainFruitsContainer.appendChild(fruitsContainer);
  }
}
