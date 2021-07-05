import styled from 'styled-components';

const CardDiv = styled.div`
	border: solid grey;
	height: 20em;
	width: 13em;

	img {
		border: solid red;
		height: 11rem;
		width: 12.5rem;
	}

	.price {
		text-align: center;
		border: solid green;
		margin: 1px;
		margin-top: 0px;
	}

	.name {
		text-align: center;
		border: solid green;
		margin-top: 0px;
	}
	.buttonsDiv {
		border: solid red;
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	.cardBtn {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;

export default CardDiv;
