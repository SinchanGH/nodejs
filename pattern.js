// for (i = 0; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// for (j = 6; j >= 0; j--) {
//   console.log("*".repeat(j));
// }

for (let i = 1; i <= 7; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}
