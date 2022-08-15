import React from "react";

const Navbar = () => (
	<>
		<div className="nav-box">
			<div className="navcurve">
				<div className="navimg">
					<img src="./images/btech.png" alt="" />
				</div>
				<div className="linkpage">
					<a href="./" className="activenav">
						About Us
					</a>
					<a href="./">Services</a>
					<a href="./">How it works</a>
					<a href="./">Community</a>
				</div>

				<div className="button">
					<a href="./">Join for Free</a>
				</div>
			</div>
		</div>
	</>
);

export default Navbar;
