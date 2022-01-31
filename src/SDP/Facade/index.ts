class Computer {
  public getElectricShock() {
    console.log("Ouch!");
  }

  public makeSound() {
    console.log("Beep beep!");
  }

  public showLoadingScreen() {
    console.log("Loading...");
  }

  public bam() {
    console.log("Ready to used!");
  }

  public closeEverything() {
    console.log("Bup bup bup buzzzzz!");
  }

  public sooth() {
    console.log("Zzzzzz");
  }

  public pullCurrent() {
    console.log("Haaa!");
  }
}

class ComputerFacade {
  public constructor(protected computer: Computer) {}

  public turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  public turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();
