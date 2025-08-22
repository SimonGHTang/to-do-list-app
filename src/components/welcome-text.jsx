import { useAuth0 } from "@auth0/auth0-react";

const WelcomeText = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>; //loading message while authenticating
	}

	return (
		isAuthenticated && (
			<div className="flex-row">
				<img className="user-icon" src={user.picture} alt={user.name} />
				<div>
					<h4 className="user-nav-text">Welcome {user.name}!</h4>
					<p className="user-nav-text">{user.email}</p>
				</div>
			</div>
		)
	)
}

export default WelcomeText;