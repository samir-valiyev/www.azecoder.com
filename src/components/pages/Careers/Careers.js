import React from "react";
import careers from "../../../images/career.jpg";
import Accordion from "../../Accordion/Accordion";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

const Careers = () => {
	return (
		<div className="careers">
			<div className="careers__main">
				<div className="careers__text-area">
					<h2>
						<span>Career at</span>
						<span>AzeCoder House</span>
					</h2>
					<Button name="JOIN US" />
				</div>
				<img src={careers} alt="careers" />
			</div>
			<div className="careers__job-offers">
				<h4>We are currently looking for</h4>
				<Accordion />
			</div>
			<div className="careers__send-cv">
				<h4>These aren’t the job offers you’re looking for?</h4>
				<p>Boost your career with us</p>
				<Link to="/contact-us">
					<Button name="SEND CV" />
				</Link>
			</div>
		</div>
	);
};

export default Careers;
