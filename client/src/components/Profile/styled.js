import styled from "styled-components";

const StyledDiv = styled.div`
  width: 75%;
  margin: 15px auto;
  background-color: #420d1f;
  color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 10px 0px;
  hr {
    width: 50%;
    margin: 0;
  }
  .btn-unsubscribe {
    width: 100%;
    border: none;
    background: none;
    outline: 0;
    color: black;
    border-radius: 4px;
    background: white;
    box-shadow: rgba(255, 255, 255, 0.3) 0px 5px 15px;
    border: 0;
    text-transform: uppercase;
    padding: 1em;
    &:hover {
      background: #420d1f;
      color: #fff;
      transition: background-color 1.4s ease-out;
      outline: 0;
    }
    &:focus {
      background: #e93a3a;
      color: #fff;
      transition: background-color 1s ease-out;
      outline: 0;
    }
  }

  .orders-ul {
    .orders-links {
      text-decoration: none;
      .orders-li {
        background-color: white;
        color: black;
        list-style-type: none;
        width: 50%;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        .orders-users {
          display: flex;
          justify-content: space-around;
          h4 {
            padding: 0;
            margin: auto 0;
          }
        }
      }
    }
  }
`;

export default StyledDiv;
