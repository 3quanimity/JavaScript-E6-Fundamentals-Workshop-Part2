// ******************************************************* DATA
const users = [
  { name: 'User One', category: 'Finance', birthYear: 1981, salary: 1500 },
  { name: 'User Two', category: 'Retail', birthYear: 1992, salary: 2000 },
  { name: 'User Three', category: 'Auto', birthYear: 1999, salary: 2500 },
  { name: 'User Four', category: 'Retail', birthYear: 1989, salary: 2000 },
  { name: 'User Five', category: 'Technology', birthYear: 2009, salary: 3000 },
  { name: 'User Six', category: 'Finance', birthYear: 1987, salary: 1500 },
  { name: 'User Seven', category: 'Auto', birthYear: 1986, salary: 2500 },
  { name: 'User Eight', category: 'Technology', birthYear: 2011, salary: 3000 },
  { name: 'User Nine', category: 'Retail', birthYear: 1981, salary: 2000 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let x = pokemons.filter(pokemon=> pokemon.base.Attack > 100).map(pokemon=>pokemon.name.english)
// console.log(x)

// ******************************************************* HIGHER ORDER FUNCTIONS
// *******************************************************Rappel Functions
// function sayMyName(name) {
//   console.log(`Yes, ${name}`);
// }
// const sayMyName = name => console.log(`Yes, ${name}`);
// sayMyName('');

// *******************************************************forEach
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// users.forEach(function(user) {
//   console.log(user);
// });

// *******************************************************filter
// let adults = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     adults.push(ages[i]);
//   }
// }

// let adults = ages.filter(function(age) {
//   return age >= 21;
// });

// console.log(ages);
// console.log(adults);

// const usersInFinance = users.filter(user => user.salary >= 2500);
// console.log(usersInFinance);

// *******************************************************map
// let phrases = users.map(
//   user =>
//     `Mr. ${user.name}, born in ${user.birthYear}, works now in ${user.category}`
// );

// let mrs = users.map(function wtvr(user) {
//   return 'Mr. ' + user.name;
// });

// phrases.map(phrase => console.log(phrase));

// let brthYears = ages.map(age => 2019 - age);
// console.log(brthYears);

// *******************************************************sort
// const sortedUsers = users.sort(function(u1, u2) {
//   if (u1.salary > u2.salary) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedUsers = users.sort((a, b) => a.salary - b.salary);
// let newUsers = ['achref', 'haroun', 'marwen', 'mostfa', 'wala', 'oumayma'];
// const sortedUsers = newUsers.sort();

// console.log(sortedUsers);

// *******************************************************reduce
// let ageSum = 0;
// for (let age of ages) {
//   ageSum += age;
// }

// const ageSum = ages.reduce(function(total, age) {
//   return (total += age);
// }, 0);

// const ageSum = ages.reduce((total, age) => (total += age), 0);

// console.log(ageSum);

// let avgSalary =
//   users.reduce((total, user) => (total += user.salary), 0) / users.length;

// console.log(Math.round(avgSalary));

// ******************************************************* Combine
// let newFinanceCost = users
//   .filter(user => user.category === 'Finance')
//   .map(user => user.salary + 500)
//   .reduce((total, salary) => (total += salary), 0);

// console.log(newFinanceCost);

// ******************************************************* Scope (var & let)
// // var => function-scoped
// var yourNameIs = 'achref';
// // let, const => block-scoped
// let myNameIs = 'haythem';

// ******************************************************* Destructuring (& Spread operator)
// ******************************************************* Ternary Operator
