const inputTask = document.querySelector('.inputTask')
const inputButton = document.querySelector('.inputButton')
const tasks = document.querySelector('.tasks')

const createTask= () => {
    const line = document.createElement('li');
    return line;
}
 
inputTask.addEventListener('keypress', function(e){
    if(e.keyCode ===13){
        if(!inputTask.value) return
        addTaskList(inputTask.value)
    }
})

const cleanInput=()=>{
    inputTask.value = '';
    inputTask.focus();
}

inputButton.addEventListener('click', function(){
    if(!inputTask.value) return;
    addTaskList(inputTask.value)
})

const addTaskList = (task)=>{
    const addLine = createTask()
    addLine.innerText = task
    tasks.appendChild(addLine)
    cleanInput();
    createDeleteButton(addLine)
    saveTask()
}

const createDeleteButton=(li)=>{
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText =  'Deletar';
    deleteButton.setAttribute('class','delete');
    li.appendChild(deleteButton);

}
//abaico a função vai encontrar o envento de click e buscar o elemento que esta sendo clicado se o delete for encontrado na class
document.addEventListener('click', function(e){
    const element = e.target;
    if(element.classList.contains('delete')){
        element.parentElement.remove()
        saveTask()
    }
})

const saveTask = () =>{
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];
    for (let task of liTasks){
        let nameTask = task.innerText;
        nameTask = nameTask.replace('Deletar','').trim()
        listTasks.push(nameTask)

    }
    const tasksJson = JSON.stringify(listTasks)
    localStorage.setItem('tasks', tasksJson)

}

const addSaveTasks = () =>{
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);
    for(let task of listTasks){
        createTask(task)
    }

}

addSaveTasks()