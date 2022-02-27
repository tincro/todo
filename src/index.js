// create a new manager
const manager = new Manager();
// create a new project
const today = new Project("Today");
// add project to manager list
manager.addProject(today);
manager.currentProject(today);

// create a new task
const task = new Task("Make Coffee", "Make coffee to wake up", "high");
// populate projects with todo
today.addTask(task);





// create interface that creates new tasks
// create interface that creates new projects
// populate page to display projects

