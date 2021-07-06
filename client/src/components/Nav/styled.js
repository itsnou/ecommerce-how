import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #272727;
    height: 216px;
    margin-bottom:10px;
    
    .nav-logo{
        text-align: center;
        margin:auto;
        img{
            width:400px;
        }
    }

    .nav-social{
        text-align:right;
        width: 90%;
        color:white;
        font-size: 18px;
        font-weight:bold;
        p{
            padding:0;
            margin:10px;
        }
        a{
            text-decoration:none;
            color:gray;
            font-size:18px;
        }
    }

    .nav-user{
        .nav-list_usuario{
            display:flex;
            list-style:none;
            padding:0;
            font-weight:bold;
            li{
                padding:4px;
                margin-left:10px;
                a{
                    text-decoration:none;
                    color:white;
                    :hover{
                        color: red;
                    }
                }
            }
            .nav-list-count{
                background-color:black;
                color:white;
                padding:4px;
            }
            .nav-list_price{
                color:white;
            }
        }
    }
    
`

export default StyledDiv;