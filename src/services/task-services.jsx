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

export default { getTaskList, getTaskById };