class MainDisplay {
    /*
        <div>
            <h1>Project Name</h1>
            <ul id="tasklist">
                <li>Task</li>
            <ul>
        </div>
    */
    constructor(){
        this.title = "CurrentProject";
    }

    show() {
        const element = document.createElement('div');
        const title = document.createElement('h1');
        title.innerText = this.title;
        element.appendChild(title);

        const tasks = document.createElement('ul');
        tasks.id = "taskList";
        element.appendChild(tasks);
    
        return element;
    }

    populateTasks(list) {
        const taskList = document.getElementById('taskList');
        list.forEach(task => {
            let item = document.createElement('li');
            item.innerText = task.title;
            taskList.appendChild(item);
        });

        return taskList;
    }

    setCurrentProjectTitle(newProject) {
        this.title = newProject.title;
    }
}

export default MainDisplay;
