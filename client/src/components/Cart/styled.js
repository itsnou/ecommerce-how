import styled from "styled-components";

const StyledCartItems = styled.div`
  color: #420d1f;
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  width:90%;
  margin:auto;

  .container-title{
    width:15em;
  }

  .container-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    button{
      margin:16px;
    }

    h2{
      margin:30px;
      span{
        display:flex;
        flex-direction:column;
      }
    }
    
  }

  .product-card_price{
    text-align:center;
  }
  
  .btn-item-cart {
    margin: 10px;
    background-color: #420d1f;
    border-radius: 3px;
    padding: 4px;
    color: white;
    border: none;
    font-weight: bold;
    width: 2em;
    height: 2em;
    :hover {
      background-color: white;
      color: #420d1f;
      cursor: pointer;
      border: solid 1px #420d1f;
    }
  }

  .container-img_card{
    width:10%;
    text-align: center;
    .img-card {
      height: 9em;
      width: 2em;
      object-fit: cover;
      object-position: center center;
    }
  }

  .total {
    color: #420d1f;
    margin-left: auto;
    margin-right: 0;
  }
`;

export default StyledCartItems;
