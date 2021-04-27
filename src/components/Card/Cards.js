import React from "react";
import Card from "./Card";

function Cards() {
	return (
		<div className="services__cards">
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Website Pro"}
				p={
					"We build professional responsive websites optimized for the most popular search engines."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"E-Commerce"}
				p={
					"Increase your sales with an incredible online store, full of features and functionality."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Mobile Apps"}
				p={
					"Follow the global trend and create your revolutionary mobile app built with the best technologies."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Web Application"}
				p={
					"We build applications for different purposes using technologies that allow you more security."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Digital Marketingo"}
				p={
					"We work to promote your brand in partnership with the best marketing platforms today."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Brand Creation"}
				p={
					"We create your brand thinking about your target audience using design techniques.."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
		</div>
	);
}

export default Cards;
