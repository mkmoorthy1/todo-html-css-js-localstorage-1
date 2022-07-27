let todosData = JSON.parse(localStorage.getItem('todos')) || [];

const data = {
	todos: todosData,
	setTodos: function(data) {
		this.todos = data;
	},
};

let todoInput = document.getElementById('todo-input');
let todoBox = document.getElementById('todo-box');

let generateTodos = () => {
	todoBox.innerHTML = data.todos
		.map(x => {
			let { id, todoItem, completed } = x;
			return `<li><span class="${completed === true
				? 'completed'
				: ''}">${todoItem}</span><i onclick="toogledone(${id})" class="fa-solid fa-circle-check"></i><i class="fa-solid fa-trash-can" onclick="deleteTask(${id})"></i></li>`;
		})
		.join('');
};

generateTodos();

function toogledone(id) {
	console.log(id);
	let findTodo = data.todos.find(x => x.id === id);

	if (findTodo) {
		console.log(findTodo);
		findTodo.completed = !findTodo.completed;
	}

	data.todos.map(y => (y.id === id ? findTodo : y));

	localStorage.setItem('todos', JSON.stringify(data.todos));
	generateTodos();
}

function addTodo(event) {
	event.preventDefault();

	// let todoInput=todoInput.value.trim()

	if (todoInput.value === '') {
		alert('Please Enter Todo');
	}

	const newTodo = {
		id:data.todos?.length ? data.todos[data.todos.length-1].id+1:1,
		todoItem: todoInput.value,
		completed: false,
	};

	data.setTodos([ ...data.todos, newTodo ]);

	localStorage.setItem('todos', JSON.stringify(data.todos));

	generateTodos();

	todoInput.value = '';
}

function deleteTask(id) {
	console.log(id);

	data.todos = data.todos.filter(x => x.id !== id);

	generateTodos();

	localStorage.setItem('todos', JSON.stringify(data.todos));
}
