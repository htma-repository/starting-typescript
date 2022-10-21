class Country<T> {
  constructor(private name: T[]) {
    this.name = name;
  }

  addCountry<U>(addName: T) {
    return this.name.push(addName);
  }

  removeCountry(name: T) {
    if (this.name.indexOf(name) === -1) return;
    this.name.splice(this.name.indexOf(name), 1);
  }

  viewCountry() {
    return [...this.name];
  }
}

const newCountry = new Country<string>(["Indonesia", "Japan"]);
newCountry.addCountry("Singapore");
newCountry.removeCountry("Japan");
console.log(newCountry.viewCountry());

const newNumber = new Country<number>([10, 20]);
newNumber.addCountry(50);
newNumber.removeCountry(10);
console.log(newNumber.viewCountry());

class People<T, U> {
  constructor(public name: T, public age: U) {
    this.name = name;
    this.age = age;
  }
}

const hutama = new People("Hutama", 27);

const newObject = new Country<object>([hutama, new People("Trirahmanto", 28)]);
newObject.addCountry(new People("John", 30));
newObject.addCountry(new People("Dvina", 26));

newObject.removeCountry(hutama);

console.log(newObject.viewCountry());
