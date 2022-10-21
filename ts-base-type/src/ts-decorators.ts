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
  return function (constructor: any) {
    console.log("New Element Decorator *1");
    const newMain = <HTMLElement>document.getElementById(element);
    const paragraph = <HTMLParagraphElement>document.createElement("p");
    const newParagraph = <HTMLParagraphElement>document.createElement("p");
    const paragraphContent = new constructor();
    if (newMain && paragraph && newParagraph) {
      newMain.innerHTML = target;
      newMain.appendChild(paragraph);
      newMain.appendChild(newParagraph);
      paragraph.innerText = paragraphContent.name;
      newParagraph.innerText = paragraphContent.age;
    }
  };
}

// Multiple decorators
@Gadget("New Gadget Decorator *2")
@NewElement("<h1>Hutama Trirahmanto</h1>", "container")
class Profile {
  constructor(
    protected name: string = "Hello World",
    protected age: number = 30
  ) {
    this.name = name;
    this.age = age;
  }

  viewProfile() {
    return `${this.name} = ${this.age} years old`;
  }
}

const newProfile = new Profile("Hutama", 27);

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
  getTaxPrice(@Item4 tax: number) {
    return this._price * (1 + tax);
  }
}

const laptop = new Product("macbook", 20000000);

laptop.price = 30000000;

console.log(laptop);
