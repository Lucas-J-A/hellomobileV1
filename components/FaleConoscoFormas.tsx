import Link from "next/link";
import styles from '../src/styles/FaleConosco.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Typography } from "@mui/material";
import { Whatsapp } from "react-bootstrap-icons";

function FaleConoscoFormas() {
    return (
        
        <Container fluid className={`mt-5 mb-5 ${styles.contDarkOrange}`}>
            <Container className="mx-auto align-items-center">
                <Row className=" mx-auto py-4 justify-content-between align-content-center">
                    <Col sm={6} md={3} className="col-12">
                    <Link href="https://api.whatsapp.com/send?phone=5511952813000" target="_blank">
                    <Image src="/img/ContactPage/WhatsappContact-1.png" alt="icone whatsapp 3d" className={styles.imgWpp} />
                    <Typography component={'p'} variant={'h4'} className={styles.tiposdecontatoTitulo}>Suporte ao Cliente</Typography>
                    <Typography component={'p'} className={styles.tiposdecontatoDescript}> Fale diretamente conosco, com um atendimento 100% humano.</Typography>
                    </Link>
                    </Col>
                    <Col sm={6} md={3} className="col-12">
                    <Image src="/img/ContactPage/SupportContact-2.png" alt="icone whatsapp 3d" className={styles.imgWpp} />
                    <Typography component={'p'} variant={'h4'} className={styles.tiposdecontatoTitulo}>Canal Comercial</Typography>
                    <Typography component={'p'} className={styles.tiposdecontatoDescript}> O nosso setor de vendas está aqui em horário comercial para tirar a sua dúvida. (em breve)</Typography>
                    </Col>
                    <Col sm={6} md={3} className="col-12">
                    <Image src="/img/ContactPage/Relogio-3.png" alt="icone whatsapp 3d" className={styles.imgWpp} />
                    <Typography component={'p'} variant={'h4'} className={styles.tiposdecontatoTitulo}>Suporte 24 horas</Typography>
                    <Typography component={'p'} className={styles.tiposdecontatoDescript}> Fale com o nosso suporte 24 horas por dia, com um atendimento 100% humano</Typography>
                    </Col>
                    <Col sm={6} md={3} className="col-12">
                    <Image src="/img/ContactPage/MailContact-4.png" alt="icone whatsapp 3d" className={styles.imgWpp} />
                    <Typography component={'p'} variant={'h4'} className={styles.tiposdecontatoTitulo}>E-mail</Typography>
                    <Typography component={'p'} className={styles.tiposdecontatoDescript}> Para contato corporativo, parcerias e outros assuntos, preencha
                        o campo de mensagem abaixo
                    </Typography>
                    </Col>
                    
                </Row>
            </Container>
        </Container>



    );
}

export default FaleConoscoFormas;