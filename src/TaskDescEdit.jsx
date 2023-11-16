import saveIcon from './assets/save.png'

const TaskDescEdit = ({desc}) => {
	return (
		<div className="desc-display">
			<span>{desc}</span>
			<img className='icon' src={saveIcon}/>
		</div>
	)
}

export default TaskDescEdit;