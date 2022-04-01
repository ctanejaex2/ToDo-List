import { inputTaskTitle, displayTask, inputTaskDescription, inputTaskDeadline, btnAddTask, resetTaskDetailsInput } from './utils/domUtils.js'
import { getTaskDetails } from './utils/stringUtils.js'
import { getCurrentDate } from './utils/dateUtils.js'
import { Task } from './model/task.js'
import { getCurrentTaskId, createTaskInLocalStorage, readTasksInLocalStorage } from './storage/localstorage.js'

btnAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTaskInputDetails = getTaskDetails();

    if (currentTaskInputDetails == -1) {
        alert('Please enter valid input!');
        window.location.reload();
    }

    const currentDate = getCurrentDate();
    const currentTaskId = getCurrentTaskId();
    // const currentTaskStatus = getCurrentTaskStatus(currentTaskId);

    const currentTask = new Task(currentTaskId, currentTaskInputDetails[0], currentTaskInputDetails[1], currentTaskInputDetails[2], currentDate, 'pending');
    createTaskInLocalStorage(`task_${currentTaskId}`, currentTask);
    displayTask(currentTask);


    resetTaskDetailsInput();

});

window.addEventListener('load', () => {
    if (!localStorage.getItem('tasks')) {
        const obj = {};
        localStorage.setItem('tasks', JSON.stringify(obj))
    }

    const tasks = readTasksInLocalStorage();
    if (tasks != -1) {
        const keys = Object.keys(tasks);
        keys.forEach((task) => {
            displayTask(tasks[task]);
        })
    }
});