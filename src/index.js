import MainDisplay from "./mainDisplay";
import Manager from "./manager";
import Project from "./project";
import ProjectDisplay from "./projectDisplay";
import './style.css';

const manager = new Manager();
const today = new Project("Today");

manager.addProject(today);
manager.setCurrentProject(today);

const coffee = new Task('Coffee', 'Get some coffee for the day', 3);
today.addTask(coffee);

const content = document.getElementById('content');

const mainDisplay = new MainDisplay();

const display = new ProjectDisplay();

content.appendChild(display.diplayProjects());
display.addProjectToDisplay(today);

mainDisplay.setCurrentProjectTitle(manager.getCurrentProject());
content.appendChild(mainDisplay.show());
mainDisplay.populateTasks(today.taskList);


// create interface that creates new tasks
// create interface that creates new projects
// populate page to display projects

