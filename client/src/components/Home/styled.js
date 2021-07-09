import styled from 'styled-components';

const StyledDiv = styled.div`
    border:1px solid black;
    width: 100%;
    height: 200px;
    background-color: #420D1F;
    color:white;

    .footer-container{
        margin:auto;
        display:grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(min(100%,18rem), 1fr));
        justify-content: space-between;
        h2{
            text-align:center;
        }

        .footer-nosotros{
            ul{
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
            h2{
                text-align:center;
            }
            ul{
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
            h2{
                text-align:center;
            }
            ul{
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
            h2{
                text-align:center;
            }
            ul{
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
    }
`

export default StyledDiv;