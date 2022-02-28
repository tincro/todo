import MainDisplay from "./mainDisplay";
import Manager from "./manager";
import Project from "./project";
import ProjectDisplay from "./projectDisplay";
import Task from "./task";
import './styles.css';



// function newProject(){
//     const projectName = document.getElementById('project-btn');
// }





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
display.updateDisplay(manager.projectList);

mainDisplay.setCurrentProjectTitle(manager.getCurrentProject());
content.appendChild(mainDisplay.show());
mainDisplay.populateTasks(today.taskList);

display.formDisplay();

// grab button
const projectBtn = document.getElementById('project-btn');
// grab form
// call function to add new project from form value

projectBtn.addEventListener(
    'click',
    function() {
        const projectInput = document.getElementById('project-input');
        const value = projectInput.value;
        const newProject = new Project(value);
        manager.addProject(newProject);
        display.updateDisplay(manager.projectList);
    }
);

// create interface that creates new tasks
// create interface that creates new projects
