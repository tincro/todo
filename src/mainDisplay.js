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
        this.sectionWrapperId = 'main-display';
        this.taskWrapperId = 'taskList'
    }

    show() {
        const element = document.createElement('div');
        element.id = this.sectionWrapperId;
        element.classList.add('main-display');
        const title = document.createElement('h1');
        title.innerText = this.title;
        element.appendChild(title);

        const tasks = document.createElement('ul');
        tasks.id = this.taskWrapperId;
        element.appendChild(tasks);
    
        return element;
    }

    populateTasks(list) {
        const taskList = document.getElementById(this.taskWrapperId);
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

    formDisplay() {
        const div = document.getElementById(this.sectionWrapperId);
        const field = document.createElement('fieldset');
        
        const titleInput = document.createElement('input');
        titleInput.id = "task-title-input";
        field.appendChild(titleInput);

        const descriptionInput = document.createElement('input');
        descriptionInput.id = "description-input";
        field.appendChild(descriptionInput);

        const priorityInput = document.createElement('input');
        priorityInput.id = "priority-input";
        field.appendChild(priorityInput);

        const btn = document.createElement('input');
        btn.type = 'button';
        btn.value = "New Task";
        btn.id = "task-btn";
        field.appendChild(btn);
        div.appendChild(field);
        return div;
    }

    reset() {
        const div = document.getElementById(this.taskWrapperId);
        div.innerHTML = '';
        return div;
    }
}

export default MainDisplay;
