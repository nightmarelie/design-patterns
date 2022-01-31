interface Lion {
  roar();
}

class AfricanLion implements Lion {
  public roar() {
    console.log("Roar");
  }
}

class AsianLion implements Lion {
  public roar() {
    console.log("Roar");
  }
}

class WildDog {
  public bark() {
    console.log("Bark");
  }
}

class Hunter {
  public hunt(lion: Lion) {
    lion.roar();
  }
}

class WildDogAdapter implements Lion {
  constructor(protected dog: WildDog) {}

  public roar() {
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);

console.log();
