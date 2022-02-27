class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }
    
    getTaskList(){
        return this.taskList;
    }
}

export default Project;