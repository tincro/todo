class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

export default Project;