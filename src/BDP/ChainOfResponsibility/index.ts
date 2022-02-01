abstract class Account {
  protected successor?: Account;
  protected balance: number = 0;

  public setNext(account: Account) {
    this.successor = account;
  }

  public pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this}`);
    } else if (this.successor) {
      console.log(`Cannot pay usingg ${this}. Processing...`);
      this.successor.pay(amountToPay);
    } else {
      throw Error("None of the accounts have enough balance");
    }
  }

  public canPay(amount: number): boolean {
    return this.balance >= amount;
  }

  abstract toString();
}

class Bank extends Account {
  constructor(protected balance: number) {
    super();
  }

  public toString() {
    return "Bank";
  }
}

class PayPal extends Account {
  constructor(protected balance: number) {
    super();
  }

  public toString() {
    return "PayPal";
  }
}

class Bitcoin extends Account {
  constructor(protected balance: number) {
    super();
  }

  public toString() {
    return "Bitcoin";
  }
}

//create a chain
const bank = new Bank(100);
const paupal = new PayPal(200);
const bitcoint = new Bitcoin(300);

bank.setNext(paupal);
paupal.setNext(bitcoint);

bank.pay(260);

export {};
