interface Tea {}
class KarakTea implements Tea {
  toString() {
    return "karak tea";
  }
}

class TeaMaker {
  protected availableTea: string[] = [];

  public make(preference) {
    if (!this.availableTea[preference]) {
      this.availableTea[preference] = new KarakTea().toString();
    }

    return this.availableTea[preference];
  }
}

class TeaShop {
  constructor(protected teaMaker: TeaMaker, protected orders: string[] = []) {}

  public takeOrder(teaType: Tea, table: number) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  public serve() {
    this.orders.forEach((tea, table) => {
      console.log(`Serving tea: ${tea} to  ${table}`);
    });
  }
}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder("less sugar", 1);
shop.takeOrder("without sugar", 2);
shop.takeOrder("coffee", 3);

shop.serve();
