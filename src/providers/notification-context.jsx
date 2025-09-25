import { createContext, useContext, useRef } from "react";
import NotificationList from "../components/notification-list.jsx";

const NotificationContext = createContext();

export function useNotification() {
    return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
	const notifListRef = useRef();

	const addNotification = (message, duration) => {
		if (notifListRef.current) {
			notifListRef.current.addNotification(message, duration);
		}
	};

	return (
		<NotificationContext.Provider value={addNotification}>
			{children}
			<NotificationList ref={notifListRef} />
		</NotificationContext.Provider>
	);
}