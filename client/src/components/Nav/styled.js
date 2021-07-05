import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #272727;
    height: 250px;
    
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
        font-size: 22px;
        p{
            padding:0;
            margin:10px;
        }
        a{
            text-decoration:none;
            color:gray;
            font-size:30px;
        }
    }

    .nav-user{
        .nav-list_usuario{
            display:flex;
            list-style:none;
            padding:0;
            li{
                margin-left:10px;
                a{
                    text-decoration:none;
                    color:white;
                }
            }
        }
    }
`

export default StyledDiv;