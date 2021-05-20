import React from "react";
import ContactInformation from "../../ContactInformation/ContactInformation";
import Form from "../../Form/Form";
import Map from "../../Form/Map/Map";

const ContactUs = () => {
	return (
		<div className="contact-us">
			<h3>Contact Us</h3>
			<p>Any question or you want to send cv? Just write us a message!</p>
			<div className="contact-us__form-details">
				<Form />
				<ContactInformation />
			</div>
			<div className="contact-us__google-maps">
				<Map />
			</div>
		</div>
	);
};

export default ContactUs;
