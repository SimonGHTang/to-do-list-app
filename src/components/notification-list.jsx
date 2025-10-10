import { useState, useCallback, forwardRef, useImperativeHandle } from "react";
import Notification from "./notification.jsx";

const NotificationList = forwardRef((props, ref) => {
	const [notifList, setNotifList] = useState([]);

	const addNotification = useCallback((message, duration = 5000) => {
		const id = Date.now() + Math.random();
		setNotifList((prev) => [...prev, { id, message, duration }]);
	}, []);

	const removeNotification = useCallback((id) => {
		setNotifList((prev) => prev.filter((notif) => notif.id !== id));
	}, []);

	useImperativeHandle(ref, () => ({
		addNotification,
	}));

	return (
		<div className="notification-container">
			{notifList.map((notif) => (
				<Notification
					key={notif.id}
					message={notif.message}
					duration={notif.duration}
					onExpire={() => removeNotification(notif.id)}
				/>
			))}
		</div>
	);
});

export default NotificationList;