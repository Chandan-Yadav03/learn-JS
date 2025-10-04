document.addEventListener("DOMContentLoaded",()=>{
    const todoInput=document.getElementById("todo-input");
    const addTaskButton= document.getElementById("add-task-btn");
    const todoList=document.getElementById("todo-list");

    let tasks= JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        renderTask(task);
    });
    addTaskButton.addEventListener("click",()=>{
        let taskText= todoInput.value.trim();
        if(taskText=="")
        {
            return;
        }

        const newTask={
            id: Date.now(),
            text: taskText,
            complete: false,
        };

        tasks.push(newTask);
        saveTask();
        renderTask(newTask);
        todoInput.value="";
        console.log(tasks);
    });

    function saveTask(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    function renderTask(task){
        let li= document.createElement("li");
        li.setAttribute("data-id",task.id);
        li.innerHTML=`
        <span>${task.text}</span>
        <button>Delete</button>`;

        li.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON") return;
            task.complete=!task.complete;
            li.classList.toggle("completed");
            saveTask();
        })
        li.querySelector("button").addEventListener("click",(e)=>{
            e.stopPropagation();
            tasks= tasks.filter((t)=> t.id!==task.id);
            li.remove();
            saveTask();
        });

        todoList.appendChild(li);
    }

})