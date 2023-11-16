import { useState } from "react";
import TaskRow from "./TaskRow.jsx";
import "./App.css";
import plusIcon from "./assets/plus.png";

function App() {
	const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

	const [taskList, setTaskList] = useState(initialTaskList);

	function emptyTask() {
		return {
			id: crypto.randomUUID(),
			order: 1,
			completed: false,
			desc: "New Task",
		};
	}

	function newTask() {
		setTaskList((prevState) => [...prevState.slice(0, prevState.length), emptyTask()]);
	}

	const handleEdit = (id) => {
		let tempArray = taskList.toSpliced(taskList.length);
		let taskIndex = tempArray.findIndex((task) => task.id === id);
		if (taskIndex !== -1) {
			tempArray.splice(taskIndex, 1);
		}
		setTaskList(tempArray);

	}

	const handleDelete = (id) => {
		let tempArray = taskList.toSpliced(taskList.length);
		let taskIndex = tempArray.findIndex((task) => task.id === id);
		if (taskIndex !== -1) {
			tempArray.splice(taskIndex, 1);
		}
		setTaskList(tempArray);
	};

	return (
		<div className="list-container">
			<h1>Task List</h1>
			{localStorage.setItem("taskList", JSON.stringify(taskList))}
			<span>
				{taskList.map((task) => (
					<TaskRow
						task={task}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
						key={task.id}
					/>
				))}
			</span>
			<img className="plus-icon" onClick={newTask} src={plusIcon} />
		</div>
	);
}

export default App;
