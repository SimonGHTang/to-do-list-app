import editIcon from '../../assets/pencil.png'

const TaskDescDisplay = ({ handleClick, description }) => (
	<div className='spaced-task-display'>
		<p className='task-desc-text' onClick={handleClick}>{description}</p>
		<img className='icon' onClick={handleClick} src={editIcon}/>
	</div>
)

export default TaskDescDisplay;
