import React from "react";
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
		</div>
	);
};

export default Footer;
