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
