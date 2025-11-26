function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log("I have counter", counter);
    console.log("------------------");
  }
  inner();
}
outer();
outer();
