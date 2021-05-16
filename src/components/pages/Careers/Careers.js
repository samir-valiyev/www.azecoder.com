import React from "react";
import careers from "../../../images/career.jpg";
import Accordion from "../../Accordion/Accordion";
const Careers = () => {
	return (
		<div className="careers">
			<div className="careers__main">
				<h2>
					<span>Career at</span>
					<span>AzeCoder House</span>
				</h2>

				<p>
					We're always looking for the talents and professionals to join our winning team.
				</p>

				<img src={careers} alt="careers" />
			</div>
			<div className="careers__job-offers">
				<h4>We are currently looking for</h4>
				<Accordion />
			</div>
			<div className="careers__send-cv">
				<h4>These aren’t the job offers you’re looking for?</h4>
				<p>Boost your career with us</p>
				<button>SEND YOUR CV</button>
			</div>
		</div>
	);
};

export default Careers;
