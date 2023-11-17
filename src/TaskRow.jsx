import { useState } from "react";
import TaskDescDisplay from "./TaskDescDisplay.jsx";
import TaskDescEdit from "./TaskDescEdit.jsx";
import deleteIcon from "./assets/delete.png";
import checkedIcon from "./assets/checked.png";
import timeIcon from "./assets/time.png";

const TaskRow = ({ task, handleDelete, handleChanges }) => {
	const [editingDesc, setEditingDesc] = useState(false);
	const { key, order, completed, desc } = task;

	const saveDesc = (newDesc) => {
		handleClick();

		handleChanges({...task, desc: newDesc});
	};
	
	const saveComplete = (newDesc) => {

		handleChanges({...task, completed: !completed});
	};

	const handleClick = () => {
		setEditingDesc((prevState) => !prevState);
	};

	return (
		<div className="task-row">
			<span className="icon">{order}</span>
			<span className="icon" onClick={() => {saveComplete()}}>{completed ? (
				<img className="icon" src={checkedIcon} />
			) : (
				<img className="icon" src={timeIcon} />
			)}</span>
			{editingDesc ? (
				<TaskDescEdit saveDesc={saveDesc} desc={desc} />
			) : (
				<TaskDescDisplay handleClick={() => handleClick()} desc={desc} />
			)}
			<img className="icon" onClick={() => handleDelete(key)} src={deleteIcon} />
		</div>
	);
};

export default TaskRow;
