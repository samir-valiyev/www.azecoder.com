import React from "react";

function Card(props) {
	return (
		<div className="services__card">
			<i className={props.iTop}></i>
			<h4>{props.h4}</h4>
			<p>{props.p}</p>
			<i className={props.iBottom}></i>
		</div>
	);
}

export default Card;
