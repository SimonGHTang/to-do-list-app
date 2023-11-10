import { useState } from "react";
import "./DisplayTask.css";

function DisplayTask(task) {
	const [taskId, setTaskId] = useState(task.id || 1);
	const [taskCompleted, setDoneBool] = useState(task.completed || false);
	const [taskDescription, setTodoText] = useState(task.description || "");
	console.log("called display task");
	
	console.log(taskId);

	return (
		<>
			<span>{taskId}</span>
			<span>{taskCompleted ? "Yes" : "No"}</span>
			<span>{taskDescription}</span>
		</>
	);
}

export default DisplayTask;
