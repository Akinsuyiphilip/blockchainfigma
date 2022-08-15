import React from "react";
import AOS from "aos";
import Achievements from "./components/Achieverment/index";
import Community from "./components/Community/index";
import Group55 from "./components/Group55/index";
import Howto from "./components/Howto/index";
import Navhome from "./components/Navhome/index";
import Sponsors from "./components/Sponsors/index";

import "aos/dist/aos.css";
import Footer from "./components/Footer/index";

AOS.init();

const App = () => (
	<div className="App">
		<Navhome />
		<Achievements />
		<Sponsors />
		<Group55 />
		<Howto />
		<Community />
		<Footer />
	</div>
);

export default App;
