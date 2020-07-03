const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const morePeople = [
  { name: "Dante", year: 1988 },
  { name: "Randall", year: 1987 },
  { name: "Bob", year: 1944 },
  { name: "Jay", year: 2016 },
];

const comments = [
  { text: "There was salt on the glass, BIG grains of salt", id: 293847 },
  { text: "A schooner is a sailboat", id: 189820 },
  { text: "Do ya like dogs?", id: 123900 },
  { text: "I wasn't even supposed to be here today", id: 37 },
  { text: "Luminous beings we are, not this crude matter", id: 823423 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteenHundred = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.table(fifteenHundred);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);

console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedByBirth = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(sortedByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived

const sortedByAge = inventors.sort((a, b) => {
  return a.passed - a.passed > b.passed - b.year ? -1 : 1;
});

console.table(sortedByAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector( '.mw-category' );
// const links = Array.from( category.querySelectorAll( 'a' ) );
// const de = links
//             .map( link => link.textContent)
//             .filter( streetName => streetName.includes( 'de' ) );

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedByName = people.sort((personA, personB) => {
  const [aLast, aFirst] = personA.split(", ");
  const [bLast, bFirst] = personB.split(", ");
  return aLast > bLast ? 1 : -1;
});

console.log(sortedByName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce(function (obj, item) {
  // if item doesn't exist, create it and set count to 0
  if (!obj[item]) {
    obj[item] = 0;
  }
  // if item exists, add 1 to count and return the object
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const isAdult = morePeople.some( function( person ) {
//   const currentYear = ( new Date() ).getFullYear();
//   if( currentYear - person.year >= 19 ) {
//     return true;
//   }
// });

const isAdult = morePeople.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?

// const allAdults = morePeople.every( function( person ) {
//   const currentYear = ( new Date() ).getFullYear();
//   if( currentYear - person.year >= 19 ) {
//     return true;
//   }
// });

const allAdults = morePeople.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ allAdults });

// Array.prototype.find()

const comment = comments.find((comment) => comment.id === 823423);

console.log(comment);

const commentIndex = comments.findIndex((comment) => comment.id === 823423);

console.log(commentIndex);

const newComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1),
];

console.table(comments);
console.table(newComments);
