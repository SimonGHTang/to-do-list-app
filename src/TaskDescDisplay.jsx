import editIcon from './assets/pencil.png'

const TaskDescDisplay = ({desc}) => {
	return (
		<div className="desc-display">
			<span>{desc}</span>
			<img className='icon' src={editIcon}/>
		</div>
	)
}

export default TaskDescDisplay;