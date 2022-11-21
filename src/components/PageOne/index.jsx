import Slider from "react-slick";
import "./slick-theme.css";
import "./style.scss";

import imageOne from "../../assets/img/imageOne.png";
import imageTwo from "../../assets/img/imageTwo.png";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="page-container-page-two">
            <div id="page-two" className="content">
                <div className="content">
                    <Slider {...settings}>
                        <div id="page-one" className="slider">
                            <img src={imageOne} alt="" />
                        </div>
                        <div id="page-one" className="slider">
                            <img src={imageTwo} alt="" />
                        </div>
                        <div id="page-one" className="slider">
                            <img src={imageOne} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
