import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskService from "../services/task-services.jsx";
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TaskItemList from "../components/todo-item-list.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import plusIcon from "../assets/plus.png";

function TodoListPage() {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const getTastList = async () => {
			const list = await TaskService.getTaskList()

			setTaskList(list);
		}

		getTastList();
	}, []);

	const updateLocalStorage = (updatedTaskList) => {
		localStorage.setItem("taskList", JSON.stringify(updatedTaskList))
	}

	const handleTaskCompleteChange = (taskId) => {
		console.log('handleTaskCompleteChange');

		const updatedTaskList = taskList.map((task) => {
			if (task.id !== taskId) return task;

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
			if (task.id !== taskId) return task;

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
		const updatedTaskList = taskList.filter((task) => taskId !== task.id);

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
