import React from "react";
import { Link } from "react-router-dom";
const AzeCoderTeam = () => {
	return (
		<Link to="/">
			<div className="azecoderteam">
				<span className="azecoderteam__white">AZE</span>
				<span className="azecoderteam__color">CODER</span>
				<span className="azecoderteam__white">TEAM</span>
			</div>
		</Link>
	);
};

export default AzeCoderTeam;
