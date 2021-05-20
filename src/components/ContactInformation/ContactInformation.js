import React from "react";
import Socials from "../Footer/Socials";

const ContactInformation = () => {
	return (
		<div className="contact-information">
			<div className="cont-info__details">
				<h4>Contact Information</h4>
				<p>Fill up form and our Team will get back to you withing 24 hours.</p>
				<div className="cont-info__contacts">
					<div className="cont-info__contact">
						<i className="fab fa-whatsapp"></i>
						<span>+994507001407</span>
					</div>
					<div className="cont-info__contact">
						<i className="far fa-envelope"></i>
						<span>azecoderteam@gmail.com</span>
					</div>

					<Socials />
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
