const Gadget = <T>(logGadget: T) => {
  // Object.seal(constructor);
  // Object.seal(constructor.prototype);
  // console.log(constructor.prototype);
  console.log("New Gadget Factory *1");
  return (constructor: Function) => {
    console.log(logGadget);
    console.log(constructor);
  };
};

// Decorator
@Gadget("gadget log")
class Electronic<T> {
  constructor(protected name: T) {
    this.name = name;
    console.log("Electronic gadget");
  }

  getElectronic() {
    return this.name;
  }
}

const smartphone = new Electronic<string>("Pixel 7");

console.log(smartphone.getElectronic());

// Function decorator with DOM
function NewElement(target: string, element: string) {
  console.log("New Element Factory *2");
  return function <
    T extends { new (...args: any[]): { name: string; age: number } }
  >(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("New Element Decorator *1");
        const newMain = <HTMLElement>document.getElementById(element);
        const paragraph = <HTMLParagraphElement>document.createElement("p");
        const newParagraph = <HTMLParagraphElement>document.createElement("p");
        if (newMain && paragraph && newParagraph) {
          newMain.innerHTML = target;
          newMain.appendChild(paragraph);
          newMain.appendChild(newParagraph);
          console.log("this", this);
          console.log("arguments", args);
          paragraph.innerText = this.name;
          newParagraph.innerText = this.age.toString();
        }
      }
    };
  };
}

// Multiple decorators
@Gadget("New Gadget Decorator *2")
@NewElement("<h1>Hutama Trirahmanto</h1>", "container")
class Profile {
  name: string;
  age: number;

  set newProfile(profile: { name: string; age: number }) {
    if (profile) {
      this.name = profile.name;
      this.age = profile.age;
    }
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  viewProfile() {
    return `${this.name} = ${this.age} years old`;
  }
}

const newProfile = new Profile("Hutama", 27);
const newProfile2 = new Profile("Trirahmanto", 28);
newProfile.newProfile = { name: "John", age: 27 };
console.log(newProfile.viewProfile());

// Property, Accessor, Method & Parameter Decorator

const Item = <T, U>(target: T, propertyName: U) => {
  console.log("Property decorator");
  console.log(target);
  console.log(propertyName);
};

const Item2 = <T, U>(target: T, name: U, descriptor: PropertyDescriptor) => {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Item3 = <T, U>(target: T, name: U, descriptor: PropertyDescriptor) => {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Item4 = <T, U, V>(target: T, name: U, position: V) => {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  // Property decorator
  @Item
  title: string;
  private _price: number;

  // Accessor decorator
  @Item2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("input price correctly!");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  // Method decorator
  @Item3
  // Parameter decorator
  getTaxPrice(@Item4 tax: number = 0) {
    return this._price * (1 + tax);
  }
}

const laptop = new Product("macbook", 20000000);

laptop.price = 30000000;

console.log(laptop);

// AutoBind decorator
const LogButton = <T, U>(_: T, _2: U, descriptor: PropertyDescriptor) => {
  console.log("Method decorator Mouse");
  console.log(descriptor);
  const { value } = descriptor;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return value.bind(this);
    },
  };
  console.log("adj", adjDescriptor);
  return adjDescriptor;
};

class Mouse {
  name = "my Mouse";

  @LogButton
  showMouse() {
    console.log(this.name);
  }
}

const { showMouse } = new Mouse();

const button = <HTMLButtonElement>document.querySelector("#click-button")!;
button.addEventListener("click", showMouse);

// Validation with decorator

const Required = () => {};

const PositiveNumber = () => {};

class Food {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showFood() {
    return `${this.name} = Rp ${this.price}`;
  }
}

const meatball = new Food("meatball", 20000);

const foodForm = <HTMLFormElement>document.querySelector("form")!;
const titleInput = <HTMLInputElement>document.getElementById("title")!;
const priceInput = <HTMLInputElement>document.getElementById("price")!;

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const price = +priceInput.value;

  const newFood = new Food(title, price);

  console.log(newFood.showFood());

  titleInput.value = "";
  priceInput.value = "";
});
