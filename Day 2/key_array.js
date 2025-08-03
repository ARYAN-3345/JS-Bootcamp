const users = [
  { name: 'Aryan', age: 21 },
  { name: 'Shrey', age: 21 },
  { name: 'Rupashri', age: 20 },
  { name: 'Rutuja', age: 19 }
];

//what is the average age of everyone?
console.log(users.reduce((sum, users) => sum + users.age, 0) / users.length);

// other way:
// a=users.map(x=>x.age) stores only ages of each in an array
// a.reduce((a,x)=>a+x)/a.length