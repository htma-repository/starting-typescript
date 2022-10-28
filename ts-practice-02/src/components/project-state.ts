import { Project, ProjectIsActive } from "./project.js";

// * ProjectState class
/* It's a class that holds an array of functions that take a generic type and return nothing */
type Listeners<T> = (items: T[]) => void;
class State<T> {
  protected listeners: Listeners<T>[] = [];

  addListeners(listenerFunc: Listeners<T>) {
    this.listeners.push(listenerFunc);
  }
}

/* We create a class called ProjectState that extends the State class. 
We create a private projects array that will hold our Project objects. 
We create a private static instance variable that will hold our ProjectState instance. 
We create a private constructor that will be called when we create a new ProjectState instance. 
We create a static getInstance() method that will return our ProjectState instance. 
We create an addProject() method that will add a new Project object to our projects array. 
We call the addListener() method from the State class to add a listener function to our listeners
array. 
We call the listenerFunc() method from the State class to call all of the listener functions in our
listeners array. 
We pass in a copy of our projects array to the listenerFunc() method. 
We create a new Project object and pass in the title, description, */
export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Date.now().toString(),
      title,
      description,
      people,
      ProjectIsActive.Active
    );
    console.log(this.projects);
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectIsActive) {
    const project = this.projects.find((project) => project.id === projectId);
    if (project && project.isActive !== newStatus) {
      project.isActive = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFunc of this.listeners) {
      listenerFunc([...this.projects]);
    }
  }
}

/* It's creating a new instance of the ProjectState class and assigning it to the projectState
variable. */
export const projectState = ProjectState.getInstance();
