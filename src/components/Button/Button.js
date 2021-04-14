import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Button() {
	const [theme, setTheme] = useState(false);
	const changeTheme = () => setTheme(!theme);
	return (
		<>
			<div className="navbar__right__side">
				<div className="navbar__light-dark-mode" onClick={changeTheme}>
					<i className={theme ? "fas fa-sun" : "fas fa-moon"} />
				</div>
				<Link to="contact-us">
					<button className="navbar__btn">CONTACT US</button>
				</Link>
			</div>
		</>
	);
}
