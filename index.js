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

for (let i = 0; i < 100; )
  console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

console.log(getUserData(users[0]));
