import styled from 'styled-components';

const StyledPanel = styled.div`
grid-area: filter;
display:flex;       
background-color: #EDEDED;
margin:20px 20px;
padding:25px;
border-radius:6px;
position:fixed;
border-radius: 5px;
    border:solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.2);
  
`
const StyledMenu = styled.div`
    font-weight: bold;
    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
    color: #f6e5e9;
`

export { StyledPanel, StyledMenu };
