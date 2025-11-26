let a = [1, 0, 0, 0, 0, 0, 1];
let n = 2;
let count = 0;

for (let i = 0; i <= a.length; i++) {
  if (a[i] == 0) {
    let pre = i == 0 ? 0 : a[i - 1];
    let nxt = i == a.length - 1 ? 0 : a[i + 1];
    if (pre == 0 && nxt == 0) {
      a[i] = 1;
      count++;
    }
  }
}
console.log(n == count);
