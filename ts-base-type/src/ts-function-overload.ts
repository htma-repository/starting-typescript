type Horse = string | number;

// Function Overloads
function animal(name: string, weight: string): string;
function animal(name: number, weight: number): number;
function animal(name: string, weight: number): string;
function animal(name: number, weight: string): string;
function animal(name: Horse, weight: Horse) {
  if (typeof name === "string" || typeof weight === "string") {
    return `${name}, ${weight}kg`;
  }
  return name + weight;
}

console.log(animal("Brego", 300));
