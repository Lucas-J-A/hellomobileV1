// components/ResponsiveCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'react-bootstrap/Image';

const CarouselContainer = styled.div`
  .carousel .slide img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .carousel .slide img {
      /* height: 100vh; // Ajuste para mobile */
      width: auto;
    }
  }
`;

const images = [
  {
    desktop: '/img/banner/banner-hello-text.webp',
    mobile: '/img/banner/banner-hello-md.webp',
  },
  // {
  //   desktop: '/img/banner/2-dk.webp',
  //   mobile: '/img/banner/2-mb.webp',
  // }
  // Adicione mais imagens conforme necessário
];

const ResponsiveCarousel = () => {
  return (
    <CarouselContainer style={{ marginTop: "70px" }}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={false}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50} 
        interval={12000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <picture>
              <source media="(max-width: 768px)" srcSet={image.mobile} className='fluid'/>
              <source media="(min-width: 769px)" srcSet={image.desktop} className='fluid'/>
              <Image 
                fluid
                alt=""
                src={image.desktop} />
            </picture>
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default ResponsiveCarousel;
