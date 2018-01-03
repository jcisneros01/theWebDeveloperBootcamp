var todos= ["Buy New Turtle"];
var input = prompt("What would you like to do?");
while (input !== "quit") {
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	}  else if ( input == "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos() {
	console.log("*********");
	todos.forEach(function(todo, i) {
		console.log(i+": " + todo);
	});
	console.log("*********");
}

function addTodo() {
	var newTodo = prompt("Enter a new todo");
	todos.push(newTodo);
	console.log("Todo Added");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Todo Deleted");
}