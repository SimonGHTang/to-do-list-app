import { useState } from "react";
import { Link } from "react-router-dom";
import TaskService from "../services/task-services.jsx"
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import saveIcon from "../assets/save.png";
import deleteIcon from "../assets/delete.png";

function AddTaskPage() {
  const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const [taskList, setTaskList] = useState(initialTaskList);
	const [newTaskDescription, setNewTaskDescription] = useState("");

	function handleAddNewTask() {
    console.log('handleAddNewTask');

		const updatedTaskList = [
      ...taskList,
			{
				key: crypto.randomUUID(),
				order: 1,
				completed: false,
				description: newTaskDescription,
			}
		]

    setTaskList(updatedTaskList)
		updateLocalStorage(updatedTaskList);
		TaskService.getTaskList();
	}
	
	const updateLocalStorage = (updatedTaskList) => {
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList))
  }

	const handleNewTaskDescriptionChange = (event) => {
		setNewTaskDescription(event.target.value)
	}

	return (
		<MainLayout>
			<Container>
        <TodoHeader title="New Task" />
				<div>
					<label>New Task Description:</label>
					<input
						className="task-desc-input"
						autoFocus
						defaultValue={newTaskDescription}
						onChange={handleNewTaskDescriptionChange}
					/>
				</div>
				<TodoFooter>
					<Link to={`/`}>
						<img className="footer-icon" src={deleteIcon} />
					</Link>
					<Link to={`/`}>
						<img className="footer-icon" onClick={handleAddNewTask} src={saveIcon} />
					</Link>
				</TodoFooter>
			</Container>
		</MainLayout>
	)
}

export default AddTaskPage;