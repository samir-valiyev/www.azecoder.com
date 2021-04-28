import React from "react";
import Member from "./Member";
import Samir from "../../../images/team/samirvaliyev.jpg";
import Turan from "../../../images/team/turan.jpg";
import Hacimurad from "../../../images/team/hacimurad.jpg";
import Cavid from "../../../images/team/cavid.jpg";
import Fidan from "../../../images/team/fidan.jpg";
import Elvin from "../../../images/team/elvin.jpg";

function Team() {
	return (
		<div className="team">
			<h3>Team Members</h3>
			<div className="team__members">
				<Member
					img={Samir}
					name={"Samir Valiyev"}
					profession={"Front End Developer"}
					github={"https://github.com/samirvaliyev"}
					linkedin={"https://www.linkedin.com/in/samir-valiyev-a0b40832/"}
					twitter={"https://twitter.com/samirvaliyev89"}
					facebook={"https://www.facebook.com/samirvaliyev89/"}
				/>
				<Member
					img={Hacimurad}
					name={"Hacimurad Azizov"}
					profession={"Front End Developer"}
					github={"https://github.com/Hacimurad"}
					linkedin={"#"}
					twitter={"#"}
					facebook={"https://www.facebook.com/HacimuradAzizov"}
				/>
				<Member
					img={Fidan}
					name={"Fidan Nagiyeva"}
					profession={"Front End Developer"}
					github={"https://github.com/fynaghk"}
					linkedin={"#"}
					twitter={"#"}
					facebook={"#"}
				/>
				<Member
					img={Turan}
					name={"Turan Balayev"}
					profession={"MERN Stack Developer"}
					github={"https://github.com/turanbalayev"}
					linkedin={"#"}
					twitter={"#"}
					facebook={"https://www.facebook.com/turan.balayev.77"}
				/>
				<Member
					img={Cavid}
					name={"Cavid Aliyev"}
					profession={"MERN Stack Developer"}
					github={"https://github.com/cavid-aliyev"}
					linkedin={"#"}
					twitter={"#"}
					facebook={"#"}
				/>
				<Member
					img={Elvin}
					name={"Elvin Yeka"}
					profession={"Front End Developer"}
					github={"https://github.com/elvinyeka"}
					linkedin={"#"}
					twitter={"#"}
					facebook={"https://www.facebook.com/profile.php?id=100009894554730/"}
				/>
			</div>
		</div>
	);
}

export default Team;
