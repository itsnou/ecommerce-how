import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #272727;
    height: 216px;
    
    .nav-logo{
        text-align: center;
        margin:auto 230px;
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
        width:100%;
        height:100px;
        .nav-list_usuario{
            display:flex;
            width:500px;
            list-style:none;
            padding:0;
            font-weight:bold;
            font-size:12px;
            li{
                padding:4px;
                margin-left:3px;
                a{
                    text-decoration:none;
                    color:white;
                    :hover{
                        /* color: red; */
                        color: #FADDD3;
                    }
                }
            }
            .nav-list_count{
                background-color:black;
                color:white;
                padding:4px;
                max-height:15px
            }
            .nav-list_price{
                color:white;
            }
        }
    }
    
`

export default StyledDiv;