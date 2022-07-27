let todosData=JSON.parse(localStorage.getItem('todos'))||[]

const data={
    todos:todosData,
    setTodos: function(data){
        this.todos=data
    }

}

let todoInput=document.getElementById("todo-input");


let generateTodos=()=>{
    
}


function addTodo(event){
    
    event.preventDefault();

    // let todoInput=todoInput.value.trim()

    if(todoInput.value === ""){
        alert("Please Enter Todo")
    }


    const newTodo={
        id:data.todos?.length ? data.todos[data.todos.length-1].id+1:1,
        todoItem:todoInput.value,
        completed:false
    }


    data.setTodos([...data.todos,newTodo]);

    localStorage.setItem('todos',JSON.stringify(data.todos));

    todoInput.value="";

}