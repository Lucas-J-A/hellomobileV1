import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from 'react-bootstrap';

const images = [
  {
    desktop: '/img/banner/bannerHelloHomeDesktop.jpg',
    mobile: '/img/banner/1-mb.webp',
  },
  // Adicione mais imagens conforme necessário
];

const FullWidthBanner = styled.div`
  width: 100%;
  margin-top: 120px; /* Margin de 120px do topo */
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    /* Ajuste para telas menores que 768px */
    margin-top: 70px;
    width: 100%;
    height: 200px;
  }
`;

const BannerHome = () => {
  return (
    <FullWidthBanner className='my-5'>
      <Container fluid>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={12} className='p-0'>
              <BannerImage src={image.desktop} alt='' />
            </Col>
          ))}
        </Row>
      </Container>
    </FullWidthBanner>
  );
};

export default BannerHome;
