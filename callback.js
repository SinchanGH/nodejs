function one(callback) {
  setTimeout(() => {
    console.log("Function one executed");
    callback();
  }, 2000);
}
function two() {
  console.log("Fuction two excecuted");
}
one(two);
