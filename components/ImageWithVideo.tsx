
import React, { useRef, useState } from 'react';
import ReactPlayer from "react-player";
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { WindowFullscreen } from 'react-bootstrap-icons';
import styles from '../src/styles/ImagewithVideo.module.css'

const ImageWithVideo = () => {

  let videoRef = useRef<any>(null);
  let [isPlaying, setIsPlaying] = useState<any>(true);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (

    <Container className={`mt-5 mx-auto ${styles.containerVideo}`}>
      <Row className="align-items-center justify-content-between ">
        <Col className={`col-12 mt-3 ps-5 mx-auto  text-white ${styles.infoVideo}`} sm={12} md={5} lg={6} xl={6} xxl={7}>
                    <Image 
            className={styles.infoStreamwatch}
            src="/img/streaming-by-watch-white.png"
            alt="logo streaming by watch"
          />
              <Col className="">
                <Row>Seus programas preferidos em qualquer dispositivo </Row>
                <div className="d-flex align-items-center my-3 icone-filme">
                  <div className="icon-style me-2"><WindowFullscreen size={15}/></div>
                    <p>Até 4 telas simultâneas</p>
                </div>
          <div className="d-flex align-items-center my-3 icone-filme">
            <div className="icon-style me-2"><WindowFullscreen size={15} /></div>
            <p>+11000 horas de conteúdo</p>
          </div>
          <div className="d-flex align-items-center my-3 icone-filme">
            <div className="icon-style me-2"><WindowFullscreen size={15} /></div>
            <p>Canais A la carte</p>
          </div>
          <Button className="container_video-btn  mb-5 mt-4" onClick={toggleVideo}>{isPlaying ? 'Pausar' : 'Ação'}</Button>
              </Col>
              
        </Col>
        <Col className={`col-12 ${styles.videoWatchContainer}`} sm={12} md={7} lg={6} xl={6} xxl={5}>
        <video className="video-watch "
          ref={videoRef}
          src="/video/videoSection.mp4"
          autoPlay
          loop
        />
      </Col>
      </Row>

    </Container>
  );
};

export default ImageWithVideo;