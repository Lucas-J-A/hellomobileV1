import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '../src/styles/HeroHelloHome.module.css'
import { Typography } from "@mui/material";
import Link from 'next/link';
import { Speedometer, Film, Router } from 'react-bootstrap-icons'

function HeroHelloHome() {
    return (
        <Container>
            <Row>
                <Col className="col-5">
                    <Image src="img/entretenimento.jpg" alt="canais watch" className={`img-fluid ${styles.imgHeroHome}`} />
                </Col>

                <Col className="Col-7 text-black">
                        <Typography component={'p'} variant={'h4'} className={styles.detalhesPlano} >Liberdade de se conectar em qualquer lugar </Typography>
                        <Typography component={'p'} className={`pt-1 ${styles.textPlano}`}>Os planos Hello Home oferecem conexão para qualquer ambiente. Em casa, no escritório, casa de praia, campo ou durante as suas viagens, a sua única preocupação deve ser escolher qual conteúdo assistir. <br />
                    <br />
                            Com o Hello Home, você tem: </Typography>
                            <Row>
                                <Col>
                                        <Speedometer className={styles.featureIcon} />
                                        <Typography variant="h3" component="h3" className="fs-2 text-body-emphasis">
                                            Featured title
                                        </Typography></Col>
                                <Col></Col>
                            </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default HeroHelloHome;