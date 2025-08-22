import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import WelcomeText from "./welcome-text";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const Navbar = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	
	if (isLoading) {
		return <div>Loading...</div>; // Show a loading message
	}

	return (
		<div className='nav-bar'>
			<WelcomeText/>

			<div>
				{ isAuthenticated ? <LogoutButton/> : <LoginButton/> }
			</div>
		</div>
	)
}

export default Navbar;