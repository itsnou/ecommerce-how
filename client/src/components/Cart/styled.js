import styled from "styled-components";

const StyledCartItems = styled.div`
  color: #420d1f;
  padding: 1em 0;
  display: flex;
  align-items: stretch;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;

  .container-btn {
    display: flex;
    align-items: center;
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

  .img-card {
    height: 9em;
    width: 3em;
    object-fit: cover;
    object-position: center center;
  }
  .total {
    color: #420d1f;
    margin-left: auto;
    margin-right: 0;
  }
`;

export default StyledCartItems;
