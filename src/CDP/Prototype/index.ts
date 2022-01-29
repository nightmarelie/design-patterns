abstract class Cloneable {
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

class Sheep extends Cloneable {
  constructor(
    protected name: string,
    protected category: string = "Mountain sheep"
  ) {
    super();
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCategort(category: string) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  toString() {
    return JSON.stringify(this);
  }
}

const original = new Sheep("Molly");

const clone = original.clone();
clone.setName("Dolly");

console.log(`Original ${original}`);
console.log(`Clone ${clone}`);
