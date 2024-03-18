import { useState } from "react";
import TaskDescDisplay from "./task-desc-display.jsx";
import TaskDescEdit from "./task-desc-edit.jsx";
import deleteIcon from "../../assets/delete.png";
import checkedIcon from "../../assets/checked.png";
import timeIcon from "../../assets/time.png";

const TaskRow = ({ task, onTaskCompleteChange, onTaskDescriptionChange, onTaskDelete }) => {

  const { key: taskId, order, completed, description } = task;

  const [ isEditing, setIsEditing ] = useState(false);

  const handleTaskDelete = () => {
    setIsEditing(false);
    onTaskDelete(taskId);
  }

  return (
    <div className="task-row">
      <div ><p className="icon">{order}</p></div>
      {
        completed
          ? <button onClick={() => onTaskCompleteChange(taskId)}>
            <img className="icon" src={checkedIcon} />
          </button>
          : <button onClick={() => onTaskCompleteChange(taskId)}>
            <img className="icon" src={timeIcon} />
          </button>
      }
      <div className="task-desc">
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
        <button
          className="icon"
          onClick={handleTaskDelete}
        >
          <img
            src={deleteIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default TaskRow;
