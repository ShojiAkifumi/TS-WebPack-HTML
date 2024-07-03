class Drink {
  private _price: number;
  constructor(price: number) {
    this._price = price;
  }
  showPrice(): number {
    return this._price;
  }
  static get hello(): string {
    return "hello typescript";
  }
}

class SaleDrink extends Drink {
  override showPrice(): number {
    return Math.floor(super.showPrice() / 2);
  }
}

const drink = new Drink(500);
const saleDrink = new SaleDrink(500);

console.log(drink.showPrice());
console.log(saleDrink.showPrice());

const body = document.querySelector("body");
const h1 = document.createElement("h1");
body?.appendChild(h1);
h1.textContent = Drink.hello;
