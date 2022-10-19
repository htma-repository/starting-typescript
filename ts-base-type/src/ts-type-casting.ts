const heading = document.getElementById("heading")! as HTMLElement;
const paragraph = <HTMLElement>document.getElementById("paragraph")!;
const inputForm = document.getElementById("input-form");

heading.innerText = "Hallo Hutama";

paragraph.innerText = "Learning TypeScript from udemy";

if (inputForm) {
  (<HTMLInputElement>inputForm).value = "Hutama";
}
