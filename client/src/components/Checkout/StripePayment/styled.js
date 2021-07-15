import styled from 'styled-components';

const StyledDiv = styled.div`
    max-width:450px;
    margin:15px auto;
    border: 1px solid black;
    border-radius:7px;
    .form-container{
        padding:25px;
        .form-control{
            background-color: #F0F0F0;
            padding:10px;
            border-radius:3px;
        }
        button{
            margin-top:10px;
            background-color:#420D1F;
            color:white;
            font-weight:bold;
            width:100%;
        }
    }
`

export default StyledDiv;