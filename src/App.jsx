import { useState } from "react";
import DisplayTask from "./DisplayTask";
import "./App.css";

function App() {
	const [taskList, setTaskList] = useState(() => createTodos()); //localStorage.getItem("taskList") | []
	console.log(taskList);

	function createTodos() {
		return (
			localStorage.getItem("taskList") || [
				{ id: 1, completed: false, description: "default descrip" },
			]
		);
	}

	return (
		<div className="list-container">
			<h1>Task List</h1>
			<span>{taskList.map(DisplayTask)}</span>
		</div>
	);
}

export default App;
