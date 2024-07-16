import styles from '../src/styles/CardvideoCTA.module.css';
import { Container, Row, Col, Card, } from 'react-bootstrap';

function CardsVideoCTA() {
    return (
        <Container className={` align-items-center mx-auto text-black pt-3 mt-3 ${styles.cardWatchContainer}`}>
            <Row className="justify-content-center d-flex align-content-center">
                <Col className="col-6" sm={6} md={5} lg={3}>
                    <Card className={` d-flex align-items-center text-center ${styles.cardWatch}`}>
                        <Card.Img variant="top" className={styles.cardWatchIcon}
                            src="/img/hover-tap.gif"
                            alt="icone celular passando o dedo" />
                            <Card.Body>
                            <Card.Title as="h5">Acesse em até <b>8 dispositivos</b></Card.Title>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="col-6" sm={6} md={5} lg={3}>
                    <Card className={` d-flex align-items-center text-center ${styles.cardWatch}`}>
                        <Card.Img variant="top" className={styles.cardWatchIcon}
                            src="/img/dispositivos.gif"
                            alt="televisao mostrando conteudo" />
                            <Card.Body>
                            <Card.Title as="h5">Assista em <b>4 telas simultâneas</b></Card.Title>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="col-6"  sm={6} md={5} lg={3}>
                    <Card className={` d-flex align-items-center text-center ${styles.cardWatch}`}>
                        <Card.Img variant="top" className={styles.cardWatchIcon}
                            src="/img/conteudo.gif"
                            alt="relogio correndo" />
                            <Card.Body>
                            <Card.Title as="h5"><b>+11000 horas</b> de conteúdo</Card.Title>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="col-6" sm={6} md={5} lg={3}>
                    <Card className={` d-flex align-items-center text-center ${styles.cardWatch}`}>
                        <Card.Img variant="top" className={styles.cardWatchIcon}
                            src="/img/alacarte.gif"
                            alt="camera de cinema se mexendo" />
                            <Card.Body>
                            <Card.Title as="h5"> Os melhores <b>canais a la carte</b></Card.Title>
                            </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

    );
}

export default CardsVideoCTA;