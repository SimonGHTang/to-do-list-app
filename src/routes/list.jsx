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
	const [newOrder, setNewOrder] = useState(1);

	useEffect(() => {
		updateTaskList();
	}, []);

	useEffect(() => {
		if (taskList.at(-1))
			setNewOrder(taskList.at(-1)?.order + 1);
	}, [taskList])

	const updateTaskList = async () => {
		const list = await TaskService.getTaskList();

		console.log('task list', list);

		setTaskList(list);
	}

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

	const handleDeleteTask = async (id) => {
		const response = await TaskService.deleteTaskById(id);
		if (response.status == 200) {
			const updatedTaskList = taskList.filter((task) => id !== task.id);
			setTaskList(updatedTaskList);
		}
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
					<Link to={`/add-task`} state={{newOrder}}>
						<img className="footer-icon" src={plusIcon} />
					</Link>
				</TodoFooter>
			</Container>
		</MainLayout>
	);
}

export default TodoListPage;
