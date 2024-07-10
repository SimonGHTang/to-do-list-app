import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TaskItemList from "../components/todo-item-list.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import plusIcon from "../assets/plus.png";

function TodoListPage() {
  const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const [taskList, setTaskList] = useState(initialTaskList);

  const updateLocalStorage = (updatedTaskList) => {
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList))
  }

  function handleAddNewTask() {
    console.log('handleAddNewTask');

    const updatedTaskList = [
      ...taskList,
      {
        key: crypto.randomUUID(),
        order: 1,
        completed: false,
        description: "New Task",
      }
    ]

    setTaskList(updatedTaskList)
    updateLocalStorage(updatedTaskList);
  }

  const handleTaskCompleteChange = (taskId) => {
    console.log('handleTaskCompleteChange');

    const updatedTaskList = taskList.map((task) => {
      if (task.key !== taskId) return task;

      return {
        ...task,
        completed: !task.completed,
      }
    })

    setTaskList(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  }

  const handleTaskDescriptionChange = (taskId, updatedDescription) => {
    console.log('handleTaskDescriptionChange');

    const updatedTaskList = taskList.map((task) => {
      if (task.key !== taskId) return task;

      return {
        ...task,
        description: updatedDescription,
      }
    })

    setTaskList(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  };

  const handleDeleteTask = (taskId) => {
    console.log('handleDelete', taskId)
    const updatedTaskList = taskList.filter(({ key }) => taskId !== key);

    setTaskList(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  };

  return (
    <MainLayout>
      <Container>
        <TodoHeader title="Task List" />
        <TaskItemList
          taskList={taskList}
          onTaskCompleteChange={handleTaskCompleteChange}
          onTaskDescriptionChange={handleTaskDescriptionChange}
          onTaskDelete={handleDeleteTask}
        />
        <TodoFooter>
					<Link to={`/add-task`}>
						<img className="footer-icon" src={plusIcon} />
					</Link>
				</TodoFooter>
      </Container>
    </MainLayout>
  );
}

export default TodoListPage;
