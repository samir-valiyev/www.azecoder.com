import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import Button from "./Button";

const Buttons = () => {
	return (
		<h2>
			<div className="navbar__right__side">
				<DarkMode />
				<Link to="contact-us">
					<Button name="CONTACT US" />
				</Link>
			</div>
		</h2>
	);
};
export default Buttons;
