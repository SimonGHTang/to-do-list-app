import axios from 'axios';

const apiService = (accessToken) => {
	return axios.create({
		baseURL: 'http://localhost:3000/',
		timeout: 30000,
		headers: { "Authorization": `Bearer ${accessToken}` },
	})
};

async function checkLoginExists(token) {
	const userService = apiService(token);
	const response = await userService.post(`login/check`);
	return response.data;
}

async function getUser(token) {
	const userService = apiService(token);
	const response = await userService.get(`/user`);
	return response.data;
}

export default { checkLoginExists, getUser };