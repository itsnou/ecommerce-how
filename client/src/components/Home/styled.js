import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;

    .banner{
        background-color:black;
        .carousel-root{
            border:none;
            img{
                height:25em;
            }
            .thumbs-wrapper{
                display:none;
            }
        }

    }

    .container-destacados{
        width: 90%;
        margin:auto;
        .title-destacados{
            hr {
            overflow: visible; /* For IE */
            height: 30px;
            border-style: solid;
            border-color: #420D1F;
            border-width: 1px 0 0 0;
            border-radius: 20px;
            :before { /* Not really supposed to work, but does */
                display: block;
                content: "";
                height: 30px;
                margin-top: -31px;
                border-style: solid;
                border-color: #420D1F;
                border-width: 0 0 1px 0;
                border-radius: 20px;
                }
            }
        }
        .productos-destacados{
            width:90%;
            display:grid;
            grid-template-columns: repeat(auto-fill, minmax(min(100%,22rem), 1fr));
            overflow:hidden;
            height:20em;
            margin:30px;
            .container-card{
                display:grid;
                grid-template-columns: 1fr 1fr;
                width:350px;
                height:15rem;
                margin:auto;
                border-radius: 8px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 20px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                .card-image{
                    text-align:center;
                    height:100%;
                    display:block;
                    overflow: hidden;
                    img{
                        margin-top:6px;
                        width:8rem;
                        height:13rem;
                        :hover{
                            transform: scale(1.5); 
                        }
                    }
                }
                .card-sales{
                    background-color:#FADDD3;
                    color:black;
                    border-radius: 0px 8px 8px 0px;
                    .card-name{
                        font-size: 19px;
                        text-align:center;
                        margin-bottom:2px;
                    }
                    .line-div{
                        width:50%;
                        padding:0;
                        margin:0 auto;
                    }
                    .card-price{
                        text-align:center;
                    }
                    .card-adds{
                        font-weight:bold;
                        text-align:center;
                    }
                    .card-buttonsDiv{
                        display:flex;
                        justify-content:center;
                        width:100%;
                        .card-buttons_disabled{
                                border:none;
                                background-color:gray;
                                font-weight:bold;
                                border-radius:3px;
                                padding:4px;
                                cursor: not-allowed;
                        }
                        .card-buttons_build{
                            background-color: #420D1F;
                            border-radius:3px;
                            padding:4px;
                            color:white;
                            border:none;
                            font-weight:bold;
                            :hover{
                                background-color:white;
                                color:#420D1F;
                                cursor:pointer;
                            }
                        
                            button{
                                text-align:center;
                                color:white;
                                margin:auto;
                                margin-bottom:2px;
                                cursor:pointer;
                                :hover{
                                    font-weight:bold;
                                    color:#420D1F;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    .footer{
        display:block;
        background-color: #420D1F;
        .footer-container{
            height:16em;
            color:white;
            font-size:12px;
            margin-left: 30px;
            display:grid;
            grid-template-columns: repeat(auto-fill, minmax(min(100%,18rem), 1fr));
            h2{
                margin-top: 20px;
            }

            li{
                line-height:25px;
            }

            .footer-nosotros{
                ul{
                    padding:0;
                    list-style:none;
                    a{
                        text-decoration:none;
                        color:white;
                        font-weight:bold;
                        :hover{
                            color:black;
                        }
                    }
                }
            }

            .footer-avisos_seteados{
                ul{
                    padding:0;
                    list-style:none;
                    a{
                        text-decoration:none;
                        color:white;
                        font-weight:bold;
                        :hover{
                            color:black;
                        }
                    }
                }
            }
            
            .footer-links_interes{
                ul{
                    padding:0;
                    list-style:none;
                    a{
                        text-decoration:none;
                        color:white;
                        font-weight:bold;
                        :hover{
                            color:black;
                        }
                    }
                }
            }

            .footer-followers{
                ul{
                    padding:0;
                    list-style:none;
                    display:grid;
                    grid-template-columns: repeat(auto-fill, minmax(min(100%,2rem), 1fr));
                    a{
                        img{
                            width:25px;
                        }
                        :hover {
                            -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                            animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                        }
                    }
                }
            }

            .footer-subscribe{
                ul{
                    list-style:none;
                    a{
                        text-decoration:none;
                        font-weight:bold;
                        color:white;
                        font-size:20px;
                    }
                }
            }
        }
    }

    .footer-derechos{
        margin:auto;
        text-align:center;
        font-weight:bold;
        background-color:black;
        color:white;
    }
`

export default StyledDiv;