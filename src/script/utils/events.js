export { deleteTask, editTask }
import { removeChildFromParent, removeElementAttribute, setElementAttribute } from './domUtils.js'
import { deleteTaskInLocalStorage, updateTaskInLocalStorage } from '../storage/localstorage.js'

function deleteTask(el, taskId) {
    el.addEventListener('click', () => {
        const list = document.querySelector('#view_tasks_list');
        const item = document.getElementById(`task_list_item_${taskId}`);
        removeChildFromParent(list, item);

        deleteTaskInLocalStorage(taskId);
    });
}

function editTask(el, taskId) {
    el.addEventListener('click', () => {
        const title = document.getElementById(`task_title_${taskId}`);
        const description = document.getElementById(`task_description_${taskId}`);
        const deadline = document.getElementById(`task_deadline_${taskId}`);
        const statusComplete = document.getElementById(`task_complete_${taskId}`);
        const statusPending = document.getElementById(`task_pending_${taskId}`);

        if (el.textContent == 'edit') {

            el.textContent = 'save';
            removeElementAttribute(title, 'readonly');
            removeElementAttribute(description, 'readonly');
            removeElementAttribute(deadline, 'readonly');
            removeElementAttribute(statusComplete, 'disabled');
            removeElementAttribute(statusPending, 'disabled');
        } else if (el.textContent == 'save') {

            el.textContent = 'edit';
            setElementAttribute(title, 'readonly', 'readonly');
            setElementAttribute(description, 'readonly', 'readonly');
            setElementAttribute(deadline, 'readonly', 'readonly');
            setElementAttribute(statusComplete, 'disabled', 'disabled');
            setElementAttribute(statusPending, 'disabled', 'disabled');
            updateTaskInLocalStorage(taskId);
        }

    })
}