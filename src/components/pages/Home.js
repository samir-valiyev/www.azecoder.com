import React from "react";
import image from "../../images/hero-1.png";

function Home() {
	return (
		<div className="home main__container">
			<div className="main__texts-area">
				<h1>
					<span>Let's Build</span>
					<span>Something.</span>
				</h1>
				<p>
					<span>We work with the most innovation solutions on the </span>
					<span>market to help you get the best results</span>
				</p>
			</div>
			<div className="main__image">
				<img src={image} alt="main hero" />
			</div>
		</div>
	);
}

export default Home;
