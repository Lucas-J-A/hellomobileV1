import React from "react";
import { useState, useEffect } from 'react';
import styles from '../src/styles/Tariffs.module.css';
import { Telephone, Send, Reception4, InfoCircle } from 'react-bootstrap-icons';
import { CaretLeftSquareFill, CaretRightSquareFill } from 'react-bootstrap-icons';
import RightSidebarModal from "./RightSidebarModal";
import { Card, Col, Row, Image, Button, Badge } from "react-bootstrap";
import ModalPortabilidade from "./ModalPortabilidade";

function TarifasPlanosControle() {
    return ( 


      <Card className={styles.cardPlanos}>

          <Card.Header className={styles.cardPlanosHeader}>   
              <Card.Title as="h5"
                          className={styles.cardPlanosNome}> Controle Pro Max
              </Card.Title>
              <Card.Subtitle as="p"
                            className={`text-muted ${styles.cardPlanosDescript}`}>
                            O máximo de dados móveis para quem vive sempre online. Séries e videos se preocupar com consumo.
              </Card.Subtitle>
          </Card.Header>    

          <Card.Body>
              <Row className="justify-content-start align-items-center">
                  <Col className="col-auto">
                      <Card.Text className={styles.CardPlanosGB}>60GB</Card.Text>
                  </Col>
                  <Col className="col-auto">
                      <Card.Text className={styles.CardPlanosBenefit}><b>30GB</b> DE DADOS MÓVEIS <br />
                          + <b>30GB BÔNUS</b>
                      </Card.Text>
                  </Col>
              </Row>

              <Row className={`justify-content-start align-items-center mt-4
                              ${styles.rowPlanosAssinar}`}>
                    <Col className="col-auto">
                      <Button className={styles.btnPlanos}>Assinar Plano</Button>
                    </Col>
                    <Col className="col-auto">
                      <Card.Text className={styles.CardPlanosPreco}>
                          <span>R$</span>149,90 </Card.Text>
                    </Col>
                    <Card.Text className={` mt-2 ${styles.descriptFidelidade}`}>
                  Fidelidade de 12 meses 
                  </Card.Text>
              </Row>

              <Row className={`justify-content-start align-items-center ${styles.rowPlanosAssinar}`}>
                  <Card.Text className={` py-2 ${styles.descriptBeneficiosPlanos}`}>
                      <Telephone /> <strong>90</strong> minutos de ligações /dia
                  </Card.Text>

                  <Card.Text className={` py-2 ${styles.descriptBeneficiosPlanos}`}>
                      <Telephone /> <strong>30 SMS ou MMS</strong> /dia
                  </Card.Text>

                  <Card.Text className={` pt-2 pb-1 ${styles.descriptBeneficiosPlanosFim}`}>
                      <Telephone /> Assista em até <strong>4 telas simultâneas</strong>
                  </Card.Text>
              </Row>

              <Row>
                  <Col className=" mx-auto align-items-center col-auto py-3 m-0">
                      <Image src="/img/max-logo.png"
                              alt="logo max" className={`img-fluid ${styles.imgMaxUol}`} />
                  </Col>  

                  <Col className=" mx-auto align-items-center  col-auto py-3 m-0">
                      <Image src="/img/uol-leia.png" alt="logo Uol" className={`img-fluid ${styles.imgMaxUol}`}/>
                  </Col>

              </Row>    

            <Card.Text className={`text-muted ${styles.benefitByWatch}`}>
                        Além da melhor conexão, o seu plano conta
                        também com a plataforma de streaming mais completa do Brasil.
            </Card.Text>

              <Image src='/img/streaming-by-watch-horizontal-roxa-4@2x.png'
                        alt="logo streaming by watch"
                        className={`img-fluid ${styles.imgByWatch}`} />                    

              <Card.Text className={` pt-4 ${styles.CardPlanosBenefit}`}>
                      <b>Principais canais</b>
              </Card.Text>
              
            <Col className="col-auto d-flex justify-content-start">

                      <Image
                        src={'/img/canais/sony.png'}
                        className={`img-fluid ${styles.principaisCanaisIMG}`}
                        alt="Imagem Sony"
                      />
                      <Image
                        src={'/img/canais/cnn.png'}
                        className={`img-fluid ${styles.principaisCanaisIMG}`}
                        alt="Imagem Cnn"
                      />
                      <Image
                        src={'/img/canais/universal.png'}
                        className={`img-fluid ${styles.principaisCanaisIMG}`}
                        alt="Imagem Universal "
                      />
            </Col>
                  {/* <Card.Text>
                  <Link href="#planos" onClick={() => handleShow(plan.idPlano)}>Ver todos canais</Link>
                </Card.Text> */}
          </Card.Body>
        </Card>


    );
}

export default TarifasPlanosControle;