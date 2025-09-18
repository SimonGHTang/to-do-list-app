import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/navbar.jsx';
import TodoListPage from './routes/list.jsx';
import AddTaskPage from './routes/add-task.jsx';
import ProfileOnboarding from './routes/profile-onboarding.jsx';
import ErrorPage from "./routes/error.jsx";
import './index.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <TodoListPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/add-task",
		element: <AddTaskPage/>,
		errorElement: <ErrorPage/>,
	},
	{
		path: "/onboarding",
		element: <ProfileOnboarding/>,
		errorElement: <ErrorPage/>,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="dev-qyfoibxrup0tyye6.au.auth0.com"
		clientId="MhjAGhQn89YkZgYn32UPKc4YbzDOP2k9"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		{/* <React.StrictMode> */}
			<Navbar/>
			<RouterProvider router={router} />
		{/* </React.StrictMode> */}
	</Auth0Provider>,
)
