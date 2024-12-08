const users = [
  {
    id: 234,
    name: "Josh",
  },
  {
    id: 827,
    name: "Yana",
  },
];

const getUserData = (user) => user;

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
