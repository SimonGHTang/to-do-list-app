import { useAuth0 } from "@auth0/auth0-react";

const WelcomeText = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>; //loading message while authenticating
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
			</div>
		)
	)
}

export default WelcomeText;