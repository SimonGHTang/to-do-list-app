import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TaskService from "../services/task-services.jsx";
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TaskItemList from "../components/todo-item-list.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import plusIcon from "../assets/plus.png";

function TodoListPage() {
	const { getAccessTokenSilently } = useAuth0();
	const [taskList, setTaskList] = useState([]);
	const [newOrder, setNewOrder] = useState(1);

	useEffect(() => {
		async function updateTaskList() {
			const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
				},
			});

			const list = await TaskService.getTaskListByUser(accessToken);
			setTaskList(list);
		}

		updateTaskList();
	}, []);

	useEffect(() => {``
		if (taskList.at(-1))
			setNewOrder(taskList.at(-1)?.order + 1);
	}, [taskList]);

	const handleTaskCompleteChange = async (taskId) => {
		const accessToken = await getAccessTokenSilently({
			authorizationParams: {
				audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
			},
		});

		const changedTask = taskList.find((task) => task.id = taskId);
		const response = await TaskService.editTask(accessToken, {...changedTask, completed: !changedTask.completed});

		if (response.status == 200) {
			const updatedTaskList = taskList.map((task) => {
				if (task.id !== taskId) return task;

					return {
						...task,
						completed: !task.completed,
					}
			})

			setTaskList(updatedTaskList);
		}
	}

	const handleTaskDescriptionChange = async (taskId, updatedDescription) => {
		const accessToken = await getAccessTokenSilently({
			authorizationParams: {
				audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
			},
		});

		const changedTask = taskList.find((task) => task.id = taskId);
		// editTask.description = updatedDescription;
		const response = await TaskService.editTask(accessToken, {...changedTask, description: updatedDescription});

		if (response.status == 200) {
			const updatedTaskList = taskList.map((task) => {
				if (task.id !== taskId) return task;

					return {
						...task,
						description: updatedDescription,
					}
			})

			setTaskList(updatedTaskList);
		}
	};

	const handleDeleteTask = async (id) => {
		const accessToken = await getAccessTokenSilently({
			authorizationParams: {
				audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
			},
		});
		
		const response = await TaskService.deleteTaskById(accessToken, id);
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
