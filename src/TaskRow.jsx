import { useState } from 'react'
import TaskDescDisplay from './TaskDescDisplay.jsx'
import TaskDescEdit from './TaskDescEdit.jsx';
import deleteIcon from './assets/delete.png'

const TaskRow = ({task, handleDelete}) => {
	const [editingDesc, setEditingDesc] = useState(false);
	const { id, order, completed, description } = task;

	const handleEdit = () => {
		setEditingDesc((prevState) => !prevState)
	}

	return (
		<div className="task-row">
			<span>{order}</span>
			<span>{completed ? "Yes" : "No"}</span>
			<div onClick={handleEdit}>
				{editingDesc ? <TaskDescEdit desc={description}/> : <TaskDescDisplay desc={description}/>}
			</div>
			<img className="icon" onClick={() => handleDelete(id)} src={deleteIcon}/>
		</div>
	);
}

export default TaskRow;
