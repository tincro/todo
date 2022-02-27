export default function mainDisplay() {
    /*
        <div>
            <h1>Project Name</h1>
            <ul>
                <li>Task</li>
            <ul>
        </div>
    */
    const element = document.createElement('div');
    const tasks = document.createElement('ul');
    element.appendChild(tasks);

    // iterate through tasks  topopulate list
    const taskList = document.createElement('li');
    tasks.appendChild(taskList);
    
    return element;
}