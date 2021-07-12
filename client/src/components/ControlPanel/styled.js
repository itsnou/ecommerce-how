import styled from 'styled-components';

const StyledPanel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.panel{
    display:flex;
justify-content: space-between;
width:500px;
background-color: #EDEDED;
margin: 5px;
padding:5px 15px 5px 15px;
border-radius: 5px;
    border:solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
}
.content{
    width:100%;
    margin-top: 20px;
}
`
const StyledMenu = styled.div`
    font-weight: bold;
    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
    color: #f6e5e9;
`
const StyledProduct = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0px 20px 0px 20px;
    padding: 5px;
    background-color: #EDEDED;
    list-style: none;
    border-radius: 2px;
    border:solid rgba(0, 0, 0, 0.1);
    .name {
        width: 300px;
    }
    .price {
        width:80px;
    }
    .vineyard{
        width:200px;
    }

`

export { StyledPanel, StyledMenu, StyledProduct };
