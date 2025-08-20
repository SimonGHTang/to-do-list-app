import axios from 'axios';

const taskService = axios.create({
	baseURL: 'http://localhost:3000/taskDatabase',
	timeout: 3000,
});

async function getTaskList() {
	const response = await taskService.get(`/`);
	return response.data;
}

async function getTaskById(id) {
	const response = await taskService.get(`/${id}`);
	return response.data;
}

async function addTask(task) {
	const response = await taskService.post(`/`, {task});
	return response;
}

async function editTask(task) {
	const response = await taskService.put(`/`, {task});
	return response;
}

async function deleteTaskById(id) {
	const response = await taskService.delete(`/${id}`);
	return response;
}

export default { getTaskList, getTaskById, addTask, editTask, deleteTaskById };