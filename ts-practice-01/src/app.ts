// AutoBind 'this' decorator
const AutoBindDecorator = <T, U>(
  _: T,
  _2: U,
  descriptor: PropertyDescriptor
) => {
  const { value } = descriptor;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return value.bind(this);
    },
  };
  return adjDescriptor;
};

// Class based projectInput
class ProjectInput {
  projectInputTemplate: HTMLTemplateElement;
  projectListTemplate: HTMLTemplateElement;
  rootElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputForm: HTMLInputElement;
  descInputForm: HTMLInputElement;
  peopleInputForm: HTMLInputElement;
  uListElement: HTMLUListElement;
  listElement: HTMLLIElement;

  constructor() {
    this.projectInputTemplate = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.rootElement = <HTMLDivElement>document.getElementById("app")!;

    const importedNode = document.importNode(
      this.projectInputTemplate.content,
      true
    );
    this.formElement = <HTMLFormElement>importedNode.firstElementChild;

    this.titleInputForm = <HTMLInputElement>(
      this.formElement.querySelector("#title")
    );
    this.descInputForm = <HTMLInputElement>(
      this.formElement.querySelector("#description")
    );
    this.peopleInputForm = <HTMLInputElement>(
      this.formElement.querySelector("#people")
    );

    this.projectListTemplate = <HTMLTemplateElement>(
      document.getElementById("project-list")!
    );
    this.uListElement = <HTMLUListElement>document.getElementById("lists")!;
    this.listElement = <HTMLLIElement>document.createElement("li");

    this.formSubmit();
    this.attachElement();
  }

  private inputValue(): [string, string, number] | undefined {
    const titleValue = this.titleInputForm.value;
    const descValue = this.descInputForm.value;
    const peopleValue = this.peopleInputForm.value;

    if (
      titleValue.trim().length === 0 ||
      descValue.trim().length === 0 ||
      peopleValue.trim().length === 0
    ) {
      alert("Please Input Value Correctly");
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
      console.log(title, desc, people);
    }

    this.titleInputForm.value = "";
    this.descInputForm.value = "";
    this.peopleInputForm.value = "";
  }

  private formSubmit() {
    this.formElement.addEventListener("submit", this.eventListener);
  }

  private attachElement() {
    this.rootElement.insertAdjacentElement("afterbegin", this.formElement);
    // this.rootElement.insertAdjacentElement("afterbegin", this.uListElement);
  }

  // private attachList(listData: string) {
  //   this.listElement.innerText = listData;
  //   this.uListElement.appendChild(this.listElement);
  // }
}

new ProjectInput();
