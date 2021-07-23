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

    .nav-bienvenida{
        text-align:left;
        width: 50%;
        color:white;
        font-size: 18px;
        font-weight:bold;
        height: 10px;
        align-self: center;
        p{
            margin:10px;
            margin-top: 11px;
            padding:0;
            width:100%;
            margin-bottom: 0;
        }
    }
    hr{
      width:100%;
      margin:0;
      padding:0;
      height: 0;
      margin-top: 10px;
    }

    .nav-social{
        height: 10px;
        text-align:right;
        width: 50%;
        color:white;
        font-size: 18px;
        font-weight:bold;
        align-self: center;
        p{
            margin:10px;
            padding:0;
            width:50%;
            margin-bottom: 0;

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
                    margin-right:10px;
                    :hover{
                        /* color: red; */
                        color: #900C3E;
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