abstract class Builder {
  public readonly build = () => {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  };

  abstract test(): void;
  abstract lint(): void;
  abstract assemble(): void;
  abstract deploy(): void;
}

class AndroidBuilder extends Builder {
  public test() {
    console.log("Running android tests!");
  }

  public lint() {
    console.log("Linting the android code!");
  }

  public assemble() {
    console.log("RuAssembling the android build");
  }

  public deploy() {
    console.log("Deploying android build to server");
  }
}

class IOSBuilder extends Builder {
  public test() {
    console.log("Running ios tests!");
  }

  public lint() {
    console.log("Linting the ios code!");
  }

  public assemble() {
    console.log("RuAssembling the ios build");
  }

  public deploy() {
    console.log("Deploying ios build to server");
  }
}

const androidBuilder = new AndroidBuilder();
androidBuilder.build();

const iosBuilder = new IOSBuilder();
iosBuilder.build();

export {};
