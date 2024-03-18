import editIcon from '../../assets/pencil.png'

const TaskDescDisplay = ({ handleClick, description }) => (
  <>
    <p className='task-desc-text' onClick={handleClick}>{description}</p>
    <img className='icon' onClick={handleClick} src={editIcon}/>
  </>
)

export default TaskDescDisplay;
