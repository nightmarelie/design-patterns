interface Door1 {
  getDescription(): void;
}

class WoodenDoor1 implements Door1 {
  public getDescription(): void {
    console.log("I`m a wooden door");
  }
}

class IronDoor implements Door1 {
  public getDescription(): void {
    console.log("I`m a iron door");
  }
}

interface DoorFittingExpert {
  getDescription();
}

class Welder implements DoorFittingExpert {
  public getDescription() {
    console.log("I can only fit iron doors");
  }
}

class Carpenter implements DoorFittingExpert {
  public getDescription() {
    console.log("I can only fit wooden doors");
  }
}

interface DoorFactory {
  makeDoor(): Door1;
  makeFittingExpert(): DoorFittingExpert;
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory implements DoorFactory {
  public makeDoor(): Door1 {
    return new WoodenDoor1();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory implements DoorFactory {
  public makeDoor(): Door1 {
    return new IronDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

{
  const woodenFactory = new WoodenDoorFactory();
  const door = woodenFactory.makeDoor();
  const expert = woodenFactory.makeFittingExpert();

  door.getDescription();
  expert.getDescription();

  const ironFactory = new IronDoorFactory();

  const door1 = ironFactory.makeDoor();
  const expert1 = ironFactory.makeFittingExpert();

  door1.getDescription();
  expert1.getDescription();
}
