const people = [{
    id: 1,
    name: 'A',
    age: 19,
    moneyAmount: 100,
    disiredAlcoholName: 'wisky',
    disiredAlcoholAmount: 2,
}, {
id: 2,
name: 'B',
age: 15,
moneyAmount: 50,
disiredAlcoholName: 'beer',
    disiredAlcoholAmount: 3,
}];

const alcoholePriceForOneItem = {
wisky: 23,
beer: 10,
};
const LEGAL_AGE = 18;

function getLegalAgePeople(people,) {
    return people.filter(function(obj) {
        return obj.age>=18;
    });
    
}

const filteredByAge = getLegalAgePeople(people);
//console.log(filteredByAge)
//функция 1 работает

function getPeopleWhoHaveMoneyForAlcohol(people) {
  return people.filter( function(obj) {
    return obj.moneyAmount - (alcoholePriceForOneItem[obj.disiredAlcoholName] * obj.disiredAlcoholAmount) >= 0;
  }); 
}
    
const filteredByMoney = getPeopleWhoHaveMoneyForAlcohol(filteredByAge);
console.log(filteredByMoney)  
// функция 2 норм уже

function buyAlcohol(people) { 
  return people.map(function(p){
    return p.name + " bought " + p.disiredAlcoholAmount + " bottles of " 
    + p.disiredAlcoholName +" for " +
      alcoholePriceForOneItem[p.disiredAlcoholName] * p.disiredAlcoholAmount + " rubles ";
  });
}

const result = buyAlcohol(filteredByMoney);

console.log(result)
