import React from "react";
import { membersData } from "./membersData";
function Member(props) {
	return (
		<>
			{membersData.map((member) => (
				<div className="team__member" key={member.id}>
					<img className="team__member__img" src={member.image} alt={member.name} />
					<h2 className="team__member__name">{member.name}</h2>
					<p className="team__member__profession">{member.profession}</p>

					<div className="team__member__socials">
						<a href={member.github} target="_blank" rel="noreferrer">
							<i class="fab fa-github-square"></i>
						</a>
						<a href={member.linkedin} target="_blank" rel="noreferrer">
							<i class="fab fa-linkedin"></i>
						</a>

						<a href={member.twitter} target="_blank" rel="noreferrer">
							<i class="fab fa-twitter-square"></i>
						</a>
						<a href={member.facebook} target="_blank" rel="noreferrer">
							<i class="fab fa-facebook-square"></i>
						</a>
					</div>
				</div>
			))}
		</>
	);
}

export default Member;
