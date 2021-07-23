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
        z-index: 999;
    }
    .content{
        width:90%;
        margin: 20px auto;
        background-color:gray;
        padding: 20px 0px;
        border-radius:8px;
        box-shadow: 0 0 5px 0 ;
        background: inherit;
        backdrop-filter: blur(10px);
    }
`
const StyledMenu = styled.div`
    font-weight: bold;
    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
    color: #f6e5e9;
`

const StyledProduct = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
    justify-content:space-between;
    margin: 0px 20px 5px 20px;
    padding: 5px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 8px;
    color:white;
    border:solid rgba(0, 0, 0, 0.1);
    font-weight:bold;
    input {
        width:100px;
        border-radius: 5px;
        margin-left: 10px;
    }
    .name {
        width: 300px;
    }
    .price {
        width:80px;
    }
    .vineyard{
        width:150px;
    }
    a{
        text-decoration:none;
        color:white;
        font-weight:bold;
        :hover{
            color:red;
        }
        button{
            background-color:black;
            color:white;
            :hover{
                background-color:white;
                color:black;
            }
        }
    }
`

const StyledUsers = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
    justify-content:space-between;
    margin: 0px 20px 0px 20px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 2px;
    margin:auto;
    margin-bottom:15px;
    color:white;
    width:85%;
    padding:10px;
    border-radius:8px;
    .link-name{
        font-weight:bold;
        color:white;
        text-underline:1px;
        .name {
            width: 300px;
        }
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
    .active{
        font-weight:bold;
        background-color:white;
        :hover{
            background-color:orange;
        }
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
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .btn {
    height: 31px;
    background: #EDEDED;
    color: #214252;

  }
`
const StyledOrders = styled.div`
    display:flex;
    justify-content:space-between;
    text-align: center;
    align-items: center;
    margin: 0px 20px 10px 20px;
    padding: 5px;
    background-color: #420D1F;
    list-style: none;
    border-radius: 8px;
    color:white;
    font-weight:bold;
    height:40px;
    .link-user{
        text-decoration: none;
        color:white;
        font-weight:bold;
        .name {
            width: 200px;
        }
    }
    .email {
        width:150px;
    }
    .cant {
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width:350px;
        p{
            padding:0;
            margin:0;
        }
    }
    .complete{
        width:150px;
        border-radius:8px;
        padding:5px;
        background-color: #5D8233;
        color:black;
    }
    .process{
        width:150px;
        border-radius:8px;
        padding:5px;
        background-color: #284E78;
        color:black;
    }
    .sent{
        width:150px;
        border-radius:8px;
        padding:5px;
        background-color: #ECD662;
        color:black;
    }
    .cancel{
        width:150px;
        border-radius:8px;
        padding:5px;
        background-color: #8D2828;
        color:black;
    }
    .date{
        margin-right:1rem;
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
    background-color: #420D1F;
    border-radius: 8px;
    color:white;
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
    .btn-admin{
        margin: 150px 10px 0px 10px;
        background-color:orange;
        font-weight:bold;
        :hover{
            background-color: white;
        }
    }
    .btn-block{
        margin: 150px 10px 0px 10px;
        background-color:red;
        font-weight:bold;
    }
    .btn-recoverypsw{
        margin: 150px 10px 0px 10px;
        background-color:#E9EEF9;
        color:black;
        font-weight:bold;
    }
    .name{
        font-size: 30px;
        font-weight:bold;
        margin: 0px 10px 0px 10px;
}
`
const StyledOrderDetail = styled.div`
    list-style:none;
    background-color: #420D1F;
    border-radius: 8px;
    border:solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.1);
    color:white;
    font-weight:bold;
    text-align:center;
    padding:10px;
    width:75%;
    margin:auto;
    margin-top:15px;
    .name{
        font-size: 30px;
        font-weight:bold;
        margin: 0px 10px 0px 10px;
    }
    
    .btn-prep{
        color:black;
        font-weight:bold;
        background-color:#284E78;
        border:none;
    }

    .btn-sent{
        color:black;
        font-weight:bold;
        background-color:#ECD662;
        border:none;
    }

    .btn-done{
        color:black;
        font-weight:bold;
        background-color:#5D8233;
        border:none;
    }

    .btn-cancel{
        color:black;
        font-weight:bold;
        background-color:#8D2828;
        border:none;
    }
`

const StyledAddProduct = styled.div`
    width: 75%;
    margin:auto;
    background: #420D1F;
    border-radius:8px;
    color:white;
    font-weight:bold;
    .add-product{
        display: grid;
        grid-template-columns: 1fr 1fr;
        label{
            margin-top:10px;
            display:flex;
            align-items:center;
            flex-direction:column;
            h4{
                padding:0;
                margin-right:5px;
                font-size:18px;
            }
            input{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-width:bold;
                height:10px;
            }
            select{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-width:bold;
            }
            textarea{
                width: 55%;
                padding: .7em;
                border: none;
                background: white;
                outline: none;
                color: black;
                border-radius: 4px;
                font-width:bold;
                height:10px;
            }
        }
        .block{
            background: orange;
            height:50px;
            color:white;
            font-weight:bold;
            width:85%;
            margin:auto;
            margin-top:20px;
        }
        a{
            text-decoration:none;
            .volver{
                color:white;
                background-color:black;
                margin-bottom:5px;
                margin-left:5px;
            }
        }
    }
`

export {
    StyledPanel,
    StyledMenu,
    StyledProduct,
    StyledSearch,
    StyledUsers,
    StyledUserDetail,
    StyledOrders,
    StyledOrderDetail,
    StyledAddProduct
};
