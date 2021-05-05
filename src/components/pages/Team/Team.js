import React from "react";
import Member from "./Member";

function Team() {
	return (
		<div className="team">
			<h3>Team Members</h3>
			<div className="team__members">
				<Member />
			</div>
		</div>
	);
}

export default Team;
