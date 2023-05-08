const inputTask = document.querySelector('.inputTask')
const inputButton = document.querySelector('.inputButton')
const tasks = document.querySelector('.tasks')


const createTask= () => {
    const line = document.createElement('li');
    return line;
}

const addTaskList = (task)=>{
    const addLine = createTask()
    addLine.innerText = task
    tasks.appendChild(addLine)
}

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode ===13){
        if(!inputTask.value) return
        addTaskList(inputTask.value)
    }
})