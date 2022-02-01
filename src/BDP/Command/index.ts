// Receiver
class Bulb {
  public turnOn() {
    console.log("Bulb has been lit");
  }

  public turnOff() {
    console.log("Darkness!");
  }
}

abstract class Command {
  public constructor(protected bulb: Bulb) {}

  abstract execute(): void;
  abstract undo(): void;
  abstract redo(): void;
}

class TurnOn extends Command {
  public execute(): void {
    this.bulb.turnOn();
  }

  public undo(): void {
    this.bulb.turnOff();
  }

  public redo(): void {
    this.execute();
  }
}

class TurnOff extends Command {
  public execute(): void {
    this.bulb.turnOff();
  }

  public undo(): void {
    this.bulb.turnOn();
  }

  public redo(): void {
    this.execute();
  }
}

class RemoteControl {
  public submit(command: Command) {
    command.execute();
  }
}

const bulb = new Bulb();
const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remoteControl = new RemoteControl();
remoteControl.submit(turnOn);
remoteControl.submit(turnOff);

export {};
