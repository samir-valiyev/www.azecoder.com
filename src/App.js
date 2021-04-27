import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services/Services";
import Team from "./components/pages/Team";
import Blog from "./components/pages/Blog";
import Careers from "./components/pages/Careers";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Marketing from "./components/pages/Services/Marketing";
import Consulting from "./components/pages/Services/Consulting";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/team" component={Team} />
				<Route path="/blog" component={Blog} />
				<Route path="/careers" component={Careers} />
				<Route path="/about" component={About} />
				<Route path="/contact-us" component={ContactUs} />
				<Route path="/services/marketing" component={Marketing} />
				<Route path="/services/consulting" component={Consulting} />
			</Switch>
		</Router>
	);
}

export default App;
