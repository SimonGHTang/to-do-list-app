import saveIcon from "../../assets/save.png";

const TaskDescEdit = ({ taskId, onTaskDescriptionChange, onEditEditModeUpdate, description }) => {

	const handleUpdateDescription = (event) => {
		const updatedDescription = event.target.value;
		onTaskDescriptionChange(taskId, updatedDescription);
	}

	const handleEnterKeyPress = (event) => {
		if (event.key === 'Enter') {
			saveDescriptionUpdateEditMode();
		}
	}

	const handleUpdateEditMode = () => {
		saveDescriptionUpdateEditMode();
	}

	const saveDescriptionUpdateEditMode = () => {
		onTaskDescriptionChange(taskId, description);
		onEditEditModeUpdate(false);
	}

	return (
		<div className='spaced-task-display'>
			<input
				className="task-desc-input"
				autoFocus
				defaultValue={description}
				onChange={handleUpdateDescription}
				onKeyDown={handleEnterKeyPress}
			/>
			<img className="icon" onClick={handleUpdateEditMode} src={saveIcon} />
		</div>
	);
};

export default TaskDescEdit;
