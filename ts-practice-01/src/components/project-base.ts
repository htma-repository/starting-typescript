// * ProjectBase class
/* This is a class that is used to create the ProjectInput, ProjectList, and ProjectItem classes. */
export abstract class ProjectBase<
  T extends HTMLElement,
  U extends HTMLElement
> {
  projectTemplate: HTMLTemplateElement;
  rootElement: T;
  element: U;

  constructor(
    templateId: string,
    rootId: string,
    insertPosition: InsertPosition,
    elementId?: string
  ) {
    this.projectTemplate = <HTMLTemplateElement>(
      document.getElementById(templateId)!
    );
    this.rootElement = <T>document.getElementById(rootId)!;

    const importedNode = document.importNode(
      this.projectTemplate.content,
      true
    );
    this.element = <U>importedNode.firstElementChild;
    if (elementId) this.element.id = elementId;

    this.attachElement(insertPosition);
  }

  private attachElement(insertPosition: InsertPosition) {
    this.rootElement.insertAdjacentElement(insertPosition, this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
