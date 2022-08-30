import styled from "styled-components";

export const Howtodiv = styled.div`
	background: #0a1619;
	margin: 17rem 0;
	padding: 5rem 0;

	h2 {
		text-align: center;
		color: var(--textwhite);
	}
`;

export const Hconsulting = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	text-align: left;
	margin: 5rem 0 0 12rem;
	padding: 0.5rem 0 1rem 6rem;
	background-image: url(../public/images/consubg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #00dd9b1b;
	border-top-left-radius: 10rem;
	border-bottom-left-radius: 10rem;
`;
export const Htextlogo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	img {
		padding-top: 2.3rem;
	}
`;
export const Htexts = styled.div`
	padding: 0 5rem 0 1.2rem;
	h3 {
		color: var(--textwhite);
		font-size: 24px;
	}

	p {
		color: #80ab9e;
		font-size: 18px;
	}
`;
export const Himage = styled.div`
	padding-right: 14rem;
`;

// Research //

export const Hresearch = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;
	text-align: right;
	margin: 5rem 10rem 0 0;
	padding: 1rem 0 1rem 6rem;
	background-image: url(../public/images/consubg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #00dd9b1b;
	border-top-right-radius: 10rem;
	border-bottom-right-radius: 10rem;
`;
export const Htextlogor = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: center;
	padding-right: 4rem;

	img {
		padding-top: 2.3rem;
	}
`;
export const Htextr = styled.div`
	padding: 0 1.2rem 0 5rem;
	h3 {
		color: var(--textwhite);
		font-size: 24px;
	}

	p {
		color: #80ab9e;
		font-size: 18px;
	}
`;

// link //

export const Hlink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 7rem 0 0;

	a {
		text-decoration: none;
		color: var(--textgrey);
		padding: 1.2rem 5.3rem;
		border: 0.2rem solid var(--color2);
	}
`;
