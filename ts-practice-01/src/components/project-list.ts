import { ProjectBase } from "./project-base.js";
import { ProjectItem } from "./project-item.js";
import { projectState } from "./project-state.js";
import { Project, ProjectIsActive } from "./project.js";
import { DragTarget } from "../interface/drag-drop.js";
import { AutoBindDecorator } from "../decorator/autobind.js";

// * ProjectList class
/* The ProjectList class is a subclass of the ProjectBase class. It has a constructor that takes a type
parameter of type "active" | "finished" and assigns it to the type property. It also has a method
called configure that takes no parameters and returns nothing. It has a method called renderContent
that takes no parameters and returns nothing. It has a method called renderProjectList that takes no
parameters and returns nothing */
export class ProjectList
  extends ProjectBase<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", "beforeend", `${type}-projects`);
    this.assignProjects = [];
    this.configure();
    this.renderContent();
  }

  @AutoBindDecorator
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listElement = this.element.querySelector("ul")!;
      listElement.classList.add("droppable");
    }
  }
  @AutoBindDecorator
  dragLeaveHandler(event: DragEvent): void {
    const listElement = this.element.querySelector("ul")!;
    listElement.classList.remove("droppable");
  }
  @AutoBindDecorator
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      projectId,
      this.type === "active" ? ProjectIsActive.Active : ProjectIsActive.Finished
    );
  }

  configure(): void {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListeners((projects: Project[]) => {
      const projectRelevant = projects.filter((project) => {
        if (this.type === "active") {
          return project.isActive === ProjectIsActive.Active;
        }
        return project.isActive === ProjectIsActive.Finished;
      });
      this.assignProjects = projectRelevant;
      this.renderProjectList();
    });
  }

  renderContent(): void {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()}  PROJECTS`;
  }

  private renderProjectList() {
    const listElement = <HTMLUListElement>(
      document.getElementById(`${this.type}-projects-list`)!
    );
    // const listItem = <HTMLLIElement>document.createElement("li");
    // const titleItem = <HTMLHeadingElement>document.createElement("h2");
    // const descItem = <HTMLParagraphElement>document.createElement("p");
    // const peopleNum = <HTMLSpanElement>document.createElement("span");
    listElement.innerHTML = "";
    for (const projectItem of this.assignProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, projectItem);
      // titleItem.textContent = projectItem.title;
      // descItem.textContent = projectItem.description;
      // peopleNum.textContent = `People : ${projectItem.people.toString()}`;
      // listItem.appendChild(titleItem);
      // listItem.appendChild(descItem);
      // listItem.appendChild(peopleNum);
      // listElement.appendChild(listItem);
    }
  }
}
