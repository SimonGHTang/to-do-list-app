import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import TodoListPage from './routes/list.jsx';
import AddTaskPage from './routes/add-task.jsx';
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
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
