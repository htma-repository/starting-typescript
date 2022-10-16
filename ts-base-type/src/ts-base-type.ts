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
    name: "Audi",
    age: 30,
  },
];

const namesArr: Array<string> = ["Hutama", "Trirahmanto"];
const numArr: Array<number> = [10, 20];

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

// Typescript Tuple
const roles: [number, string] = [10, "Admin"];

// Typescript Enum
enum Days {
  MON = "mon",
  TUE = "tue",
  WED = "wed",
}

type DaysName = `${Days}`;

// Typescript Unknown
let fullName: unknown;
fullName = "Hutama";
fullName = 10;

// Typescript never
const errFunc = (messageErr: string, codeErr: number): never => {
  throw { message: messageErr, code: codeErr };
};

// Typescript inference
let greetings = "Hello, my name Hutama";
let newNum = 123;
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
const sumNewValue = (a: number, b: number) => a + b;
const newValue = (value: number) => {
  console.log(value);
};

// Typescript Function void
const someWord = (
  word1: string,
  word2: string,
  callbackFn: (result: string) => void
) => {
  const result = `${word1} ${word2}`;
  callbackFn(result);
};

someWord("Hutama", "Trirahmanto", (result) => {
  console.log(result);
});
