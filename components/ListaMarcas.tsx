import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from 'react-bootstrap';

const images = [
  {
    desktop: '/img/slideCanais/slideCanais.jpg',
    mobile: '/img/slideCanais/slideCanais.jpg',
  },

  // Adicione mais imagens conforme necessário
];


const BannerImage = styled.img`
  width: 100%;
  height: 132px;

  @media (max-width: 768px) {
    /* Ajuste para telas menores que 768px */
    width: 100%;
    height: 200px;
  }
`;

const ListaMarcas = () => {
  return (

    <Container fluid>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} className='p-0'>
            <BannerImage src={image.desktop} alt='' />
          </Col>
        ))}
      </Row>
    </Container>

  );
};

export default ListaMarcas;
 