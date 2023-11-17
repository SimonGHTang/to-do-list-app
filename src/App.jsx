import { useState } from "react";
import TaskRow from "./TaskRow.jsx";
import "./App.css";
import plusIcon from "./assets/plus.png";

function App() {
	const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

	const [taskList, setTaskList] = useState(initialTaskList);

	function emptyTask() {
		return {
			key: crypto.randomUUID(),
			order: 1,
			completed: false,
			desc: "New Task",
		};
	}

	function newTask() {
		setTaskList((prevState) => [...prevState.slice(0, prevState.length), emptyTask()]);
	}

	const handleChanges = (newTask) => {
		let tempArray = taskList.toSpliced(taskList.length);
		let taskIndex = tempArray.findIndex((task) => task.key === newTask.key);
		if (taskIndex !== -1) {
			tempArray[taskIndex] = newTask;
		}
		setTaskList(tempArray);
	};

	const handleDelete = (key) => {
		let tempArray = taskList.toSpliced(taskList.length);
		let taskIndex = tempArray.findIndex((task) => task.key === key);
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
						handleChanges={handleChanges}
						handleDelete={handleDelete}
						key={task.key}
					/>
				))}
			</span>
			<div>
				<img className="plus-icon" onClick={newTask} src={plusIcon} />
			</div>
		</div>
	);
}

export default App;
