import styled from 'styled-components';

const StyledDiv = styled.div`
    width:95%;
    margin:auto;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%,25rem), 1fr));
    margin-top:10px;
    
    .container-card{
        display:grid;
        gird-template-rows: 1fr 1fr 1fr;
        border:1px solid black;
        width: 350px;
        height:350px;
        margin:auto;
        .card-image{
            text-align:center;
            width:350px;
            img{
                margin-top:6px;
                width:5rem;
                height:8rem;
            }
        }
        .card-name{
            font-size: 19px;
            text-align:center;
        }
        .card-price{
            text-align:center;
        }
        .card-buttonsDiv{
            display:flex;
            width:100%;
        }
    }
`

export default StyledDiv;