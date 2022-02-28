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
        this.title = 'CurrentProject';
    }

    show() {
        const element = document.createElement('div');
        element.classList.add('main-display');
        const title = document.createElement('h1');
        title.innerText = this.title;
        element.appendChild(title);

        const tasks = document.createElement('ul');
        tasks.id = 'taskList';
        element.appendChild(tasks);
    
        return element;
    }

    populateTasks(list) {
        const taskList = document.getElementById('taskList');
        list.forEach(task => {
            let item = document.createElement('li');
            let itemContainer = document.createElement('div');
            let itemTitle = document.createElement('h2');
            itemTitle.innerText = task.title;
            itemContainer.appendChild(itemTitle);

            let itemDescription = document.createElement('p');
            itemDescription.innerText = task.description;
            itemContainer.appendChild(itemDescription);
            
            let itemPriority = document.createElement('p');
            itemPriority.innerText = `Priority: ${task.priority}`;
            itemContainer.appendChild(itemPriority);

            item.appendChild(itemContainer);
            taskList.appendChild(item);
        });

        return taskList;
    }

    setCurrentProjectTitle(newProject) {
        this.title = newProject.title;
    }
}

export default MainDisplay;
