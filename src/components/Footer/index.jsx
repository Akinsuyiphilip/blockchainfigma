import React from "react";

const Footer = () => (
	<div className="footer">
		<div className="leftside">
			<img src="./images/btech.png" alt="" />
			<p>
				A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industrys standard dummy text ever since the 1500s, When an
				unknown
			</p>
			<h4>Social Media</h4>

			<div className="socials">
				<img src="./images/facebook.png" alt="" />
				<img src="./images/twitter.png" alt="" />
				<img src="./images/instagram.png" alt="" />
			</div>
			<p>All rights reserved@2021</p>
		</div>
		<div className="rightside">
			<h2>Newslatter</h2>
			<div className="input">
				<input type="email" placeholder="Email Address" />
				<button type="submit">Submit</button>
			</div>

			<hr />

			<div className="letdivided">
				<div className="first">
					<h4 className="h4drink">About Us</h4>
					<div className="links">
						<a href="./">Whitepaper</a>
						<a href="./">Blog</a>
						<a href="./">Activity</a>
					</div>
				</div>

				<div className="second">
					<h4 className="h4drink">Support</h4>

					<div className="links">
						<a href="./">Help & Support</a>
						<a href="./">Community</a>
						<a href="./">Author Profile</a>
						<a href="./">Contact</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
