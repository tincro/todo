// a class to manage the state of the app
// possibly refactoring to a module

class Manager {
    constructor() {
        this.projectList = [];
        this.currentProject = null;
    }

    addProject(newProject) {
        this.projectList.push(newProject);
    }

    setCurrentProject(project) {
        this.currentProject = project;
    }

    getCurrentProject() {
        return this.currentProject;
    }
}

export default Manager;