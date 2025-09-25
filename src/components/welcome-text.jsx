import { useAuth0 } from "@auth0/auth0-react";
import defaultUserIcon from "../assets/vacancy.png";

const WelcomeText = () => {
	const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>; //loading message while authenticating
	}

	return (
		isAuthenticated ? (
			<div className="flex-row">
				<img className="user-icon" src={user.picture} alt={user.name} />
				<div>
					<h4 className="user-nav-text">Welcome {user.name}!</h4>
					<p className="user-nav-text">{user.email}</p>
				</div>
			</div>
		) : (
			<button className="flex-row">
				<img 
					className="user-icon" 
					src={defaultUserIcon}
					onClick={() => loginWithRedirect({
						authorizationParams: {
							redirect_uri: 'http://localhost:5173/onboarding',
							audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
							scope: 'openid profile email', // details auth0 will request on sign in/registration
						}
					})}
				/>
			</button>

		)
	)
}

export default WelcomeText;