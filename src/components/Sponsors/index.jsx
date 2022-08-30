import React from "react";
import { Sphome, Elements, Spimg } from "./Sponsors.styled";

const Sponsors = () => (
	<Sphome data-aos="fade-down">
		<Elements>
			<Spimg src="./images/coinbase.png" alt="" />
			<Spimg src="./images/Blockchain.png" alt="" />
			<Spimg src="./images/binance.png" alt="" />
			<Spimg src="./images/bitmex.png" alt="" />
		</Elements>
	</Sphome>
);

export default Sponsors;
