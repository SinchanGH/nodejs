function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log("I have counter", counter);
    console.log("------------------");
  }
  return inner;
}
let val = outer();
val();
val();
val();
