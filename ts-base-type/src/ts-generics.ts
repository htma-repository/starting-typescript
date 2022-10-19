// * Custom generics type
const valueMerge = <T>(valueOne: T[], valueTwo: T) => {
  return [...valueOne, valueTwo];
};

const valueOfNumber = valueMerge([1, 2, 3], 4);
const valueOfString = valueMerge(["one", "two", "three"], "four");
const valueOfObject = valueMerge(
  [{ firstName: "Hutama", lastName: "Trirahmanto" }],
  { firstName: "John", lastName: "Doe" }
);

console.log(valueOfNumber);
console.log(valueOfString);
console.log(valueOfObject);

// * Custom generics with Constrains
function merge<T extends object, U extends object>(valueOne: T, valueTwo: U) {
  return Object.assign(valueOne, valueTwo);
}

const data = merge({ name: "John" }, { age: 27 });
console.log(data.name);

function studentGrad<T extends string, U extends boolean>(
  name: T,
  isGraduated: U
) {
  if (isGraduated) {
    return `${name} has Graduated`;
  }
  return `${name} has not Graduated`;
}

const john = studentGrad("John", false);
console.log(john);

interface Length {
  length: number;
}
const lengthDesc = <T extends Length>(data: T): [T, string] => {
  if (data.length > 0) return [data, `has ${data.length} elements`];
  return [data, "has no length"];
};

console.log(lengthDesc("HutamaTrirahmanto"));

// * Custom generics with keyof Constrains
const extractObject = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

console.log(extractObject({ name: "HutamaTrirahmanto" }, "name"));

// * Built-in generics type
const animals: Array<string> = ["horse", "cat"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("has resolve");
  }, 3000);
});

promise.then((data) => {
  console.log(data);
});
