import { useState } from "react";
import saveIcon from "../../assets/save.png";

const TaskDescEdit = ({ taskId, onTaskDescriptionChange, onEditEditModeUpdate, descriptionProp }) => {
	const [description, setDescription] = useState(descriptionProp);

	const handleEnterKeyPress = (event) => {
		if (event.key === 'Enter') {
			saveDescriptionUpdateEditMode();
		}
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
				onChange={((event) => {setDescription(event.target.value)})}
				onKeyDown={handleEnterKeyPress}
			/>
			<img className="icon" onClick={saveDescriptionUpdateEditMode} src={saveIcon} />
		</div>
	);
};

export default TaskDescEdit;
