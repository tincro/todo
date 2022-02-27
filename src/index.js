import Manager from "./manager";
import Project from "./project";
import ProjectDisplay from "./projectDisplay";

// create a new manager
const manager = new Manager();
// create a new project
const today = new Project("Today");
// add project to manager list
manager.addProject(today);
manager.setCurrentProject(today);

// build the display
const display = new ProjectDisplay();
const content = document.getElementById('content');

content.appendChild(display.diplayProjects());
display.addProjectToDisplay(today);

// create interface that creates new tasks
// create interface that creates new projects
// populate page to display projects

