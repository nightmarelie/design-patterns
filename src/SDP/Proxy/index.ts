interface Door2 {
  open();
  close();
}

class LabDoor implements Door2 {
  public open() {
    console.log("Opening the lab door");
  }

  public close() {
    console.log("Closing the lab door");
  }
}

class SecuredDoor {
  public constructor(protected door: Door2) {}

  public open(password: string) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big nooooooo!");
    }
  }

  public authenticate(password: string) {
    return password === "dsd12k1";
  }

  public close() {
    this.door.close();
  }
}

const door = new SecuredDoor(new LabDoor());

door.open("11212");
door.open("dsd12k1");
door.close();
