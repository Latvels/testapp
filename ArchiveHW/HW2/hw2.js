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
}, {
    id: 3,
        name: 'Alexandr',
        age: 20,
        moneyAmount: 75,
        desiredAlcoholName: 'vodka',
        desiredAlcoholAmount: 2,
    }, {
    id: 4,
        name: 'Nikolay',
        age: 34,
        moneyAmount: 200,
        desiredAlcoholName: 'brandy',
        desiredAlcoholAmount: 4,
    }, {
    id: 5,
        name: 'Konstantin',
        age: 28,
        moneyAmount: 97,
        desiredAlcoholName: 'gin',
        desiredAlcoholAmount: 3,
    }, {
    id: 6,
        name: 'Bruce',
        age: 44,
        moneyAmount: 135,
        desiredAlcoholName: 'rom',
        desiredAlcoholAmount: 2,
    }, {
    id: 7,
        name: 'Maria',
        age: 19,
        moneyAmount: 35,
        desiredAlcoholName: 'vine',
        desiredAlcoholAmount: 1,
    }, {
    id: 8,
        name: 'Mark',
        age: 18,
        moneyAmount: 10,
        desiredAlcoholName: 'beer',
        desiredAlcoholAmount: 1,
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

const LegalAgePeople = people.filter(function getLegalAgePeople (arr) {
    return LEGAL_AGE <= arr.age;
})
console.log(LegalAgePeople)

/
//test
console.log(alcoholPriceForOneItem)
console.log(Object.keys(alcoholPriceForOneItem))
console.log(Object.values(alcoholPriceForOneItem))
console.log('тестовое значение перед функцим 2')
//two function - работает

function getPeopleWhoHaveMoneyForAlcohol(people) {
    return people.filter( function(obj) {
      return obj.moneyAmount - (alcoholPriceForOneItem[obj.desiredAlcoholName] * obj.desiredAlcoholAmount);
    }); 
  }
      
  const filteredByMoney = getPeopleWhoHaveMoneyForAlcohol(LegalAgePeople);
  console.log(filteredByMoney) 
  
  //функция ниже работает
/*
const a = LegalAgePeople.reduce(function (arr) {

	if (Object.keys(alcoholPriceForOneItem)) {
        LegalAgePeople.alcoholPriceForOneItem === Object.keys(alcoholPriceForOneItem);
    }
    arr.push(LegalAgePeople.desiredAlcoholAmount * Object.values(alcoholPriceForOneItem));
    
	return arr;

}, []);

console.log(Object.keys(a));
console.log(a);
*/
//three function - - ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]


console.log('тестовое значение перед функции 3')

const res = LegalAgePeople.map(function (arr) {
    return arr.name + ' bought ' + arr.desiredAlcoholAmount + ' bottles of ' +
     arr.desiredAlcoholName + ' for ' +
      (alcoholPriceForOneItem[arr.desiredAlcoholName] * arr.desiredAlcoholAmount) + ' rubles ' 
})

console.log(res)
console.log('тестовое значение перед функции 4')



//всё ниже по ф 2)
/*
const c = alcoholPriceForOneItem.filter(function (arr)) {
    return arr.
}
*/
/*
const b = people.filter(function getAlcho (arr) {
    return arr.desiredAlcoholName === (Object.keys(alcoholPriceForOneItem));
})
console.log(Object.keys(b))
*/

/*
const a = [];
for (let i=0; i < people.length; i++) {
    if(people.desiredAlcoholName === 'whisky') {
        a.push(people.id);
    }
}
console.log(a)
*/

/*
const peopleWhoHaveMoneyForAlcohol = people.filter(function getPeopleWhoHaveMoneyForAlcohol(arr) {
    return alcoholPriceForOneItem == arr.desiredAlcoholName;
})
console.log(peopleWhoHaveMoneyForAlcohol)
*/

/*
const getMoney =function getMoneyAlcohol(arr) {
    return (Object.keys(alcoholPriceForOneItem)) ;
}
getMoney.push(getMoneyAlcohol)
console.log(getMoney)
*/
/*
for (let keys of Object.keys(alcoholPriceForOneItem)) {
    if (LegalAgePeople.desiredAlcoholName === Object.keys(alcoholPriceForOneItem)) {
        getMoney.push(LegalAgePeople.desiredAlcoholName && desiredAlcoholAmount * Object.values(alcoholPriceForOneItem))
    }
    
}


*/

/*
const getMoney = people.filter(function(LegalAgePeople, desiredAlcoholAmount){
    return alcoholPriceForOneItem.keys === LegalAgePeople.desiredAlcoholName 
})


console.log(getMoney)
*/
//through .map for alcoholPriceForOneItem

/*
const a = function compare(alcoholPriceForOneItem, LegalAgePeople ){
  
   if(!alcoholPriceForOneItem  || !LegalAgePeople.desiredAlcoholName) return
  
    let result;
  
  alcoholPriceForOneItem.forEach((e1,i)=>LegalAgePeople.desiredAlcoholName.forEach(e2=>{
    
         if(e1.length > 1 && e2.length){
            result = compare(e1,e2);
         }else if (e1 == e2 ) {
            result = false
         }else{
            result = true
         }
    })
  )
  
  return result
  
}

console.log(a)
*/
