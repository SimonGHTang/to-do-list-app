import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserService from "../services/user-services.jsx";

function ProfileOnboarding() {
	const { getAccessTokenSilently } = useAuth0();
	const [user, setUser] = useState({});

	useEffect(() => {
		async function checkDatabaseHasUser() {
			const accessToken = await getAccessTokenSilently({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
				},
			});

			await UserService.checkLoginExists(accessToken);
			const user = await UserService.getUser(accessToken);
			setUser(user);
		}

		checkDatabaseHasUser();
	}, []);

	return (
			<div>
					<h1>Profile Onboarding Page</h1>
					<p></p>
			</div>
	);
}

export default ProfileOnboarding;