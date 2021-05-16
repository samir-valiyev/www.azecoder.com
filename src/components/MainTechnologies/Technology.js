import React from "react";
import { data } from "./technologiesData";
const Technology = () => {
	return (
		<>
			{data.map((technology) => (
				<div className="main-technology" key={technology.id}>
					<img src={technology.image} alt={technology.name} />
				</div>
			))}
		</>
	);
};

export default Technology;
