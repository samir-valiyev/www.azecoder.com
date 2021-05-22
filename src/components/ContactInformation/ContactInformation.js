import React from "react";
import Socials from "../Footer/Socials";
import { Data } from "./Data";

const ContactInformation = () => {
	return (
		<div className="contact-information">
			<div className="cont-info__details">
				<h4>Contact Information</h4>
				<p>Fill up form and our Team will get back to you withing 24 hours.</p>
				<div className="cont-info__contacts">
					{Data.map((detail) => (
						<div className="cont-info__detail" key={detail.id}>
							<div className="cont-info__detail__i">
								<i className={detail.i}></i>
							</div>
							<div className="cont-info__detail__texts">
								<h5>{detail.h5}</h5>
								<p>{detail.p}</p>
							</div>
						</div>
					))}

					
					<div className="cont-info__contact">
						<i className="far fa-envelope"></i>
						<span>info@azecoder.com</span>
					</div>

					<Socials />
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
