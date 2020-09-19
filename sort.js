// Sorting in Js is Weird

// SORT

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

items.sort();
console.log(items); // For a string will automatically sort it

// For numbers to sort them we need to make a compare function

// ratings.sort(function (a, b) {
//   return a - b;
// });

// console.log(ratings); // ordre croissant. ordre décroissant b - a

// same but as an arrow function

ratings.sort((a, b) => a - b);
console.log(ratings);

// If use sort we will be modifying the original array so we'll need to copy it

const games = [
  { title: "Fifa", rating: 100 },
  { title: "NBA 2K20", rating: 70 },
  { title: "Call Of", rating: 75 },
  { title: "Skate 3", rating: 112 },
  { title: "Assassin's creed", rating: 85 },
];

games.sort((a, b) => b.rating - a.rating);

console.log(games); // From the best to the smallest value
