import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
	return (
		<div className="services__card">
			<i className={props.iTop}></i>
			<h4>{props.h4}</h4>
			<p>{props.p}</p>
			<Link to="/services">
				<i className={props.iBottom}></i>
			</Link>
		</div>
	);
}

export default Card;
