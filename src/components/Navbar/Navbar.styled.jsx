import styled from "styled-components";

export const Navbar1 = styled.nav`
	background-image: url(../public/images/image.png), url(../public/images/image.png);
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	margin: 0;
	padding-top: 2rem;
`;
export const Div1 = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	border-radius: 4rem;
	background-color: rgba(9, 37, 30, 0.3);
	padding: 2rem;
	align-items: center;
	margin: 0rem 3rem;
`;
export const Divv = styled.div`
	width: 30%;
`;
export const Divvv = styled.div`
	display: flex;
	position: relative;
`;
export const Divlink = styled.a`
	text-decoration: none;
	color: var(--textwhite);
	padding-left: 1.9rem;

	&.active {
		border-bottom: 0.1rem solid var(--color2);
	}
`;
export const Buttonav = styled.button`
	text-decoration: none;
	color: #f5fbf2;
	border: 0.1rem solid #00e3a5;
	padding: 1rem 1.3rem;
	background: none;
`;
