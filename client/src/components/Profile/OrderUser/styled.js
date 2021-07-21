import styled from 'styled-components';

const StyledDiv = styled.div`
    margin:15px auto;
    width: 75%;
    border-radius:8px;
    background-color: #420D1F;
    color:white;
    padding:10px;
    .intro-orders{
        display:flex;
        justify-content:space-around;
        img{
            width: 200px;
        }
    }
    .details-orders{
        list-style:none;
        line-height:25px;
        font-weight:bold;
        background-color:white;
        color:black;
        border-radius:8px;
        .last-mount{
            margin:auto;
            text-align:center;
        }
    }
`

export default StyledDiv;