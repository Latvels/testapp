const people = [{
    id: 1,
    name: 'Artur',
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2,
}, {
id: 2,
    name: 'Anna',
    age: 17,
    moneyAmount: 50,
    desiredAlcoholName: 'beer',
    desiredAlcoholAmount: 3,
}];

const alcoholPriceForOneItem = {
    'whisky': 23, // don't change this one
    'beer': 15,
    'vine': 30,
    'brandy': 48,
    'rom': 36,
    'gin': 30,
    'vodka': 20, 
};

const LEGAL_AGE = 18;

const LegalAgePeople = people.filter(function getLegalAgePeople (arr, ageParamName) {
    return LEGAL_AGE <= arr.age;
})
console.log(LegalAgePeople)

const a = []

const students = [{
    name: 'Adolf',
    age: 19,
    gender: 'male',
}, {
    name: 'Eva',
    age: 19,
    gender: 'female',
}];
//f1
function AP(obj) {
    return obj.age >= LEGAL_AGE;
}

const agePeople = people.filter(AP);
console.log(agePeople)
//f1
//f2
const filteredPeople = people.filter(function (a, arrItem) {
    return a.desiredAlcoholName ===  alcoholPriceForOneItem[arrItem.desiredAlcoholName];
});
console.log(filteredPeople.name)
//f2
//f3
const studentsName = students.map(function (st) {
    return {age1: st.age, name1: st.name + " is a german student", isArtist: true };
});
/*
function all (obj, arrItem, alch, money) {
    if (obj.age >= LEGAL_AGE && obj.moneyAmount >= obj.desiredAlcoholName * alcoholPriceForOneItem[arrItem.desiredAlcoholName]) {
        a.push(LegalAgePeople.name + ' bought ' + LegalAgePeople.desiredAlcoholAmount + ' bottles of ' + 'a' + ' for ' + ' Sum ' + ' rubles ' );
    } else if (
        console.log('folse'))
    }
})*/