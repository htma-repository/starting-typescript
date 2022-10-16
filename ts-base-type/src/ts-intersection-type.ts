// Intersection type

// Can be interface or type
type Animal = {
  name: string;
  legs: number;
};

type Dog = {
  name: string;
  sound: string;
  color: string;
  detail: () => void;
};

// interface Doggy extends Animal, Dog {}

type Doggy = Animal & Dog;

const doggy: Doggy = {
  name: "doggy",
  legs: 4,
  sound: "Guk, Guk!",
  color: "brown",
  detail() {
    return `Dog name: ${this.name}, legs: ${this.legs}, sound: ${this.sound}, color: ${this.color}`;
  },
};

console.log(doggy.detail());
