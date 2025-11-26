class Bank {
  bankBalance() {
    console.log("i have balance");
  }
}
class AxisBank extends Bank {
  bankBalance() {
    console.log("i have  axis bank balance");
  }
}

class bankk {
  constructor(name) {
    this.name = name;
  }
}
class AaxisBank extends bankk {
  constructor(name, city) {
    super(name);
    this.city = city;
  }
}

let value = new AaxisBank("Bank", "bangolre");
console.log(value);
