import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services/Services";
import Team from "./components/pages/Team/Team";
import Store from "./components/pages/Store";
import Careers from "./components/pages/Careers/Careers";
import About from "./components/pages/About/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/team" component={Team} />
				<Route path="/store" component={Store} />
				<Route path="/careers" component={Careers} />
				<Route path="/about" component={About} />
				<Route path="/contact-us" component={ContactUs} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
