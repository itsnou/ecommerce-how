import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 85%;
	margin: auto;
	margin-bottom: 15px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	.detail-img {
		margin: auto;
	}
	.detail-explain {
		background-color: #faddd3;
		text-align: center;
		border-radius: 0px 8px 8px 0px;
		.detail-varietal {
			width: 100%;
			h3 {
				display: inline;
			}
		}
		.detail-btn {
			input {
				margin-right: 5px;
				outline: none;
				border-radius: 4px;
				padding: 4px;
			}
			button {
				margin-right: 5px;
				outline: none;
				border-radius: 5px;
				border: none;
				background-color: #420d1f;
				font-weight: bold;
				color: white;
				padding: 5px;
			}
		}
	}
`;

export default StyledDiv;
