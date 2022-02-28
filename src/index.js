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
display.formDisplay();
display.updateDisplay(manager.projectList);

mainDisplay.setCurrentProjectTitle(manager.getCurrentProject());
content.appendChild(mainDisplay.show());
mainDisplay.populateTasks(today.taskList);
mainDisplay.formDisplay();


 // interface to add new projects
const projectBtn = document.getElementById('project-btn');
projectBtn.addEventListener(
    'click',
    function() {
        display.reset();
        const projectInput = document.getElementById('project-input');
        const value = projectInput.value;
        const newProject = new Project(value);
        manager.addProject(newProject);
        display.updateDisplay(manager.projectList);
        projectInput.value = '';
    }
);

// create interface that creates new tasks
const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener(
    'click',
    function() {
        mainDisplay.reset();
        const titleInput = document.getElementById('task-title-input');
        const titleValue = titleInput.value;
        const descriptionInput = document.getElementById('description-input');
        const descriptionValue = descriptionInput.value;
        const priorityInput = document.getElementById('priority-input');
        const priorityValue = priorityInput.value;

        const newTask = new Task(titleValue, descriptionValue, priorityValue);
        const project = manager.currentProject;
        project.addTask(newTask);
        mainDisplay.populateTasks(project.taskList);

        titleInput.value = '';
        descriptionInput.value = '';
        priorityInput.value = '';
    }
);