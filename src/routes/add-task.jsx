import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TaskService from "../services/task-services.jsx"
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import saveIcon from "../assets/save.png";
import deleteIcon from "../assets/delete.png";

function AddTaskPage() {
	const { getAccessTokenSilently } = useAuth0();
	const {state} = useLocation();
	const navigate = useNavigate();

	const [newTaskDescription, setNewTaskDescription] = useState("");

	async function handleAddNewTask() {
		const accessToken = await getAccessTokenSilently({
			authorizationParams: {
				audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
			},
		});

		const newTask = {
			order: state.newOrder,
			completed: false,
			description: newTaskDescription,
		}

		const response = await TaskService.addTask(accessToken, newTask);
		if (response.status === 200) {
			navigate('/');
		}
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
					<button to={`/`}>
						<img className="footer-icon" onClick={handleAddNewTask} src={saveIcon} />
					</button>
				</TodoFooter>
			</Container>
		</MainLayout>
	)
}

export default AddTaskPage;