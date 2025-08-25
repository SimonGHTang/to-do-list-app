import axios from 'axios';

const apiService = (accessToken) => {
	return axios.create({
		baseURL: 'http://localhost:3000/taskDatabase',
		timeout: 3000,
		headers: { "Authorization": `Bearer ${accessToken}` },
	})
};

async function getTaskList(token) {
	const taskService = apiService(token);
	const response = await taskService.get(`/`);
	return response.data;
}

async function getTaskById(token, id) {
	const taskService = apiService(token);
	const response = await taskService.get(`/${id}`);
	return response.data;
}

async function addTask(token, task) {
	const taskService = apiService(token);
	const response = await taskService.post(`/`, {task});
	return response;
}

async function editTask(token, task) {
	const taskService = apiService(token);
	const response = await taskService.put(`/`, {task});
	return response;
}

async function deleteTaskById(token, id) {
	const taskService = apiService(token);
	const response = await taskService.delete(`/${id}`);
	return response;
}

export default { getTaskList, getTaskById, addTask, editTask, deleteTaskById };