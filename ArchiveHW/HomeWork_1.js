/*  Задание!!!!
пример объекта, сделать хотя бы 5 
подобных
let person1 = {
	name: 'A',
	age: 0,
	gender: 'male',
}


const personsNamesForArmy = [];

/* написать условие по прохождению в армию и 
сделать столько if,
сколько у вас объектов, в каждом if 
будет проверяться свой объект


if () {
    // если проходит, то кладем массив 
    personsNamesForArmy имя объекта
}

выводим в консоль personsNamesForArmy
*/



let person1 = {
  name: "Artur", //Имя
  age: 20, //Возраст
  gender: "male", //Пол
  standing_Health: "good", //Состояние здоровья
  citizen_country: "yes", //Гражданин страны
  paid_off: "no", //Откупился (в английском нету слова откосил)
};

let person2 = {
  name: "Sasha",
  age: 18,
  gender: "female",
  standing_Health: "good",
  citizen_country: "yes",
  paid_off: "no",
};

let person3 = {
  name: "Nikolay",
  age: 28,
  gender: "male",
  standing_Health: "normal",
  citizen_Сountry: "no",
  paid_off: "no",
};
let person4 = {
  name: "Michael",
  age: 20,
  gender: "male",
  standing_Health: "bad",
  citizen_Сountry: "yes",
  paid_off: "no",
};
let person5 = {
  name: "Myron",
  age: 20,
  gender: "male",
  standing_Health: "good",
  citizen_Сountry: "yes",
  paid_off: "yes",
};
let person6 = {
  name: "Sergei",
  age: 25,
  gender: "male",
  standing_Health: "normal",
  citizen_Сountry: "yes",
  paid_off: "yes",
};
//Сюда ложим данные
const personsNamesForArmy = [];
/* В if проводим сравнение. Если возвраст попадает в данный диапазон, то ок. Далее если пол 'male' так же ок.
Если состояние здоровья 'normal' то ок. Если житель страны 'yes' то ок. И если житель страны 'no' то ок.
Если попадает по всем параметрам то он годен. 
  В else if проводим сранение такое же,только состояние здоровья 'good'.
  В else попадает тогда, когда персона не попадает под условия.
  В конце данные добавляем в personsNamesForArmy и пишем, Имя персоны и годен он или нет.
*/
if (
  17 > person1.age < 27 &&
  person1.gender === "male" &&
  person1.standing_Health === "normal" &&
  person1.citizen_country === "yes" &&
  person1.paid_off === "no"
) {
  personsNamesForArmy.push(person1.name + " - Годен к прохождению службы");
} else if (
  17 > person1.age < 27 &&
  person1.gender === "male" &&
  person1.standing_Health === "good" &&
  person1.citizen_country === "yes" &&
  person1.paid_off === "no"
) {
  personsNamesForArmy.push(person1.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person1.name + " - Не годен к прохождению службы");
}

if (
  17 > person2.age &&
  person2.age < 27 &&
  person2.gender === "male" &&
  person2.standing_Health === "normal" &&
  person2.citizen_country === "yes" &&
  person2.paid_off === "no"
) {
  personsNamesForArmy.push(person2.name + " - Годен к прохождению службы");
} else if (
  17 > person2.age &&
  person2.age < 27 &&
  person2.gender === "male" &&
  person2.standing_Health === "good" &&
  person2.citizen_country === "yes" &&
  person2.paid_off === "no"
) {
  personsNamesForArmy.push(person2.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person2.name + " - Не годен к прохождению службы");
}

if (
  17 > person3.age < 27 &&
  person3.gender === "male" &&
  person3.standing_Health === "normal" &&
  person3.citizen_country === "yes" &&
  person3.paid_off === "no"
) {
  personsNamesForArmy.push(person3.name + " - Годен к прохождению службы");
} else if (
  17 > person3.age < 27 &&
  person3.gender === "male" &&
  person3.standing_Health === "good" &&
  person3.citizen_country === "yes" &&
  person3.paid_off === "no"
) {
  personsNamesForArmy.push(person3.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person3.name + " - Не годен к прохождению службы");
}

if (
  17 > person4.age < 27 &&
  person4.gender === "male" &&
  person4.standing_Health === "normal" &&
  person4.citizen_country === "yes" &&
  person4.paid_off === "no"
) {
  personsNamesForArmy.push(person4.name + " - Годен к прохождению службы");
} else if (
  17 > person4.age < 27 &&
  person4.gender === "male" &&
  person4.standing_Health === "good" &&
  person4.citizen_country === "yes" &&
  person4.paid_off === "no"
) {
  personsNamesForArmy.push(person4.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person4.name + " - Не годен к прохождению службы");
}

if (
  17 > person5.age < 27 &&
  person5.gender === "male" &&
  person5.standing_Health === "normal" &&
  person5.citizen_country === "yes" &&
  person5.paid_off === "no"
) {
  personsNamesForArmy.push(person5.name + " - Годен к прохождению службы");
} else if (
  17 > person5.age < 27 &&
  person5.gender === "male" &&
  person5.standing_Health === "good" &&
  person5.citizen_country === "yes" &&
  person5.paid_off === "no"
) {
  personsNamesForArmy.push(person5.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person5.name + " - Не годен к прохождению службы");
}

if (
  17 > person6.age < 27 &&
  person6.gender === "male" &&
  person6.standing_Health === "normal" &&
  person6.citizen_country === "yes" &&
  person6.paid_off === "no"
) {
  personsNamesForArmy.push(person6.name + " - Годен к прохождению службы");
} else if (
  17 > person6.age < 27 &&
  person6.gender === "male" &&
  person6.standing_Health === "good" &&
  person6.citizen_country === "yes" &&
  person6.paid_off === "no"
) {
  personsNamesForArmy.push(person6.name + " - Годен к прохождению службы");
} else {
  personsNamesForArmy.push(person6.name + " - Не годен к прохождению службы");
}
//Выводим данные в консоль.
console.log(personsNamesForArmy);
