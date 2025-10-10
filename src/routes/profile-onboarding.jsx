import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../providers/notification-context.jsx";
import UserService from "../services/user-services.jsx";

function ProfileOnboarding() {
	const { getAccessTokenSilently } = useAuth0();
	const notify = useNotification();
	const navigate = useNavigate();

	useEffect(() => {
		async function checkDatabaseHasUser() {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
					},
				});

				let response = await UserService.checkLoginExists(accessToken);
				if (response.status !== 200) {
					throw new Error(response.message || "Failed to fetch check user.");
				}

				response = await UserService.getUser(accessToken);
				if (response.status !== 200) {
					throw new Error(response.message || "Failed to fetch user.");
				}
				navigate('/');
			} catch (error) {
				notify(error.message);
				throw error;
			}
		}

		checkDatabaseHasUser();
	}, []);

	return (
			<div>
					<h1>Redirecting....!</h1>
					<p></p>
			</div>
	);
}

export default ProfileOnboarding;