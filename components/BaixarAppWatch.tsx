import { Container, Row, Col, Image } from 'react-bootstrap'
import { Typography } from '@mui/material'
import Link from 'next/link';
import styles from '../src/styles/BaixarAppWatch.module.css'


function BaixarAppWatch() {
    return (
        <Container className={`mt-5 mx-auto align-items-center ${styles.containerAppWatch}`}>
            <Row className={`align-items-center justify-content-center ${styles.rowAppWatch}`}>
                <Col sm={12} md={5} lg={3} className={`col-12   ${styles.col1AppWatch}`}>
                    <Image src="/img/mao-appwatch.webp" alt="imagem mockup watch" className={`img-fluid ${styles.imgAppWatch}`} />
                </Col>
                <Col sm={12} md={6} lg={7} className={`pe-3 ${styles.col2AppWatch}`}>
                    <Typography component={'p'} variant={'h3'} className={styles.headingAppWatch} >Para curtir de onde e quando quiser.
                    </Typography>
                    <Typography component={'p'} className={`pt-1 mb-4 ${styles.textAppWatch}`}>Faça o download do aplicativo Watch e conheça melhor a nossa plataforma. <br />
                    Disponível para Android e IOS. Baixe já:<br /></Typography>
                    <Link href="https://apps.apple.com/br/app/watch-brasil/id1354998732">
                    <Image src="/img/appstore-watch.webp" alt="botão loja apple"  className={styles.btnWatchApp} />

                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=br.tv.watch.watchbrasil&hl=pt_BR&gl=US&pli=1">
                    <Image src="/img/playstore-watch.webp" alt="botão loja google" className={styles.btnWatchApp} />
                    </Link>
                </Col>
            </Row>

        </Container>


    );
}

export default BaixarAppWatch;