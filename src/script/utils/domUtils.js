import { deleteTask, editTask } from "./events.js";
export { setElementAttribute, resetTaskDetailsInput, removeElementAttribute, removeChildFromParent, getTaskDetailsInput, displayTask, title, description, deadline, inputTaskTitle, inputTaskDescription, inputTaskDeadline, btnAddTask }

const inputTaskTitle = document.querySelector('#input_add_task_title');
const inputTaskDescription = document.querySelector('#input_add_task_description');
const inputTaskDeadline = document.querySelector('#input_add_task_deadline');
const btnAddTask = document.querySelector('#btn_add_task');
const listView = document.querySelector('#view_tasks_list');


let title, description, deadline;


function getTaskDetailsInput() {
    title = inputTaskTitle.value;
    description = inputTaskDescription.value;
    deadline = inputTaskDeadline.value;
}

function displayTask(task) {
    const views = createViewsOnWindow(task.taskId);
    appendViewsToWindow(views);
    setValuesOnViews(task);
}

function appendViewsToWindow(views) {

    appendChildToParentNode(views[0], views[1]);
    appendChildToParentNode(views[0], views[2]);
    appendChildToParentNode(views[0], views[3]);
    appendChildToParentNode(views[0], views[4]);
    appendChildToParentNode(views[0], views[5]);
    appendChildToParentNode(views[0], views[6]);

    appendChildToParentNode(listView, views[0]);


}

function setValuesOnViews(task) {
    document.getElementById(`task_title_${task.taskId}`).value = task.taskTitle;
    document.getElementById(`task_description_${task.taskId}`).value = task.taskDescription;
    document.getElementById(`task_deadline_${task.taskId}`).value = task.taskDeadline;
    document.getElementById(`task_creation_${task.taskId}`).textContent = `created on date ${task.taskCreation}`;
    document.getElementById(`task_edit_${task.taskId}`).textContent = 'edit';
    document.getElementById(`task_delete_${task.taskId}`).textContent = 'delete';

}

function createViewsOnWindow(taskId) {
    const viewListItem = createViewListItem(taskId);
    const viewTitle = createViewTitle(taskId);
    const viewDescription = createViewDescription(taskId);
    const viewDeadline = createViewDeadline(taskId);
    const viewCreation = createViewCreation(taskId);
    const btnEdit = createBtnTask(taskId, 'edit');
    const btnDelete = createBtnTask(taskId, 'delete');

    deleteTask(btnDelete, taskId);
    editTask(btnEdit, taskId);

    return [viewListItem, viewTitle, viewDescription, viewDeadline, viewCreation, btnEdit, btnDelete];
}

function createBtnTask(taskId, type) {
    const item = createNewElement('button');
    setElementAttribute(item, 'id', `task_${type}_${taskId}`);
    return item;
}

function createViewCreation(taskId) {
    const item = createNewElement('p');
    setElementAttribute(item, 'id', `task_creation_${taskId}`);
    return item;
}

function createViewDeadline(taskId) {
    const item = createNewElement('input');
    setElementAttribute(item, 'id', `task_deadline_${taskId}`);
    setElementAttribute(item, 'type', 'date');
    setElementAttribute(item, 'readonly', 'readonly');
    return item;
}

function createViewDescription(taskId) {
    const item = createNewElement('textarea');
    setElementAttribute(item, 'id', `task_description_${taskId}`);
    setElementAttribute(item, 'readonly', 'readonly');
    return item;
}

function createViewTitle(taskId) {
    const item = createNewElement('input');
    setElementAttribute(item, 'id', `task_title_${taskId}`);
    setElementAttribute(item, 'readonly', `readonly`);
    return item;
}

function createViewListItem(taskId) {
    const item = createNewElement('li');
    setElementAttribute(item, 'id', `task_list_item_${taskId}`)
    return item;
}

function appendChildToParentNode(parent, child) {
    parent.appendChild(child);
}

function removeChildFromParent(parent, child) {
    parent.removeChild(child);
}


function createNewElement(type) {
    const element = document.createElement(type);
    return element;
}

function setElementAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}

function removeElementAttribute(element, attribute) {
    element.removeAttribute(attribute);
}

function resetTaskDetailsInput() {
    inputTaskTitle.value = '';
    inputTaskDescription.value = '';
    inputTaskDeadline.value = '';
}


// function getCurrentTaskStatus(taskId) {
//     const currentTaskRadioPending = document.getElementById(`radio_task_pending_${ taskId } `);
//     // const currentTaskRadioComplete = document.getElementById(`radio_task_complete_${ taskId } `);

//     return (currentTaskRadioPending.checked) ? 'pending' : 'complete';
// }