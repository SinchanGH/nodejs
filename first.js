// var name = "Sinchan";
// console.log(name);

// let city = "Bangalore";
// console.log(city);

// const country = "India";
// console.log(country);

// function hello() {
//   console.log("My first function");
// }
// hello();

/* let name = "Amar";
function outer() {
  console.log(name);
  let name2 = "Akbar";
  console.log(name2);
}
console.log(name);
outer(); */

let name = "Amar";
function outer() {
  console.log(name);
  let name2 = "Akbar";
  console.log(name2);
  function inner() {
    let name3 = "Anthony";
    console.log(name3);
  }
  inner();
}
outer();
