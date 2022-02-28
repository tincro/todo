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
    
    removeTask(task) {
        // remove task from array
    }
}

export default Project;