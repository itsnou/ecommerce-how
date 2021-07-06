import styled from 'styled-components';

const StyledDiv = styled.div`
    width:95%;
    margin:auto;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%,25rem), 1fr));
`

export default StyledDiv;