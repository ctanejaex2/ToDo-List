export { getCurrentTaskId, updateTaskInLocalStorage, deleteTaskInLocalStorage, createTaskInLocalStorage, readTasksInLocalStorage }
import { parseJSONtoString, parseStringToJSON } from '../utils/stringUtils.js'
function getCurrentTaskId() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return getTotalTasks(tasks) + 1;
}

function getTotalTasks(tasks) {
    return Object.keys(tasks).length;
}

function createTaskInLocalStorage(taskId, task) {
    const tasks = parseStringToJSON(localStorage.getItem('tasks'));
    tasks[`${taskId}`] = task;
    localStorage.setItem('tasks', parseJSONtoString(tasks));
}


function readTasksInLocalStorage() {
    const tasks = parseStringToJSON(localStorage.getItem('tasks'));
    if (getTotalTasks(tasks) > 0)
        return tasks;
    return -1;
}

function deleteTaskInLocalStorage(taskId) {
    const tasks = parseStringToJSON(localStorage.getItem('tasks'));
    delete tasks[`task_${taskId}`];
    localStorage.setItem('tasks', parseJSONtoString(tasks));
}

function updateTaskInLocalStorage(taskId) {
    const tasks = parseStringToJSON(localStorage.getItem('tasks'));

    const updatedTitle = document.getElementById(`task_title_${taskId}`).value;
    const updatedDescription = document.getElementById(`task_description_${taskId}`).value;
    const updatedDeadline = document.getElementById(`task_deadline_${taskId}`).value;

    const updatedStatus = document.querySelector(`input[name=task_status_${taskId}]:checked`).value;


    tasks[`task_${taskId}`][`taskTitle`] = updatedTitle;
    tasks[`task_${taskId}`][`taskDescription`] = updatedDescription;
    tasks[`task_${taskId}`][`taskDeadline`] = updatedDeadline;
    tasks[`task_${taskId}`][`taskStatus`] = updatedStatus;

    localStorage.setItem('tasks', parseJSONtoString(tasks));
}