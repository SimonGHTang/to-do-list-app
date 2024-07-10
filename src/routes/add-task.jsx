import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/main-layout.jsx";
import Container from "../layouts/container.jsx";
import TodoHeader from "../components/todo-header.jsx";
import TodoFooter from "../components/todo-footer.jsx";
import saveIcon from "../assets/save.png";
import deleteIcon from "../assets/delete.png";

function AddTaskPage() {
	function handleAddNewTask() {}

	return (
		<MainLayout>
			<Container>
        <TodoHeader title="New Task" />
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