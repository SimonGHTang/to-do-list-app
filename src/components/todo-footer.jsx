import plusIcon from "../assets/plus.png";

const TodoFooter = ({ handleNewTaskClick }) => (
  <div>
    <img className="plus-icon" onClick={handleNewTaskClick} src={plusIcon} />
  </div>
)

export default TodoFooter;
