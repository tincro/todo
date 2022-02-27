class Task {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        // TODO add dueDate
        // TODO add notes
        // TODO add checklist
        //  --  if complete give "complete" class
    }
    
    changePriority(newPriority) {
        this.priority = newPriority;
    }
}