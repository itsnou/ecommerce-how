import React from "react";
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import Destacados from './Destacados/Destacados';
import StyledDiv from './styled.js';


const Home = () => {
  return (
    <StyledDiv>
      <div className='banner'>
        <Banner/>
      </div>
      <div>
        <Destacados/>
      </div>
      <div>
        <Footer/>
      </div>
    </StyledDiv>
  );
};

export default Home;
