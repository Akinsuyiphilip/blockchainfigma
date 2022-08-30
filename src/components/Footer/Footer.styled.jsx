import styled from "styled-components";

export const Fmain = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4rem 5rem;
	margin-top: 18rem;
	background-color: #092326;
	background-image: url(../public/images/worldpic.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #072427;
`;
export const Fleftside = styled.div`
	padding-top: 4rem;
	border-right: 0.2rem solid #ffffff90;

	p {
		color: #80ab9e;
		font-size: 17px;
		padding-top: 4rem;
		padding-right: 10rem;
	}
	h4 {
		color: #f5fbf2;
		font-size: 24px;
	}
`;
export const Flogo = styled.img`
	height: 2rem;
`;
export const Fsocials = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		padding-right: 1rem;
	}
`;
export const Fright = styled.div`
	margin: 0 10rem 0 4rem;
	h2 {
		color: #f5fbf2;
		font-size: 32px;
	}

	hr {
		color: #f5fbf2;
		height: 0.1px;
	}
`;
export const Frinput = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	padding-bottom: 3rem;
`;
export const Finput = styled.input`
	padding: 0.7rem 7rem;
	outline: none;
	background: none;
	align-items: left;
	border: 0.1rem solid var(--color2);
	color: #00e3a5;
`;
export const Fbtn = styled.button`
	position: absolute;
	padding: 0.99rem 1rem;
	top: 0rem;
	left: 28rem;
	background-color: var(--color1);
	border: none;
	outline: none;
`;
export const Fdivide = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const Fsubs = styled.div`
	display: flex;
	flex-direction: column;

	h4 {
		font-size: 18px;
		color: #f5fbf2;
	}
`;
export const Flinks = styled.div`
	display: flex;
	flex-direction: column;
	a {
		text-decoration: none;
		color: #f5fbf2;
		padding-bottom: 1rem;
	}
`;
