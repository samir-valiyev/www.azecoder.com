import React from "react";

function Member(props) {
	return (
		<div className="team__member">
			<img className="team__member__img" src={props.img} alt="Samir Valiyev" />
			<h2 className="team__member__name">{props.name}</h2>
			<p className="team__member__profession">{props.profession}</p>

			<div className="team__member__socials">
				<a href={props.github} target="_blank" rel="noreferrer">
					<i class="fab fa-github-square"></i>
				</a>
				<a href={props.linkedin} target="_blank" rel="noreferrer">
					<i class="fab fa-linkedin"></i>
				</a>

				<a href={props.twitter} target="_blank" rel="noreferrer">
					<i class="fab fa-twitter-square"></i>
				</a>
				<a href={props.facebook} target="_blank" rel="noreferrer">
					<i class="fab fa-facebook-square"></i>
				</a>
			</div>
		</div>
	);
}

export default Member;
