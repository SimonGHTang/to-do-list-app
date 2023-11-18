import { useState } from "react";
import MainLayout from "./layouts/main-layout.jsx";
import Container from "./components/container.jsx";
import TaskItemList from "./components/todo-item-list.jsx";
import TodoHeader from "./components/todo-header.jsx";
import TodoFooter from "./components/todo-footer.jsx";

function App() {
  const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const [taskList, setTaskList] = useState(initialTaskList);

  function emptyTask() {
    return {
      key: crypto.randomUUID(),
      order: 1,
      completed: false,
      desc: "New Task",
    };
  }

  function handleNewTaskClick() {
    setTaskList((prevState) => [...prevState.slice(0, prevState.length), emptyTask()]);
  }

  const handleChanges = (newTask) => {
    let tempArray = taskList.toSpliced(taskList.length);
    let taskIndex = tempArray.findIndex((task) => task.key === newTask.key);
    if (taskIndex !== -1) {
      tempArray[taskIndex] = newTask;
    }
    setTaskList(tempArray);
  };

  const handleDelete = (key) => {
    let tempArray = taskList.toSpliced(taskList.length);
    let taskIndex = tempArray.findIndex((task) => task.key === key);
    if (taskIndex !== -1) {
      tempArray.splice(taskIndex, 1);
    }
    setTaskList(tempArray);
  };

  return (
    <MainLayout>
      <Container>
        <TodoHeader title="Task List" />
        {localStorage.setItem("taskList", JSON.stringify(taskList))}
        <TaskItemList taskList={taskList} handleChanges={handleChanges} handleDelete={handleDelete}/>
        <TodoFooter handleNewTaskClick={handleNewTaskClick} />
      </Container>
    </MainLayout>
  );
}

export default App;
