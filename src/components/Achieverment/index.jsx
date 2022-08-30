import React from "react";
import { Achiever, Textach, Padarea } from "./Achievement.styled";

const Achievements = () => (
	<>
		<Achiever data-aos="fade-down">
			<Textach>
				<p>Achievements</p>
				<h2>Full Decentralised and Currency Security</h2>
				<section>
					<Padarea>
						<h2> 1M+</h2>
						<p>Happy Users</p>
					</Padarea>
					<Padarea>
						<h2> 200K+</h2>
						<p>Community Assets</p>
					</Padarea>
					<Padarea>
						<h2>20K+</h2>
						<p>Build Community</p>
					</Padarea>
				</section>
			</Textach>

			<div className="worldimg">
				<img src="/images/worldpic.png" alt="" />
			</div>
		</Achiever>
	</>
);

export default Achievements;
