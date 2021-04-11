import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
					AzeCoder
				</Link>
				<div className="navbar__menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "navbar__nav-menu active" : "navbar__nav-menu"}>
					<li className="navbar__nav-item">
						<Link to="/" className="navbar__nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li
						className="navbar__nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<Link
							to="/services"
							className="navbar__nav-links"
							onClick={closeMobileMenu}>
							Services <i className="fas fa-caret-down" />
						</Link>
						{dropdown && <Dropdown />}
					</li>
					<li className="navbar__nav-item">
						<Link
							to="/products"
							className="navbar__nav-links"
							onClick={closeMobileMenu}>
							Products
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link
							to="/contact-us"
							className="navbar__nav-links"
							onClick={closeMobileMenu}>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							to="/sign-up"
							className="navbar__nav-links__mobile"
							onClick={closeMobileMenu}>
							Sign Up
						</Link>
					</li>
				</ul>
				<Button />
			</nav>
		</>
	);
}

export default Navbar;
