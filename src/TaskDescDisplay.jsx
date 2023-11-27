import editIcon from './assets/pencil.png'

const TaskDescDisplay = ({ handleClick, description }) => (
  <>
    <span onClick={handleClick}>{description}</span>
    <img className='icon' onClick={handleClick} src={editIcon}/>
  </>
)

export default TaskDescDisplay;
