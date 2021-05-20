import React from "react";
import image from "../../images/hero-1.png";
import MainTechnologies from "../MainTechnologies/MainTechnologies";
import Video from "../Video/Video";
import Services from "./Services/Services";

function Home() {
	return (
		<>
			<div className="home main__container">
				<div className="main__texts-area">
					<div>
						<Video />
					</div>
					<h1>Let's Build Something.</h1>
					<p>
						<span>We work with the most innovation solutions on the </span>
						<span>market to help you get the best results</span>
					</p>
				</div>
				<div className="main__image">
					<img src={image} alt="main hero" />
				</div>
			</div>

			<div>
				<Services />
			</div>

			<div>
				<MainTechnologies />
			</div>
		</>
	);
}

export default Home;
