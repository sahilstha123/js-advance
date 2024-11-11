//the real world example of encapsulation
class BankAccount {
  #Balance;
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.#Balance = initialBalance;
  }
  getBalance() {
    return this.#Balance;
  }
  amountDeposit(amount) {
    if (amount > 0) {
      this.#Balance += amount;
      console.log(`Your balance is now ${this.#Balance} `);
    } else {
      console.log(`Inavlid! amount`);
    }
  }
  amountWithdraw(amount) {
    if (amount <= this.#Balance && amount > 0) {
      this.#Balance -= amount;
      console.log(`Your balance is now ${this.#Balance}`);
    } else {
      console.log(`Insufficient balance`);
    }
  }
}
const sahil = new BankAccount("sahil", 500);
console.log(sahil.getBalance());
sahil.amountDeposit(200);
sahil.amountWithdraw(1000);
// console.log(sahil.#balance)
