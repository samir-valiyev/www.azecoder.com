import React, { useState } from "react";
import { Data } from "./Data";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
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
							<span>
								{selected === i ? (
									<i class="fas fa-minus"></i>
								) : (
									<i class="fas fa-plus"></i>
								)}
							</span>
						</div>
						<div className={selected === i ? "content show" : "content"}>
							{item.answer}
							<div className="vacancy__buttons">
								<span>
									<Button name="Share" />
								</span>
								<span>
									<Link to="/contact-us">
										<Button name="Apply" />
									</Link>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
