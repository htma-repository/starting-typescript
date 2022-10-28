import { ProjectBase } from "./project-base.js";
import { projectState } from "./project-state.js";
import { Validate, validation } from "../utils/validation.js";
import { AutoBindDecorator } from "../decorator/autobind.js";

// * ProjectInput Class
/* We're extending the ProjectBase class, and we're adding a few more properties to the class, and
we're adding a few more methods to the class */
export class ProjectInput extends ProjectBase<HTMLDivElement, HTMLFormElement> {
  titleInputForm: HTMLInputElement;
  descInputForm: HTMLInputElement;
  peopleInputForm: HTMLInputElement;

  constructor() {
    super("project-input", "app", "afterbegin", "user-input");

    this.titleInputForm = <HTMLInputElement>(
      this.element.querySelector("#title")
    );
    this.descInputForm = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleInputForm = <HTMLInputElement>(
      this.element.querySelector("#people")
    );
    this.formSubmit();
  }

  configure(): void {}
  renderContent(): void {}

  private inputValue(): [string, string, number] | undefined {
    const titleValue = this.titleInputForm.value;
    const descValue = this.descInputForm.value;
    const peopleValue = this.peopleInputForm.value;

    const titleValidate: Validate = {
      value: titleValue,
      required: true,
    };
    const descValidate: Validate = {
      value: descValue,
      required: true,
      minLength: 5,
    };

    const peopleValidate: Validate = {
      value: +peopleValue,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validation(titleValidate) ||
      !validation(descValidate) ||
      !validation(peopleValidate)
    ) {
      alert("Please Input Value Correctly");
      return;
    } else {
      return [titleValue, descValue, +peopleValue];
    }
  }

  @AutoBindDecorator
  private eventListener(event: Event) {
    event.preventDefault();
    const inputValue = this.inputValue();

    if (Array.isArray(inputValue)) {
      const [title, desc, people] = inputValue;
      projectState.addProject(title, desc, people);
    }

    this.titleInputForm.value = "";
    this.descInputForm.value = "";
    this.peopleInputForm.value = "";
  }

  private formSubmit() {
    this.element.addEventListener("submit", this.eventListener);
  }
}
