import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../src/styles/Tariffs.module.css';
import { Telephone, Send, Reception4, InfoCircle } from 'react-bootstrap-icons';
import Link from 'next/link';
import { CaretLeftSquareFill, CaretRightSquareFill } from 'react-bootstrap-icons';
import RightSidebarModal from "./RightSidebarModal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Row, Image, Button, Container, Badge } from "react-bootstrap";
import ModalPortabilidade from "./ModalPortabilidade";
import stylesTariffs from '../src/styles/Tariffs.module.css';

interface Planos {
  idPlano: string;
  nome: string;
  gb: string;
  descricao: string;
  qtd: string;
  bonus: string;
  imagem: string;
  valor: string;
  url: string;
  minutos: string;
  sms: string;
  cobertura: string;
}

const Swape: React.FC = () => {
  let [show, setShow] = useState(false);
  let [modalId, setModalId] = useState<string>('');

  let handleShow = (id: string) => {
    setModalId(id);
    setShow(true);
    console.log('Id:::::::', modalId);
  };

  const handleClose = () => setShow(false);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [tariffs, setTariffs] = useState<Planos[]>([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axios.get('/api/planos');
        setTariffs(response.data);
      } catch (error) {
        console.error('Error fetching tariffs:', error);
      }
    };

    fetchTariffs();
  }, []);

  const slider = React.useRef<any>(null);

  return (
    <Container id="planos" className="justify-content-center align-items-center mx-auto">
      <Slider ref={slider} {...settings}>
        {tariffs.map((plan, index) => (
        <Row className="justify-content-center align-items-center mx-auto" key={index}>
          <Card className={stylesTariffs.cardPlanos}>
          <Card.Header className={stylesTariffs.cardPlanosHeader}>   
          <Badge className={stylesTariffs.maisVendido}>Melhor escolha</Badge>   
              <Card.Title as="h5"
                          className={stylesTariffs.cardPlanosNome}> {plan.nome}
              </Card.Title>
              <Card.Subtitle as="p"
                            className={`text-muted ${stylesTariffs.cardPlanosDescript}`}>
                            {plan.descricao}
              </Card.Subtitle>
          </Card.Header>    

          <Card.Body>
              <Row className="justify-content-start align-items-center">
                  <Col className="col-auto">
                      <Card.Text className={stylesTariffs.CardPlanosGB}>{plan.gb}GB</Card.Text>
                  </Col>
                  <Col className="col-auto">
                      <Card.Text className={stylesTariffs.CardPlanosBenefit}><b>{plan.qtd}GB</b> DE DADOS MÓVEIS <br />
                          + <b>{plan.bonus}GB BÔNUS</b>
                      </Card.Text>
                  </Col>
              </Row>

              <Row className={`justify-content-start align-items-center mt-4
                              ${stylesTariffs.rowPlanosAssinar}`}>
                    <Col className="col-auto">
                      <ModalPortabilidade id={plan.idPlano} />
                    </Col>
                    <Col className="col-auto">
                      <Card.Text className={stylesTariffs.CardPlanosPreco}>
                          <span>R$</span>{plan.valor} </Card.Text>
                    </Col>
                    <Card.Text className={` mt-2 ${stylesTariffs.descriptFidelidade}`}>
                  Fidelidade de 12 meses 
                  </Card.Text>
              </Row>

              <Row className={`justify-content-start align-items-center ${stylesTariffs.rowPlanosAssinar}`}>
                  <Card.Text className={` py-2 ${stylesTariffs.descriptBeneficiosPlanos}`}>
                      <Telephone /> <strong>{plan.minutos}</strong> minutos de ligações
                  </Card.Text>

                  <Card.Text className={` py-2 ${stylesTariffs.descriptBeneficiosPlanos}`}>
                      <Telephone /> Pacote de <strong>{plan.sms} SMS/MMS</strong>
                  </Card.Text>

                  <Card.Text className={` pt-2 pb-1 ${stylesTariffs.descriptBeneficiosPlanosFim}`}>
                      <Telephone /> Assista em até <strong>4 telas simultâneas</strong>
                  </Card.Text>
              </Row>

              <Row>
                  <Col className=" mx-auto align-items-center col-auto py-3 m-0">
                      <Image src="/img/max-logo.png"
                              alt="logo max" className={`img-fluid ${stylesTariffs.imgMaxUol}`} />
                  </Col>  

                  <Col className=" mx-auto align-items-center  col-auto py-3 m-0">
                      <Image src="/img/uol-leia.png" alt="logo Uol" className={`img-fluid ${stylesTariffs.imgMaxUol}`}/>
                  </Col>

              </Row>    

            <Card.Text className={`text-muted ${stylesTariffs.benefitByWatch}`}>
                        Além da melhor conexão, o seu plano conta
                        também com a plataforma de streaming mais completa do Brasil.
            </Card.Text>

              <Image src='/img/streaming-by-watch-horizontal-roxa-4@2x.png'
                        alt="logo streaming by watch"
                        className={`img-fluid ${stylesTariffs.imgByWatch}`} />                    

              <Card.Text className={` pt-4 ${stylesTariffs.CardPlanosBenefit}`}>
                      <b>Principais canais</b>
              </Card.Text>
              
            <Col className="col-auto d-flex justify-content-start">

                      <Image
                        src={'/img/canais/sony.png'}
                        className={`img-fluid ${stylesTariffs.principaisCanaisIMG}`}
                        alt="Imagem Sony"
                      />
                      <Image
                        src={'/img/canais/cnn.png'}
                        className={`img-fluid ${stylesTariffs.principaisCanaisIMG}`}
                        alt="Imagem Cnn"
                      />
                      <Image
                        src={'/img/canais/universal.png'}
                        className={`img-fluid ${stylesTariffs.principaisCanaisIMG}`}
                        alt="Imagem Universal "
                      />
            </Col>
                  {/* <Card.Text>
                  <Link href="#planos" onClick={() => handleShow(plan.idPlano)}>Ver todos canais</Link>
                </Card.Text> */}
          </Card.Body>
          </Card>
        </Row>
        )
        )}
      </Slider>
      <Row className="text-center position-relative">
        <Col className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Button className={`position-absolute bottom-0 start-0 ${styles.btnArrow}`} onClick={() => slider?.current?.slickPrev()}><CaretLeftSquareFill /></Button>
          <Button className={`position-absolute bottom-0 end-0 ${styles.btnArrow}`} onClick={() => slider?.current?.slickNext()}><CaretRightSquareFill /></Button>
        </Col>
      </Row>
      <RightSidebarModal id={modalId} show={show} handleClose={handleClose} />
    </Container >
  );
}

export default Swape;
