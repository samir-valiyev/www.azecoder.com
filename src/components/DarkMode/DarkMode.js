import React, { useState } from "react";

const DarkMode = () => {
	const [theme, setTheme] = useState(false);
	const changeTheme = () => {
		return document.body.classList.toggle("dark-mode");
	};
	return (
		<div>
			<div className="navbar__light-dark-mode" onClick={changeTheme}>
				<i
					onClick={() => setTheme(!theme)}
					className={theme ? "fas fa-sun" : "fas fa-moon"}
				/>
			</div>
		</div>
	);
};

export default DarkMode;
