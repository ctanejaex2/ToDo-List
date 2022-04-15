export class Task {
    constructor(id, title, description, deadline, creation, status) {
        this.taskId = id;
        this.taskTitle = title;
        this.taskDescription = description;
        this.taskDeadline = deadline;
        this.taskCreation = creation;
        this.taskStatus = status;
    }
}