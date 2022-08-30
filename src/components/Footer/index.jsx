import React from "react";
import {
	Fbtn,
	Fdivide,
	Finput,
	Fleftside,
	Flinks,
	Flogo,
	Fmain,
	Fright,
	Frinput,
	Fsocials,
	Fsubs,
} from "./Footer.styled";

const Footer = () => (
	<Fmain>
		<Fleftside>
			<Flogo src="./images/btech.png" alt="" />
			<p>
				A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industrys standard dummy text ever since the 1500s, When an
				unknown
			</p>
			<h4>Social Media</h4>

			<Fsocials className="socials">
				<img src="./images/facebook.png" alt="" />
				<img src="./images/twitter.png" alt="" />
				<img src="./images/instagram.png" alt="" />
			</Fsocials>
			<p>All rights reserved@2021</p>
		</Fleftside>
		<Fright>
			<h2>Newslatter</h2>
			<Frinput>
				<Finput type="email" placeholder="Email Address" />
				<Fbtn type="submit">Submit</Fbtn>
			</Frinput>

			<hr />

			<Fdivide>
				<Fsubs>
					<h4>About Us</h4>
					<Flinks>
						<a href="./">Whitepaper</a>
						<a href="./">Blog</a>
						<a href="./">Activity</a>
					</Flinks>
				</Fsubs>

				<Fsubs className="second">
					<h4 className="h4drink">Support</h4>

					<Flinks className="links">
						<a href="./">Help & Support</a>
						<a href="./">Community</a>
						<a href="./">Author Profile</a>
						<a href="./">Contact</a>
					</Flinks>
				</Fsubs>
			</Fdivide>
		</Fright>
	</Fmain>
);

export default Footer;
