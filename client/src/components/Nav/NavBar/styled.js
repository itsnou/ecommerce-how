import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #420D1F;
    height:35px;
    .navbar-fully{
        display:flex;
        justify-content:space-around;
        margin:auto;
        width:100%;
        height:100%;
        .navbar-container{
            margin:auto;
            ul{
                display:flex;
                color:#BEBDBD;
                margin:0;
                align-items:center;
                font-weight:bold;
                li{
                    list-style:none;
                    margin-left:15px;
                    :hover{
                        color:gray;
                        cursor:pointer;
                    }
                }
            }
        }
        .navbar-input{
            margin:auto;
            input{
                border-radius: 6px;
                outline:none;
                width:300px;
                margin-right:30px;
                height:24px;
            }
        }
    }
`

export default StyledDiv;