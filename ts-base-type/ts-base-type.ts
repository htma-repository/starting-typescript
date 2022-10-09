// Typescript Number
const sumValue = (a: number, b: number) => a + b;

// Typescript String
const firstName: string = "Hutama";

// Typescript Boolean
const isOpen: boolean = true;

// Typescript Array
const nameArr: string[] = ["Tama", "Eko", "Budi"];
const ageArr: number[] = [27, 25, 30];
const isMarriedArr: boolean[] = [false, true, false];
const learnArr: string[] = ["React", "Typescript"];
const studentArr: {
  name: string;
  age: number;
}[] = [
  {
    name: "Hutama",
    age: 27,
  },
  {
    name: "Eko",
    age: 25,
  },
  {
    name: "Budi",
    age: 30,
  },
];

const namesArr: Array<string> = ["Hutama", "Trirahmanto"];

// Typescript Object
const student: {
  nim: number;
  name: string;
} = {
  nim: 201383132,
  name: "hutama",
};

const studentObj: {
  name: string;
  nim: number;
  learn: string[];
} = {
  name: "Hutama",
  nim: 201383132,
  learn: ["React", "Typescript"],
};

// Typescript Enum
const roles: [number, string] = [10, "Admin"];

// Typescript inference
let greetings = "Hello, my name Hutama";

/* ! greetings = 123; */

// Typescript Union
let value: string | number = "React Typescript";

value = 77;

// Typescript Alias
type Student = {
  nim: number;
  name: string;
  learn: string[];
};

const students: Student[] = [
  {
    nim: 201383132,
    name: "Hutama",
    learn: ["React", "Typescript"],
  },
  {
    nim: 201383132,
    name: "Rahmanto",
    learn: ["React", "Typescript", "Javascript"],
  },
];

// Typescript Function Type Inference
const sumNewValue = (a: number, b: number): number => a + b;

const newValue = (value: number) => {
  console.log(value);
};
