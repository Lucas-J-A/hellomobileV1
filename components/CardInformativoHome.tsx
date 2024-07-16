import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from '../src/styles/HeroPlanos.module.css';

function CardInformativoHome() {
    return (
        <Container fluid className={`mt-5 mb-5 ${styles.contOrange}`}>
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col className="col-12" sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Image src="img/planos-hello.png" alt="celular com mockup hello" className={styles.imgMockupHello} />
                    </Col>
                    <Col className={`col-12 text-white align-self-center ${styles.helloControle}`} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <p><span className={styles.spanControle}> HELLO CONTROLE</span></p>
                        <h3 className={styles.h3Controle}>
                            Planos sem pegadinha, com toda a tecnologia e controle que só a Hello pode te oferecer.
                        </h3>
                        <Col sm={12} md={10} lg={10} xl={10} className={`mt-3 ${styles.colControle}`}>
                            Sem burocracias para adesão, sem letras miúdas e com tantos benefícios que nem parece uma
                            operadora de telefonia móvel, a gente sabe.
                        </Col>
                        <Button variant="primary" as="a" href="#planos" className={styles.btnControle}>Ver Planos</Button>  {/* Criar um Botão que vai pro próprio site, um scroll para o componente */}

                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default CardInformativoHome;