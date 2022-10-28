import { ProjectList } from "./components/project-list.js";
import { ProjectInput } from "./components/project-input.js";

/* It's creating a new instance of the ProjectInput class and assigning it to the projectInput
variable. It's creating a new instance of the ProjectList class and assigning it to the
activeProjectList
variable. It's creating a new instance of the ProjectList class and assigning it to the
finishedProjectList
variable. */
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
