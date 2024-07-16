import { Button, Container, Row, Col, Image, } from 'react-bootstrap';
import React, { useRef, useState, lazy } from 'react';
import styles from '../src/styles/VideoCTA.module.css'
import CardsVideoCTA from '../components/CardsVideoCTA'





const VideoCTA  = () =>  {

    let videoRef = useRef<any>(null);
    let [isMuted, setIsMuted] = useState(true);

    const handleMouseEnter = () => {
        setIsMuted(false); // Ativa o som quando o mouse passa sobre o vídeo
      };
    
      const toggleMute = () => {
        setIsMuted(!isMuted); // Alterna o estado de mudo quando clicado
      };
    
      const handleVideoEnd = () => {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
            setIsMuted(true); // O vídeo começa mudo após o término
          }
        }, 10000); // Delay de 10 segundos
      };


    return ( 
        <>
        <Container className={`align-items-center mx-auto ${styles.ctaContainer}`}>
            <Row className="justify-content-center text-center text-black">
                <Col className={styles.quemEhello} sm={12} md={10} lg={8}>
                <p className="mt-5 mb-1">QUEM É A HELLO?</p>
                <h1>A primeira operadora móvel do Brasil
                com streaming.</h1>
                </Col>
            </Row>
            <Container className={`mt-3 p-3 align-items-center ${styles.videoContainer}`}>
                <Row className="d-flex justify-content-between mx-2 ">
                    <Col sm={12} md={5} lg={4} xl={3} xxl={3}  className={` col-12 align-items-start text-white ${styles.infoVideo}`}>
                    <Image
                        className={styles.infoStreamwatch}
                        src="/img/streaming-by-watch-white.png"
                        alt="logo streaming by watch" />
                        
                        <h4 className="pt-4">Seus programas preferidos em qualquer dispositivo.</h4>
                        <Button variant="primary" as="a" href="#planos" className={styles.ctaWatchBTN}>Ver Planos</Button>  {/* Criar um Botão que vai pro próprio site, um scroll para o componente */}
                        </Col>
                        {/* <Row className="pt-2">
                            <Col className="col-12" md={6}>
                                <Row className={` d-flex align-items-center ms-1 mb-2`}>                            
                            <Image
                            className={styles.watchIcon}
                            src="/img/dispositivos.gif"
                            alt="icone celular passando o dedo" />
                           Acesse em até 8 dispositivos
                                </Row> */}

                            {/* <Row className={` d-flex align-items-center ms-1 mb-2`}>                            
                            <Image
                            className={styles.watchIcon}
                            src="/img/hover-tap.gif"
                            alt="televisao mostrando conteudo" />
                           Até 4 telas simultâneas
                                </Row> */}
                            
                            {/* <Col className="col-12" md={6}>
                        <Row className={` d-flex align-items-center ms-1 mb-2`}>                            
                            <Image
                            className={styles.watchIcon}
                            src="/img/conteudo.gif"
                            alt="relogio correndo" />
                           +11000 horas de conteúdo
                        </Row>
                        <Row className={` d-flex align-items-center ms-1 mb-2`}>                            
                            <Image
                            className={styles.watchIcon}
                            src="/img/alacarte.gif"
                            alt="camera de cinema se mexendo" />
                           Os melhores canais a la carte
                        </Row>
                            </Col> */}
                            {/* <Row className={styles.ctaSlider}>
                                <Carousel indicators={false}>
                                <Carousel.Item>
                                    <Image src="/img/alacarte/logocombate.png" alt="logo canal combate" className={styles.logoSlideWatch} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/img/alacarte/logocombate.png" alt="logo canal combate" className={styles.logoSlideWatch} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/img/alacarte/logocombate.png" alt="logo canal combate" className={styles.logoSlideWatch} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/img/alacarte/logocombate.png" alt="logo canal combate" className={styles.logoSlideWatch} />
                                </Carousel.Item>
                                </Carousel>
                            </Row> */}                        
                    
                    <Col sm={12} md={7} lg={7} xl={6} xxl={9} className={` col-12 d-flex align-items-center justify-content-end position-relative ${styles.videoWatchCTA}`}>
                    <video className={styles.manifestoWatch}
                            ref={videoRef}
                            src="/img/manifestoWatch.webm"
                            autoPlay
                            loop
                            muted={isMuted}
                            onMouseEnter={handleMouseEnter} // Ativa o som com hover
                            onClick={toggleMute} // Clique alterna o som
                            onEnded={handleVideoEnd}
                            />
                    </Col>
                </Row>
            </Container>
            <CardsVideoCTA />
        </Container>

</>
);
}

export default VideoCTA;