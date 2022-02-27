class Manager {
    constructor() {
        this.projectList = [];
        this.currentProject = null;
    }

    addProject(newProject) {
        this.projectList.push(newProject);
    }

    setCurrentProject(project){
        this.currentProject = project;
    }
}