import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
					<img src={logo} className="navbar__logo__azecoder" alt="AzeCoder Logo" />
				</Link>
				<div className="navbar__menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "navbar__nav-menu active" : "navbar__nav-menu"}>
					<li className="navbar__nav-item">
						<Link to="/" className="navbar__nav-links" onClick={closeMobileMenu}>
							HOME
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link
							to="/services"
							className="navbar__nav-links"
							onClick={closeMobileMenu}>
							SERVICES
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link to="/team" className="navbar__nav-links" onClick={closeMobileMenu}>
							TEAM
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link to="/blog" className="navbar__nav-links" onClick={closeMobileMenu}>
							BLOG
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link to="/careers" className="navbar__nav-links" onClick={closeMobileMenu}>
							CAREERS
						</Link>
					</li>
					<li className="navbar__nav-item">
						<Link to="/about" className="navbar__nav-links" onClick={closeMobileMenu}>
							ABOUT
						</Link>
					</li>

					<li>
						<Link
							to="/contact-us"
							className="navbar__nav-links__mobile"
							onClick={closeMobileMenu}>
							CONTACT US
						</Link>
					</li>
				</ul>

				<Button />
			</nav>
		</>
	);
}

export default Navbar;
