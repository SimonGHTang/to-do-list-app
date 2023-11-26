import plusIcon from "../assets/plus.png";

const TodoFooter = ({ onAddNewTask }) => (
  <div>
    <img className="plus-icon" onClick={onAddNewTask} src={plusIcon} />
  </div>
)

export default TodoFooter;
