import React from "react";
import { useState, useEffect } from 'react';
import styles from '../src/styles/TariffsHome.module.css';
import { ListGroup, Container, Card, Col, Row, Image, Button, Badge } from "react-bootstrap";
import {Gift} from 'react-bootstrap-icons';
import { Typography } from "@mui/material";

function TarifasPlanosHome() {
    return ( 

      <Container className="mt-5">
          <Row>
              <Col className="col-4 mt-3">
                  <Card className={styles.cardHome}>
                      <Card.Header className={styles.cardHomeHeader}>           
                          <Card.Title as="h5"
                                  className={styles.cardHomeNome}> Home Essentials
                          </Card.Title>
                      </Card.Header>

                      <Card.Body>
                          <Row className="justify-content-start align-items-center">
                              <Col className="col-auto">
                                  <Card.Text className={`py-0 ${styles.CardHomeGB}`}>100GB                        
                                  </Card.Text>
                                  <Card.Text className={`py-0 ${styles.CardHomeBenefit}`}>Conexão <b>4G/5G</b>
                                  </Card.Text>
                              </Col>
                          </Row>

                          <Row className={` py-3 d-flex ${styles.promoHome}`}>
                              <Typography className={`justify-content-bottom ${styles.PromoHomeText}`}><Gift /> Frete grátis para todo o Brasil por tempo limitado! </Typography>
                          </Row>

                          <Row className={`justify-content-start align-items-end
                                                        ${styles.rowHomeAssinar}`}>
                              <Col className="col-auto">
                                  <Button className={styles.btnPlanos}>Assinar Plano</Button>
                              </Col>
                    
                              <Col className="col-auto">
                                  <Card.Text className={styles.CardPlanosPreco}>
                                              <span>R$</span>299,90 </Card.Text>
                              </Col>

                            <Card.Text className={` mt-2 ${styles.descriptFidelidade}`}>
                                      Fidelidade de 24 meses 
                            </Card.Text>
                          </Row>

                          <ListGroup variant="flush" className="mt-3">
                              <ListGroup.Item as="p" className={` text-muted ${styles.listaHome}`}>
                                Conteúdo em 8 dispositivos</ListGroup.Item>
                              <ListGroup.Item as="p" className={`mt-0  pt-0 text-muted ${styles.listaHome}`}>
                                Até 4 telas simultaneas
                                </ListGroup.Item>
                              <ListGroup.Item as="p" className={` mt-0  pt-0 text-muted ${styles.listaHome}`}>
                                Cras justo odio</ListGroup.Item>
                          </ListGroup>
                      </Card.Body>            
                  </Card>
              </Col>

              <Col className="col-4">
                  <Card className={styles.cardHome}>
                      <Card.Header className={styles.cardHomeHeader}>           
                          <Card.Title as="h5"
                                  className={styles.cardHomeNome}> Home Plus
                          </Card.Title>
                      </Card.Header>

                      <Card.Body>
                          <Row className="justify-content-start align-items-center">
                              <Col className="col-auto">
                                  <Card.Text className={`py-0 ${styles.CardHomeGB}`}>200GB                        
                                  </Card.Text>
                                  <Card.Text className={`py-0 ${styles.CardHomeBenefit}`}>Conexão <b>4G/5G</b>
                                  </Card.Text>
                              </Col>
                          </Row>

                          <Row className={` py-3 d-flex ${styles.promoHome}`}>
                              <Typography className={`justify-content-bottom ${styles.PromoHomeText}`}><Gift /> Frete grátis para todo o Brasil por tempo limitado! </Typography>
                          </Row>

                          <Row className={`justify-content-start align-items-end
                                                        ${styles.rowHomeAssinar}`}>
                              <Col className="col-auto">
                                  <Button className={styles.btnPlanos}>Assinar Plano</Button>
                              </Col>
                    
                              <Col className="col-auto">
                                  <Card.Text className={styles.CardPlanosPreco}>
                                              <span>R$</span>399,90 </Card.Text>
                              </Col>

                            <Card.Text className={` mt-2 ${styles.descriptFidelidade}`}>
                                      Fidelidade de 24 meses 
                            </Card.Text>
                          </Row>
                      </Card.Body>            
                  </Card>
              </Col>
              <Col className="col-4 mt-3">
                  <Card className={styles.cardHome}>
                      <Card.Header className={styles.cardHomeHeader}>           
                          <Card.Title as="h5"
                                  className={styles.cardHomeNome}> Home Pro
                          </Card.Title>
                      </Card.Header>

                      <Card.Body>
                          <Row className="justify-content-start align-items-center">
                              <Col className="col-auto">
                                  <Card.Text className={`py-0 ${styles.CardHomeGB}`}>300GB                        
                                  </Card.Text>
                                  <Card.Text className={`py-0 ${styles.CardHomeBenefit}`}>Conexão <b>4G/5G</b>
                                  </Card.Text>
                              </Col>
                          </Row>

                          <Row className={` py-3 d-flex ${styles.promoHome}`}>
                              <Typography className={`justify-content-bottom ${styles.PromoHomeText}`}><Gift /> Frete grátis para todo o Brasil por tempo limitado! </Typography>
                          </Row>

                          <Row className={`justify-content-start align-items-end
                                                        ${styles.rowHomeAssinar}`}>
                              <Col className="col-auto">
                                  <Button className={styles.btnPlanos}>Assinar Plano</Button>
                              </Col>
                    
                              <Col className="col-auto">
                                  <Card.Text className={styles.CardPlanosPreco}>
                                              <span>R$</span>499,90 </Card.Text>
                              </Col>

                            <Card.Text className={` mt-2 ${styles.descriptFidelidade}`}>
                                      Fidelidade de 24 meses 
                            </Card.Text>
                          </Row>
                      </Card.Body>            
                  </Card>
              </Col>
          </Row>
      </Container>


    );
}

export default TarifasPlanosHome;