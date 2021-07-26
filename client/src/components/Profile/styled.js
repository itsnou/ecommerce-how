import styled from 'styled-components';

const StyledDiv = styled.div`
    width:75%;
    margin:15px auto;
    background-color: #420D1F;
    color:white;
    border-radius:8px;
    padding:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 10px 0px;
    hr{
        width:50%;
        margin:0;
    }

    .container-wishlist{
        .profile-wishlist{
            color:white;
            font-weight:bold;
            text-decoration:none;
            :hover{
                color:red;
            }
        }
    }

    .orders-ul{
        width:50%;
        margin:auto;
        .orders-links{
            text-decoration:none;
            .orders-li{
                background-color:white;
                color:black;
                list-style-type:none;
                width:100%;
                margin:auto;
                margin-bottom:10px;
                border-radius:8px;
                text-align:center;
                font-weight:bold;
                .orders-users{
                    display:flex;
                    justify-content:space-around;
                    h4{
                        padding:0;
                        margin:auto 0;
                    }
                }
            }
        }
    }
`

export default StyledDiv;