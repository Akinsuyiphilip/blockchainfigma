import React from "react";
import { Homebtn, Homediv, Homeh1, Homeh3, Homeimg, Homelay } from "./Home.styled";

const Home = () => (
	<>
		<Homediv data-aos="fade-right" data-aos-duration="1500">
			<Homelay className="lay">
				<div>
					<Homeh3>Build the Future with </Homeh3>
					<Homeh1>Blockchain technology and Currency</Homeh1>
				</div>

				<Homeimg src="./images/Citypeg.png" alt="" />
			</Homelay>

			<Homebtn href="./">Get Whitepaper</Homebtn>
		</Homediv>
	</>
);

export default Home;
