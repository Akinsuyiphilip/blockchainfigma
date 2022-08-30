import React from "react";
import {
	Celements,
	Chome,
	Cimagearrow,
	Cprofile,
	Cright,
	Ctexts,
	Cuserbox,
} from "./Community.styled";

const Community = () => (
	<>
		<Chome data-aos="fade-right">
			<Celements>
				<h2>Our community with User reviews</h2>
				<Cuserbox>
					<Cimagearrow src="./images/leftarrow.png" alt="" className="leftarrow" />
					<div>
						<Cprofile src="./images/user.png" alt="" />
					</div>

					<Ctexts>
						<p>
							A Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry`&#39;`s standard. dummy,text
							ever since the 1500s, when an unknown
							<br />
							<br />
							-Dake M. Chile, Business Owner of Bellie
						</p>
					</Ctexts>
					<Cright src="/images/rightarrow.png" alt="" className="rightarrow" />
				</Cuserbox>
			</Celements>
		</Chome>
	</>
);

export default Community;
