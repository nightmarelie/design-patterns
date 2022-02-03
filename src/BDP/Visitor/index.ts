interface Animal {
  accept(operation: AnimalOperation);
}

// Visitor
interface AnimalOperation {
  visitMonkey(monkey: Monkey);
  visitLion(lion: Lion);
  visitDolphin(dolphin: Dolphin);
}

class Monkey implements Animal {
  public shout() {
    console.log("Ooh oo aa aa!");
  }

  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}

class Lion implements Animal {
  public roar() {
    console.log("Arrrrrrr!");
  }

  accept(operation: AnimalOperation) {
    operation.visitLion(this);
  }
}

class Dolphin implements Animal {
  public speak() {
    console.log("Tuuuuut!");
  }

  accept(operation: AnimalOperation) {
    operation.visitDolphin(this);
  }
}

class Speak implements AnimalOperation {
  public visitMonkey(monkey: Monkey) {
    monkey.shout();
  }

  public visitLion(lion: Lion) {
    lion.roar();
  }

  public visitDolphin(dolphin: Dolphin) {
    dolphin.speak();
  }
}

class Jump implements AnimalOperation {
  public visitMonkey(monkey: Monkey) {
    console.log("Jumped 20 feet high! on to the tree!");
  }

  public visitLion(lion: Lion) {
    console.log("Jumped 7 feet! Back on the ground!");
  }

  public visitDolphin(dolphin: Dolphin) {
    console.log("Walked on water a little and disappeared");
  }
}

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

const speak = new Speak();
const jump = new Jump();

monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);

monkey.accept(jump);
lion.accept(jump);
dolphin.accept(jump);

export {};
