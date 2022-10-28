import { ProjectBase } from "./project-base.js";
import { Project } from "./project.js";
import { Draggable } from "../interface/drag-drop.js";
import { AutoBindDecorator } from "../decorator/autobind.js";

// * ProjectItem class
/* We're extending the ProjectBase class and adding a constructor that takes in a project object. We're
then calling the super constructor and passing in the id of the project. We're also configuring the
element and rendering the content. We're extending the ProjectBase class and adding a persons getter to it */
export class ProjectItem
  extends ProjectBase<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  get persons() {
    if (this.project.people === 1) {
      return "1 person assigned";
    } else {
      return `${this.project.people} persons assigned`;
    }
  }

  constructor(rootId: string, private project: Project) {
    super("single-project", rootId, "beforeend", `list-${project.id}`);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @AutoBindDecorator
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer?.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  dragEndHandler(event: DragEvent): void {
    console.log("event end", event);
  }

  configure(): void {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("p")!.textContent = this.project.description;
    this.element.querySelector("span")!.textContent = this.persons;
  }
}
