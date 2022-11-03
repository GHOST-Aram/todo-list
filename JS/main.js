
const tasks = []


function addTask() {
    const task = getTask()
    addToTasks(task)
    renderTask(task)
}
function getTask() {
    const element = document.getElementById('new-task')
    const task = element.value
    return task
}

function addToTasks(task) {
    tasks.push(task)
}
function renderTask(task){
    const taskSection = document.getElementById('tasks-section')
    const mainDiv = document.createElement('div')
    const textbox = document.createElement('input')
    const editDeleteDiv = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    textbox.type = 'text'
    textbox.id = 'task'
    textbox.value = task

    editButton.id = 'edit-btn'
    editButton.innerText = 'Edit'
    
    deleteButton.id = 'delete-btn'
    deleteButton.innerText = 'Delete'

    editDeleteDiv.appendChild(editButton)
    editDeleteDiv.appendChild(deleteButton)

    textbox.innerText = task
    mainDiv.appendChild(textbox)
    mainDiv.appendChild(editDeleteDiv)

    taskSection.innerHTML = mainDiv


}
