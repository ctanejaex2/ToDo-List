export { getCurrentDate }

function getCurrentDate() {
    const date = new Date();
    const currentDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    return currentDate;
}