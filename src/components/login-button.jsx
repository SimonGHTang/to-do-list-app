import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
		<button
			className="log-in-out-button"
			onClick={() => loginWithRedirect({
				authorizationParams: {
					audience: 'https://dev-qyfoibxrup0tyye6.au.auth0.com/api/v2/',
					scope: 'openid profile email', // details auth0 will request on sign in/registration
				}
			})}
		>
			Log In
		</button>
	);
};

export default LoginButton;