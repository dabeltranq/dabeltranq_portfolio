import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SC1 from './media/SC1.png';
import SC2 from './media/SC2.png';
import SC3 from './media/SC3.png';

export default function Carousel() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={SC1} alt="Slide 1" style={{ width: '100%' }} />
            </div>
            <div>
                <img src={SC2} alt="Slide 2" style={{ width: '100%' }} />
            </div>
            <div>
                <img src={SC3} alt="Slide 3" style={{ width: '100%' }} />
            </div>
        </Slider>
    );
}