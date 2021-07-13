import styled from 'styled-components';

const StyledPanel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.panel{
    display:flex;
justify-content: space-between;
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
const StyledUsers = styled.div`
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
    .email {
        width:500px;
    }
    .status{
        width:100px;
    }
    .btn{
    visibility:hidden;
    }
    
`
const StyledSearch = styled.div`
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    z-index: 999;
  input {
    text-align: center;
    font-size: 20px;
    float: left;
    background: #fff;
    height: 30px;
  }
  .btn {
    height: 31px;
    border-left: none;
    background: #EDEDED;
    color: #214252;
  }
`
const StyledUserDetail = styled.div`

display: flex;
justify-content:center;
align-items:center;
height: 60%;
width: 50%;
position: absolute; 
margin: 60px 25% 0px 25%;
text-align:center;
list-style:none;
background-color: #EDEDED;
border-radius: 8px;
border:solid rgba(0, 0, 0, 0.1);
box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
.btn{
    margin: 150px 10px 0px 10px;
}
.name{
    font-size: 30px;
    font-weight:bold;
    margin: 0px 10px 0px 10px;
}
`
export { StyledPanel, StyledMenu, StyledProduct, StyledSearch, StyledUsers, StyledUserDetail };