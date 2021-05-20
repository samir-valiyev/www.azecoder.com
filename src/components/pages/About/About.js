import React from "react";
import azecoderLogo from "../../../images/logo-page.jpg";

export default function About() {
	return (
		<div className="about">
			<div className="about__texts">
				<h2>About Us</h2>
				<p className="about__text">
					Quality Everything we do has the commitment of a well trained and motivated
					team. Experience Focused on results we seek to raise the level of our customers.
				</p>
				<div className="about__properties">
					<div className="about__property">
						<i className="fas fa-award"></i>
						<div className="about__property__text">
							<h4>Quality</h4>
							<p>
								Everything we do has the commitment of a well trained and motivated
								team.
							</p>
						</div>
					</div>
					<div className="about__property">
						<i className="fas fa-briefcase"></i>
						<div className="about__property__text">
							<h4>Experience</h4>
							<p>Focused on results we seek to raise the level of our customers.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="about__img">
				<img src={azecoderLogo} alt="AzeCoder Team Logo" />
			</div>
		</div>
	);
}
