import React from "react";
import { Link } from "react-router-dom";
import AzeCoderTeam from "./AzeCoderTeam";
import Section from "./Section";
import Socials from "./Socials";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<AzeCoderTeam />
				<Section />
			</div>
			<div className="footer__line"></div>
			<Socials />
			<div className="footer__copyright">
				&#xa9; {new Date().getFullYear()} <Link to="/">AzeCoderTeam,</Link> All right
				reserved.
			</div>
		</div>
	);
};

export default Footer;
