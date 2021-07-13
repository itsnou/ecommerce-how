import styled from 'styled-components';


const StyledDiv = styled.div`
    max-width: 1170px;
	margin:15px auto;
    .container-grap{
        border-radius: 10px;
        box-shadow: 0 0 20px 0 rgba(8, 8, 8, 0.3);
        >* {
            padding: 1em;
        }
        .edit-product{
            background: #ffffff;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            .edit-product_container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                .block {
                    grid-column: 1/3;
                }
                p{
                    margin:0;
                    padding:1em;
                }
                button {
                    width: 100%;
                    padding: .7em;
                    border: none;
                    background: none;
                    outline: 0;
                    border-bottom: 1px solid rgb(255, 0, 0);
                    color: black;
                    border-radius: 4px;
                    background: rgb(255, 0, 0);
                    border: 0;
                    text-transform: uppercase;
                    padding: 1em;
                    font-weight: bold;
                    &:hover {
                        background: #ff3c00;
                        color: #fff;
                        transition: background-color 1s ease-out;
                        outline: 0;
                    }
                    &:focus {
                        background: #e93a3a;
                        color: #fff;
                        transition: background-color 1s ease-out;
                        outline: 0;
                    }
                }
                input {
                    width: 100%;
                    padding: .7em;
                    border: none;
                    background: none;
                    outline: 0;
                    border-bottom: 1px solid red;
                    color: rgb(2, 2, 2);
                    border-radius: 4px;
                }
                textarea {
                    width: 100%;
                    padding: .7em;
                    border: none;
                    background: none;
                    outline: 0;
                    border-bottom: 1px solid red;
                    color: rgb(2, 2, 2);
                    border-radius: 4px;
                }
            }
        }
        .product-image{
            background: #c50000;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
`

export default StyledDiv;