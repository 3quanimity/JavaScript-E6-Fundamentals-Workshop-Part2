// *********** HIGHER ORDER FUNCTIONS
// *Rappel Functions
// classic way
// function sayMyName(name) {
//   console.log(name);
// }

//arrow function
// let sayMyName = (name, lastName) =>
//   console.log(`my name is ${name} and my last name is ${lastName}`);

// sayMyName('slim', 'amdouni');

//DATA
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

// *forEach (compare to for & for of to clg each user)
//*for
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }

// for (let user of users) {
//   console.log(user.name);
// }

// users.forEach(user => console.log(user.name));

// *filter (compare to for with if on ages_tab to get adults, then use it on users)
// let filteredUsers = users.filter(
//   user => user.category === 'Finance' && user.salary > 1000
// );

// console.log(filteredUsers);

// let tab = [];
// for (let number of ages) {
//   if (number > 21) tab.push(number);
// }
// console.log(tab);

// let x = ages.filter(number => {
//   return number > 21;
// });

// console.log(ages);
// console.log(x);

// *map (create new phrases from users array / create birthyears from ages)

// let phrases = users.map(user => user.salary + 500);
// console.log(phrases);
// phrases.map(phrase => console.log(phrase));

// *sort (ages, then names, then users by salary)
// let sortedAges = ages.sort((a, b) => b - a);
// console.log(sortedAges);

// let names = ['amina', 'marwen', 'yahya', 'khalil', 'mohamed', 'fathi'];

// let sortedNames = names.sort();
// console.log(sortedNames);

// *reduce (sum ages with a for loop first then with reduce)

// let x = ages.reduce((total, age) => (total += age));
// console.log(x);

//!\ combine (calculate new cost of Finance team if given a raise)
// let etapeParEtape = users
//   .filter(user => user.category === 'Finance')
//   .map(user => user.salary + 500)
//   .reduce((total, salary) => (total += salary), 0);

// console.log(etapeParEtape);

// *********** Scope (var & let)
// give examples

// *********** Destructuring (& Spread operator) // just put the arr/obj u want to destructure on the right side of the equal sign
// destructure a simple array + skip one element + use spread to get rest
// destructure to concat 2 arrays
// destructure from a function (sum multiply & divide)
// destructure from obj
// destructure from a nested obj
// destructure to combine 2 obj
// destructure inside the arg of a function

// *********** Ternary Operator
