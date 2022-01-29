class Burger {
  protected size;
  protected cheese = false;
  protected pepperoni = false;
  protected lettuce = false;
  protected tomato = false;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class BurgerBuilder {
  constructor(
    public size,
    public cheese = false,
    public pepperoni = false,
    public lettuce = false,
    public tomato = false
  ) {}

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addlLttuce() {
    this.lettuce = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

const burger = new BurgerBuilder(20)
  .addCheese()
  .addPepperoni()
  .addTomato()
  .addlLttuce()
  .build();

console.log(`Burger ${burger}`);
