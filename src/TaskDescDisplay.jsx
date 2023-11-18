import editIcon from './assets/pencil.png'

const TaskDescDisplay = ({handleClick, desc}) => (
		<div className="desc-display" onClick={() => handleClick()}>
			<span>{desc}</span>
			<img className='icon' src={editIcon}/>
		</div>
	)

export default TaskDescDisplay;