import { useState } from "react";
import TaskDescDisplay from "./TaskDescDisplay.jsx";
import TaskDescEdit from "./TaskDescEdit.jsx";
import deleteIcon from "./assets/delete.png";
import checkedIcon from "./assets/checked.png";
import timeIcon from "./assets/time.png";

const TaskRow = ({ task, onTaskCompleteChange, onTaskDescriptionChange, onTaskDelete }) => {

  const { key: taskId, order, completed, description } = task;

  const [ isEditing, setIsEditing ] = useState(false);

  const handleTaskDelete = () => {
    setIsEditing(false);
    onTaskDelete(taskId);
  }

  return (
    <div className="task-row">
      <div className="icon">{order}</div>
      <div className="icon">
        {
          completed
            ? <img className="icon" src={checkedIcon} onClick={() => onTaskCompleteChange(taskId)} />
            : <img className="icon" src={timeIcon} onClick={() => onTaskCompleteChange(taskId)} />
        }
      </div>
      <div className="desc-display">
        {
          isEditing
            ? <TaskDescEdit
              taskId={taskId}
              onTaskDescriptionChange={onTaskDescriptionChange}
              onEditEditModeUpdate={setIsEditing}
              description={description}
            />
            : <TaskDescDisplay
              handleClick={() => setIsEditing(true)}
              description={description}
            />
        }
      </div>
      <div>
        <img
          className="icon"
          src={deleteIcon}
          onClick={handleTaskDelete}
        />
      </div>
    </div>
  );
};

export default TaskRow;
