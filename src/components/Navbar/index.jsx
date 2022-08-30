import React from "react";
import { Navbar1, Div1, Divv, Divvv, Divlink, Buttonav } from "./Navbar.styled";

const Navbar = () => (
	<>
		<Navbar1>
			<Div1>
				<Divv>
					<img src="./images/btech.png" alt="" />
				</Divv>
				<Divvv className="linkpage">
					<Divlink href="./" className="active">
						About Us
					</Divlink>
					<Divlink href="./">Services</Divlink>
					<Divlink href="./">How it works</Divlink>
					<Divlink href="./">Community</Divlink>
				</Divvv>

				<div className="button">
					<Buttonav href="./">Join for Free</Buttonav>
				</div>
			</Div1>
		</Navbar1>
	</>
);

export default Navbar;
