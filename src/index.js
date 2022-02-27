import MainDisplay from "./mainDisplay";
import Manager from "./manager";
import Project from "./project";
import ProjectDisplay from "./projectDisplay";
import Task from "./task";

// create a new manager
const manager = new Manager();
// create a new project
const today = new Project("Today");
// add project to manager list
manager.addProject(today);
manager.setCurrentProject(today);

const coffee = new Task("Coffee", "Get some coffee for the day", 3);
today.addTask(coffee);

const content = document.getElementById('content');

// build the main display
const mainDisplay = new MainDisplay();
mainDisplay.setCurrentProjectTitle(manager.getCurrentProject());
content.appendChild(mainDisplay.show());
mainDisplay.populateTasks(today.taskList);

/*
// build the project display
const display = new ProjectDisplay();

content.appendChild(display.diplayProjects());
display.addProjectToDisplay(today);
*/


// create interface that creates new tasks
// create interface that creates new projects
// populate page to display projects

