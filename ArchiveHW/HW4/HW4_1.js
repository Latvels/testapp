const people = [
  {
    id: 1,
    name: "Artur",
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: "whisky",
    desiredAlcoholAmount: 2,
  },
  {
    id: 2,
    name: "Anna",
    age: 17,
    moneyAmount: 50,
    desiredAlcoholName: "beer",
    desiredAlcoholAmount: 3,
  },
  {
    id: 3,
    name: "Alexandr",
    age: 20,
    moneyAmount: 75,
    desiredAlcoholName: "vodka",
    desiredAlcoholAmount: 2,
  },
  {
    id: 4,
    name: "Nikolay",
    age: 34,
    moneyAmount: 200,
    desiredAlcoholName: "brandy",
    desiredAlcoholAmount: 4,
  },
  {
    id: 5,
    name: "Konstantin",
    age: 28,
    moneyAmount: 97,
    desiredAlcoholName: "gin",
    desiredAlcoholAmount: 3,
  },
  {
    id: 6,
    name: "Bruce",
    age: 44,
    moneyAmount: 135,
    desiredAlcoholName: "rom",
    desiredAlcoholAmount: 2,
  },
  {
    id: 7,
    name: "Maria",
    age: 19,
    moneyAmount: 35,
    desiredAlcoholName: "vine",
    desiredAlcoholAmount: 1,
  },
  {
    id: 8,
    name: "Mark",
    age: 18,
    moneyAmount: 10,
    desiredAlcoholName: "beer",
    desiredAlcoholAmount: 1,
  },
];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
  whisky: 23, // don't change this one
  beer: 15,
  vine: 30,
  brandy: 48,
  rom: 36,
  gin: 30,
  vodka: 20,
};

const LEGAL_AGE = 18; // don't change this

const res = people.reduce(function (acc, arr) {
  if (
    LEGAL_AGE <= arr.age &&
    arr.moneyAmount >=
      alcoholPriceForOneItem[arr.desiredAlcoholName] * arr.desiredAlcoholAmount
  ) {
    return (acc +=
      arr.name +
      " bought " +
      arr.desiredAlcoholAmount +
      " bottles of " +
      arr.desiredAlcoholName +
      " for " +
      alcoholPriceForOneItem[arr.desiredAlcoholName] *
        arr.desiredAlcoholAmount +
      " rubles " +
      "\n");
  }
  return acc;
}, {});

console.log(res);
