class bank {
    #balance;
    constructor(balance) {
        this.#balance=balance;
    }
    bankBalance() {
        console.log(`i have a balance $ {this.#balance}`);
    }
} 
let value = new bank(1000);
value.