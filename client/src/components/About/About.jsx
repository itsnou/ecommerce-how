import StyledDiv from './styled.js';
import LOGO from '../../assets/image/LOGO.png';
// import Footer from '../Footer/Footer



const About = () => {

  return (
    <StyledDiv>
      <div className='nav-logo'>
        <div className='title'>
          Sobre nosotros
        </div>
      <div>
        <p>Somos apasionados del vino como usted y queremos acercarle los mejores vinos a su paladar.
        Ofrecemos un servicio ágil, una muy buena selección de productos con una equilibrada relación en su precio. Suscribase a nuestro Newsletter par recibir promociones especiales y e información sobre nuevos productos.
        </p>
      </div>
      <div className='subtitle'>
          Ventas especiales para eventos
      </div>
      <div>
        <span>Tenemos precios especiales para eventos, fiestas, reuniones, somos vendedores directos, de la bodega a su casa. Consúltenos por compra mayorista.</span>
      </div>
        <img src={LOGO} alt='LOGO-HOW'/>
      </div>
      {/* <Footer/> */}
    </StyledDiv>
  )

}

export default About;