import { Link } from "react-router-dom";

const Section = () => {
	return (
		<div className="footer__sections">
			<div className="footer__section">
				<h4>Menu</h4>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/services">
						<li>Services</li>
					</Link>
					<Link to="/team">
						<li>Team</li>
					</Link>
					<Link to="/store">
						<li>Store</li>
					</Link>
					<Link to="/careers">
						<li>Careers</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
				</ul>
			</div>
			<div className="footer__section">
				<h4>Services</h4>
				<ul>
					<Link to="/">
						<li>Web Development</li>
					</Link>
					<Link to="/">
						<li>E-Commerce</li>
					</Link>
					<Link to="/">
						<li>Mobile Development</li>
					</Link>
					<Link to="/">
						<li>Web Application</li>
					</Link>
					<Link to="/">
						<li>Product Design</li>
					</Link>
					<Link to="/">
						<li>Project Management</li>
					</Link>
				</ul>
			</div>
			<div className="footer__section">
				<h4>Industries</h4>
				<ul>
					<Link to="/">
						<li>Healthcare</li>
					</Link>
					<Link to="/">
						<li>Education</li>
					</Link>
					<Link to="/">
						<li>Logistics</li>
					</Link>
					<Link to="/">
						<li>Industry</li>
					</Link>
				</ul>
			</div>

			<div className="footer__section">
				<h4>Technologies</h4>
				<ul>
					<Link to="/">
						<li>Javascript</li>
					</Link>
					<Link to="/">
						<li>React.js</li>
					</Link>
					<Link to="/">
						<li>Vue.js</li>
					</Link>
					<Link to="/">
						<li>Angular.js</li>
					</Link>
					<Link to="/">
						<li>Node.js</li>
					</Link>
					<Link to="/">
						<li>React Native</li>
					</Link>
					<Link to="/">
						<li>Redux</li>
					</Link>
					<Link to="/">
						<li>MongoDB</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Section;
