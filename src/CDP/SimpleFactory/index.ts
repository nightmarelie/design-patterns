interface Door {
  getWidth(): number;
  getHight(): number;
}

class WoodenDoor implements Door {
  constructor(protected width: number, protected height: number) {}

  getWidth() {
    return this.width;
  }

  getHight() {
    return this.height;
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

// Make a door of 100*200
const door1 = DoorFactory.makeDoor(100, 200);

// Make a door of 200*20
const door2 = DoorFactory.makeDoor(200, 20);

console.log("door of 100*200: ", door1);
console.log("door of 200*20: ", door2);
