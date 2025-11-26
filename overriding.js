class Dl {
  isEligible(name, age) {
    if (age == undefined || age < 18) {
      console.log("not eligible");
    } else {
      console.log("eligible;");
    }
  }
}
let value = new Dl();
// value.isEligible("divid");
value.isEligible("divid", 19);
