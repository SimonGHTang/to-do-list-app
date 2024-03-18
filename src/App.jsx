import { useState } from "react";
import MainLayout from "./layouts/main-layout.jsx";
import Container from "./Components/container.jsx";
import TaskItemList from "./Components/todo-item-list.jsx";
import TodoHeader from "./Components/todo-header.jsx";
import TodoFooter from "./Components/todo-footer.jsx";

function App() {
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
        <TodoFooter onAddNewTask={handleAddNewTask} />
      </Container>
    </MainLayout>
  );
}

export default App;
