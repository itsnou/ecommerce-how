import {Carousel} from 'react-responsive-carousel';
import LOGO from '../../../assets/image/LOGO.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (  
        <Carousel 
        autoPlay="1500"
        dynamicHeight
        >
            <div>
                <img src={LOGO} />
            </div>
            <div>
                <img src={LOGO} />
            </div>
            <div>
                <img src={LOGO} />
            </div>
        </Carousel>
    );
}
 
export default Banner;