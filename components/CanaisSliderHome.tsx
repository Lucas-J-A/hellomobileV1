import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import styles from '../src/styles/CanaisSliderHome.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CanaisSliderHome() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 768, // Para telas pequenas (SM)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992, // Para telas médias (MD)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container fluid className={styles.imgHomeContainer}>
                <Row>
                        
                        <Slider {...settings}>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>
                            <Image src="img/max-logo.png" alt="max" className={`px-2 ${styles.bwImage}`}></Image>

                        </Slider>

                     
                </Row>
        </Container>
    );
}

export default CanaisSliderHome;