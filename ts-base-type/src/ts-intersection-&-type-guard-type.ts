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

type Cat = string | number;
type Tiger = number | string;

type MixAnimal = Cat & Tiger;

const catty: MixAnimal = 12;
const tigers: MixAnimal = "tiger";

const myAnimal = (name: MixAnimal, sound: MixAnimal) => {
  // Type Guard with typeof
  return typeof name === "string" || typeof sound === "string"
    ? `my animal name is ${name}, the sound ${sound}`
    : name + sound;
};

console.log(myAnimal(doggy.name, doggy.sound));
console.log(myAnimal(10, 10));

type MyAnimal = Animal | Dog;

const myNewAnimal = (animal: MyAnimal) => {
  // Type Guard with in
  if ("color" in animal) console.log(animal.color);
  if ("legs" in animal) console.log(animal.legs);
};

myNewAnimal(doggy);
