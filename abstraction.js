class bankAccount {
  #initialBalance;
  constructor(AccHolder, initialBalance = 0) {
    this.AccHolder = AccHolder;
    this.#initialBalance = initialBalance;
  }
  get_balance() {
    return this.#initialBalance;
  }
  deposit_amount(amount) {
    if (this.#validAmount(amount)) {
      this.#initialBalance += amount;
      this.#printBlanace("Deposited", amount);
    }
  }
  withdraw_amount(amount)
  {
    if (this.#sufficient_balance)
    {
      this.#initialBalance -= amount
      this.#printBlanace("Withdrew",amount);
    }
  }
#sufficient_balance(amount)
{
  return amount<=this.#initialBalance && this.#validAmount
}
  #validAmount(amount) {
    return amount > 0;
  }
  #printBlanace(action, amount) {
    console.log(
      `${action} ${amount}. Your balance is now ${this.#initialBalance}`
    );
  }
}
const sahilObj = new bankAccount("sahil", 5000);
console.log(`your balance is ${sahilObj.get_balance()}`)
sahilObj.deposit_amount(100);
sahilObj.withdraw_amount(200)
