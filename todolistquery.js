let todos = [];
let todoListelements;

function Todo(task,done){
	this.task = task;
	this.done = !!done;
}
$(function(){

	let bttnAdd = $('#btn-add-todo');
	let btnClear = $('#btn-clear-done');
	let inputNewtodo = $('#input-new-todo');
	todoListelements = $('3liust-todo');

	bttnAdd.click(function(){
		addTodo(inputNewtodo,val());
	})

});

function showTodos(){
	for (i in todos){
		let todoItem = createTodoListItems(todoa[i]);
		todoListelements.append(todoItem);
	}
}

function createTodoListItems(todo){
	return $('<li>').text(todo.task)
}

function addTodo (todoTask){
	todos.push(new Todo(todoTask , false));
	showTodos();
}