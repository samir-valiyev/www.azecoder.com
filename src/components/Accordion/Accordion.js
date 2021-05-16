import React, { useState } from "react";
import { Data } from "./Data";

const Accordion = () => {
	const [selected, setSelected] = useState(null);
	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};
	return (
		<div>
			<div className="accordion">
				{Data.map((item, i) => (
					<div className="item">
						<div className="title" onClick={() => toggle(i)}>
							<h2>{item.question}</h2>
							<span>{selected === i ? "-" : "+"}</span>
						</div>
						<div className={selected === i ? "content show" : "content"}>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
