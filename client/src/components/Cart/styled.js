import styled from "styled-components";

const StyledCartItems = styled.div`
  color:white;
  width: 95%;
  border-radius:8px;
  margin:auto;
  margin-top:20px;
  hr{
    width:90%;
  }

  .container-cards_products{
    background-color: #420D1F;
    border:1px solid black;
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    width:95%;
    margin:auto;
    margin-bottom:15px;
    border-radius:10px;
    .container-title{
      width:15em;
    }

    .container-btn {
      width:75%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      background-color:white;
      color:black;
      border-radius:7px;

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
      background-color: #420D1F;
      margin: 10px;
      border-radius: 3px;
      padding: 4px;
      color: white;
      border: none;
      font-weight: bold;
      width: 2em;
      height: 2em;
      font-weight: bold;

      :hover {
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
    
    .btn-delete{
      margin:auto;
      text-align:center;
      button{
        color:black;
        background-color: white;
        border:none;
        padding:4px;
        border-radius:3px;
        width: 2em;
        height: 2em;
        font-weight:bold;
        cursor:pointer
      }
    }

    .container-img_card{
      text-align: center;
      width:150px;
      background-color:white;
      border-radius: 7px;
      margin:auto;
      .img-card {
        height: 9em;
        width: 2em;
        object-fit: cover;
        object-position: center center;
      }
    }

  }
    .cart-total{
      padding-bottom:10px;
      margin-bottom:20px;
      background-color: #420D1F;
      border-radius:7px;
      .total {
        margin:0 auto;
        text-align:center;
        padding:0;
        h2{
          padding:0;
          margin:0;
        }
      }
    }
`;

export default StyledCartItems;
