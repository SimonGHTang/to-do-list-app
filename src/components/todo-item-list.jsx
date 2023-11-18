import TaskRow from "../TaskRow.jsx";

const TodoItemList = ({ taskList, handleChanges, handleDelete }) => (
  <span>
    {taskList.map((task) => (
      <TaskRow
        task={task}
        handleChanges={handleChanges}
        handleDelete={handleDelete}
        key={task.key}
      />
    ))}
  </span>
)

export default TodoItemList;
