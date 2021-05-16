import React from "react";
import Card from "./Card";

function Cards() {
	return (
		<div className="services__cards">
			<Card
				iTop={"fas fa-globe i-top"}
				h4={"Web Development"}
				p={
					"We build professional responsive websites optimized for the most popular search engines."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-shopping-bag i-top"}
				h4={"E-Commerce"}
				p={
					"Increase your sales with an incredible online store, full of features and functionality."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-mobile-alt i-top"}
				h4={"Mobile Development"}
				p={
					"We create fantastic mobile experiences bringing long-term advantages to your business."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-laptop-code i-top"}
				h4={"Web Application"}
				p={
					"We build applications for different purposes using technologies that allow you more security."
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-poll i-top"}
				h4={"Product Design"}
				p={"Get a unique UI/UX design based on your ideas and user preferences"}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
			<Card
				iTop={"fas fa-shield-alt i-top"}
				h4={"Project Management"}
				p={
					"We have many years of experience successfully managing projects ensuring that both budget estimates and the agreed timeline are met. "
				}
				iBottom={"fas fa-arrow-circle-right i-bottom"}
			/>
		</div>
	);
}

export default Cards;
