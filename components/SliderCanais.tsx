import { Container, Image, } from "react-bootstrap";
import Slider from "react-slick";
import React from "react";

function SliderCanais() {
    const settings = {
        rows: 3,
        dots: false,
        slidesToShow: 1,
        slidesPerRow: 1,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    }

    return (
        <Container id="SliderCanais" fluid className="slider-container">
            <Slider {...settings}>
                <Image src="" alt="" className="img-fluid" />
                <Image id="rowDelay" src="" alt="" className="img-fluid" />
                <Image src="" alt="" className="img-fluid" />


            </Slider>

        </Container>

    );
}

export default SliderCanais;