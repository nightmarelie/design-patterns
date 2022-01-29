class President {
  private static instance;

  private constructor() {}

  public static getInstance(): President {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}

const president1 = President.getInstance();
const president2 = President.getInstance();

console.log(president1 === president2);
