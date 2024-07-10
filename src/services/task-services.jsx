import axios from 'axios';

const taskService = axios.create({
  baseURL: 'http://localhost:3000/taskDatabase',
  timeout: 3000,
});

async function getTaskList() {
	const response = await taskService.get(`/`);
	console.log(response);
}

export default { getTaskList, };