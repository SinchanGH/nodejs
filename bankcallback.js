/* function addMoney(value, callback) {
  setTimeout(() => {
    console.log("I have added money", value);
    callback(value);
  }, 2000);
}
function displayBalance(value) {
  console.log("My current balance", value);
}
addMoney(1000, displayBalance);
 */

function fetchData(callback) {
  setTimeout(() => {
    console.log("I am fetching the data");
    callback();
  }, 4000);
}
function arrangeData(callback) {
  setTimeout(() => {
    console.log("I am arranging the data");
    callback();
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("I am displaying the data");
  }, 2000);
}
// fetchData();
// arrangeData();
// displayData();

fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});
