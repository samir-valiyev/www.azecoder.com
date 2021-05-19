import React from "react";
import inkVideo from "../../videos/ink.mp4";
const Video = () => {
	return (
		<div className="home-page__video">
			<video autoPlay loop muted>
				<source src={inkVideo} type="video/mp4" />
			</video>
		</div>
	);
};

export default Video;
