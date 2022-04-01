export { getTaskDetails, parseStringToJSON, parseJSONtoString }
import { title, description, deadline, getTaskDetailsInput } from './domUtils.js'
function getTaskDetails() {
    getTaskDetailsInput();
    const isTitleValid = checkInputValidity(title);
    const isDescriptionValid = checkInputValidity(description);
    const isDeadlineValid = checkInputValidity(deadline);

    if (isDeadlineValid && isDescriptionValid && isTitleValid)
        return [title, description, deadline];

    return -1;
}

function checkInputValidity(data) {
    if (data == '')
        return false;
    return true;
}

function parseStringToJSON(text) {
    return JSON.parse(text);
}

function parseJSONtoString(json) {
    return JSON.stringify(json);
}


// All this can be done in class Task