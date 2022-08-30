import React from "react";
import {
	Hconsulting,
	Himage,
	Hlink,
	Howtodiv,
	Hresearch,
	Htextlogo,
	Htextlogor,
	Htextr,
	Htexts,
} from "./Howto.styled";

const Howto = () => (
	<>
		<Howtodiv data-aos="fade-down">
			<h2>How Do We Work Our System and Our Journey</h2>
			<Hconsulting data-aos="fade-left">
				<Htextlogo>
					<img src="./images/01.png" alt="" />
					<Htexts>
						<h3>Consulting</h3>
						<p>
							A Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry`&#39;`s standard dummy text
							ever since the 1500s,{" "}
						</p>
					</Htexts>
				</Htextlogo>
				<Himage>
					<img src="./images/constar.png" alt="" />
				</Himage>
			</Hconsulting>

			<Hresearch data-aos="fade-right">
				<Htextlogor>
					<img src="./images/02.png" alt="" />
					<Htextr>
						<h3>Research & Complaince</h3>
						<p>
							A Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry`&#39;`s standard dummy text
							ever since the 1500s, when an unknown
						</p>
					</Htextr>
				</Htextlogor>

				<Himage>
					<img src="./images/carbonchart.png" alt="" />
				</Himage>
			</Hresearch>

			<Hconsulting data-aos="fade-left">
				<Htextlogo>
					<img src="./images/03.png" alt="" />
					<Htexts>
						<h3>Technology</h3>
						<p>
							A Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry`&#39;`s standard dummy text
							ever since the 1500s, when an unknown{" "}
						</p>
					</Htexts>
				</Htextlogo>

				<Himage className="lsimg">
					<img src="./images/technology.png" alt="" />
				</Himage>
			</Hconsulting>

			<Hlink data-aos="fade-down">
				<a href="./">Let’s See More</a>
			</Hlink>
		</Howtodiv>
	</>
);

export default Howto;
