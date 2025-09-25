import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TaskService from "../services/task-services.jsx";
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TaskItemList from "../components/todo-item-list.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import { useNotification } from "../providers/notification-context.jsx";
import plusIcon from "../assets/plus.png";


function TodoListPage() {
	const notify = useNotification();
	const { getAccessTokenSilently, isAuthenticated } = useAuth0();
	const [taskList, setTaskList] = useState([]);
	const [newOrder, setNewOrder] = useState(1);

	useEffect(() => {
		async function updateTaskList() {
			try {
				if (!isAuthenticated) {
					throw new Error("Failed to fetch Task list.");
				}

				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
					},
				});

				const response = await TaskService.getTaskListByUser(accessToken);
				if (response.status !== 200) {
					throw new Error(response.message || "Failed to fetch user task list.");
				}
				setTaskList(response.data);
			} catch (error) {
				notify(error.message);
				throw error;
			}
		}

		updateTaskList();
	}, []);

	useEffect(() => {``
		if (taskList.at(-1))
			setNewOrder(taskList.at(-1)?.order + 1);
	}, [taskList]);

	const handleTaskCompleteChange = async (taskId) => {
		try {
			const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
				},
			});

			const changedTask = taskList.find((task) => task.id = taskId);
			const response = await TaskService.editTask(accessToken, {...changedTask, completed: !changedTask.completed});
			if (response.status !== 200) {
				throw new Error(response.message || "Failed to fetch edit task completion.");
			}

			const updatedTaskList = taskList.map((task) => {
				if (task.id !== taskId) 
					return task;

				return {
					...task,
					completed: !task.completed,
				}
			});

			setTaskList(updatedTaskList);
		} catch (error) {
			notify(error.message);
			throw error;
		}
	}

	const handleTaskDescriptionChange = async (taskId, updatedDescription) => {
		try {
			const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
				},
			});

			const changedTask = taskList.find((task) => task.id = taskId);
			const response = await TaskService.editTask(accessToken, {...changedTask, description: updatedDescription});
			if (response.status !== 200) {
				throw new Error(response.message || "Failed to edit task description.");
			}
			
			const updatedTaskList = taskList.map((task) => {
				if (task.id !== taskId) 
					return task;

				return {
					...task,
					description: updatedDescription,
				}
			});

			setTaskList(updatedTaskList);
		} catch (error) {
			notify(error.message);
			throw error;
		}
	};

	const handleDeleteTask = async (id) => {
		try {
		const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
				},
			});
			
			const response = await TaskService.deleteTaskById(accessToken, id);
			if (response.status !== 200) {
				throw new Error(response.message || "Failed to delete task.");
			}

			const updatedTaskList = taskList.filter((task) => id !== task.id);
			setTaskList(updatedTaskList);
		} catch (error) {
			notify(error.message);
			throw error;
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
