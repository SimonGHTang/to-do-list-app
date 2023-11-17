import { useState } from "react";
import saveIcon from "./assets/save.png";

const TaskDescEdit = ({ saveDesc, desc }) => {
	const [descInput, setDescInput] = useState(desc)

	return (
		<div className="desc-display">
			<input
				autoFocus
				defaultValue={descInput}
				onChange={(e) => setDescInput(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' ? saveDesc(descInput): {}}
				// onBlur={(e) => saveDesc(descInput)}
			/>
			<img className="icon" onClick={() => saveDesc(descInput)} src={saveIcon} />
		</div>
	);
};

export default TaskDescEdit;
