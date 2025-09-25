import { useEffect, useState } from "react";
import cancelIcon from "../assets/cancel.png";

function Notification({ message, onExpire, duration = 5000 }) {
	const [fading, setFading] = useState(false);

	useEffect(() => {
		const fadeTimer = setTimeout(() => setFading(true), duration - 300); // Start fading 300ms before expire
		const expireTimer = setTimeout(() => onExpire(), duration);
		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(expireTimer);
		};
	}, [onExpire, duration]);

	return (
		<div className={`notification${fading ? " fade-out" : ""}`}>
			<p>{message}</p>
			<button className="notification-close" onClick={onExpire}>
				<img className="small-icon" src={cancelIcon} alt="close"/>
			</button>
		</div>
	);
}

export default Notification;