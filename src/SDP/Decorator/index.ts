interface Coffee {
  getCoast(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  public getCoast(): number {
    return 10;
  }

  public getDescription(): string {
    return "Simple coffee";
  }
}

class MilkCoffee implements Coffee {
  public constructor(protected coffee: Coffee) {}

  public getCoast() {
    return this.coffee.getCoast() + 2;
  }

  public getDescription(): string {
    return `${this.coffee.getDescription()}, milk`;
  }
}

class WhipCoffee implements Coffee {
  public constructor(protected coffee: Coffee) {}

  public getCoast() {
    return this.coffee.getCoast() + 5;
  }

  public getDescription(): string {
    return `${this.coffee.getDescription()}, whip`;
  }
}

class VanillaCoffee implements Coffee {
  public constructor(protected coffee: Coffee) {}

  public getCoast() {
    return this.coffee.getCoast() + 3;
  }

  public getDescription(): string {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}

let comeCoffee = new SimpleCoffee();

console.log(comeCoffee.getCoast());
console.log(comeCoffee.getDescription());

comeCoffee = new MilkCoffee(comeCoffee);
comeCoffee = new WhipCoffee(comeCoffee);
comeCoffee = new VanillaCoffee(comeCoffee);

console.log(comeCoffee.getCoast());
console.log(comeCoffee.getDescription());
