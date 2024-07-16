import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Col, Row, Image, Badge } from "react-bootstrap";
import { Telephone, ChatLeftTextFill, Cast } from 'react-bootstrap-icons';
import ModalPortabilidade from "./ModalPortabilidade";
import ModalCanais from "./ModalCanais";
import stylesTariffs from '../src/styles/Tariffs.module.css';
import { Typography } from "@mui/material";

interface Planos {
  idPlano: string;
  nome: string;
  descricao: string;
  valor: number;
  gbFixo: number;
  gbBonus: number;
  img: string;
  minutos: string;
  sms: string;
  cobertura: string;
  chipHello: number;
  frete: number;
  beneficios: Array<any>;
}

const PlanosBasic: React.FC = () => {
  const [tariffs, setTariffs] = useState<Planos[]>([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axios.get('/api/tarifas');
        setTariffs(response.data);
      } catch (error) {
        console.error('Error fetching tariffs:', error);
      }
    };

    fetchTariffs();
  }, []);

  const renderValue = (value: any): string => {
    const res = value.toString()
      .replace(/[^\w\s]/gi, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .toLowerCase(); // Opcional: converte a string para minúsculas

    return res + '.png';
  };

  // Função para verificar se o nome do plano contém 'Controle'
  const isControlePlan = (plan: Planos): boolean => {
    return plan.nome.toLowerCase().includes('basic');
  };

  const controleTariffs = tariffs.filter(isControlePlan); // Filtra os planos que contêm 'Controle' no nome

  return (
    <Row className={` justify-content-center ${stylesTariffs.main} `}>
      <Typography variant="h4" className={` text-center m-5 ${stylesTariffs.titleTariffs} `}>Planos Basic</Typography>
      {controleTariffs.map((plan, index) => (
        <Col sm={12} md={6} lg={3} className="col-11 mx-0 px-0 position-relative mt-5" key={index}>
          <div className={`${stylesTariffs.badgeContainer}`}>
            {plan.gbFixo === 20 &&
              <Badge className={stylesTariffs.maisVendido}>Melhor escolha</Badge>
            }
          </div>
          <Card className={stylesTariffs.cardPlanos}>
            <Card.Header className={stylesTariffs.cardPlanosHeader}>
              <Card.Title as="h5" className={stylesTariffs.cardPlanosNome}>
                {plan.nome}
              </Card.Title>
              <Card.Subtitle as="p" className={`text-muted ${stylesTariffs.cardPlanosDescript}`}>
                {plan.descricao}
              </Card.Subtitle>
            </Card.Header>

            <Card.Body>
              <Row className="justify-content-start align-items-center">
                <Col className="col-auto">
                  <Card.Text className={` ${stylesTariffs.CardPlanosGB} `}>{plan.gbFixo + plan.gbBonus}GB</Card.Text>
                </Col>
                <Col className="col-auto">
                  <Card.Text className={` ${stylesTariffs.CardPlanosBenefit} `}><b>{plan.gbFixo}GB</b> DE DADOS MÓVEIS <br />

                  </Card.Text>
                </Col>
              </Row>

              <Row className={`justify-content-start align-items-center mt-4 ${stylesTariffs.rowPlanosAssinar}`}>
                <Col className="col-auto">
                  <ModalPortabilidade id={plan.idPlano} />
                </Col>
                <Col className="col-auto">
                  <Card.Text className={stylesTariffs.CardPlanosPreco}>
                    <span>R$</span>{plan.valor.toFixed(2).replace('.', ',')}
                  </Card.Text>
                </Col>
                <Card.Text className={`mt-4 ${stylesTariffs.descriptFidelidade}`}>
                  Fidelidade de 12 meses
                </Card.Text>
              </Row>

              <Row className={`justify-content-start align-items-center ${stylesTariffs.rowPlanosAssinar}`}>
                <Card.Text className={`py-2 ${stylesTariffs.descriptBeneficiosPlanos}`}>
                  <Telephone /> <strong>{plan.minutos}</strong> minutos de ligações <strong>/dia</strong>
                </Card.Text>

                <Card.Text className={`py-2 ${stylesTariffs.descriptBeneficiosPlanos}`}>
                  <ChatLeftTextFill /> Pacote de <strong>{plan.sms} SMS/MMS</strong>
                </Card.Text>

                <Card.Text className={`pt-2 pb-1 ${stylesTariffs.descriptBeneficiosPlanosFim}`}>
                  <Cast /> Assista em até <strong>4 telas simultâneas</strong>
                </Card.Text>
              </Row>
              <Row>
                {/* Imagem que vem dinamicamente */}
                <Col>
                  {plan.beneficios.map((item, index) => (
                    <Row key={index}>
                      {Object.entries(item).map(([key, value]) => {
                        // Verifica se o valor é 'UOL Leia+' ou 'HBO'

                        if (value === 'UOL Leia+' || value === 'HBO') {
                          return (
                            <Col key={key} className="mx-auto align-items-center col-auto py-3 m-0">
                              <Image
                                alt=""
                                src={`/img/planos/beneficios/${renderValue(value)}`}
                                className={`${stylesTariffs.imgMaxUol}`}
                              />
                            </Col>
                          );
                        }
                        return null;
                      })}
                    </Row>
                  ))}
                </Col>
              </Row>

              <Card.Text className={`text-muted ${stylesTariffs.benefitByWatch}`}>
                Além da melhor conexão, o seu plano conta também com a plataforma de streaming mais completa do Brasil.
              </Card.Text>

              <Row className="d-flex justify-content-center">
                <Image
                  src='/img/streaming-by-watch-horizontal-roxa-4@2x.png'
                  alt="logo streaming by watch"
                  className={`img-fluid ${stylesTariffs.imgByWatch}`}
                />
              </Row>

              <Card.Text className={`text-center pt-4 ${stylesTariffs.CardPlanosBenefit}`}>
                <b>Principais canais</b>
              </Card.Text>

              <Col className="col-auto d-flex justify-content-center">
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
                  alt="Imagem Universal"
                />
              </Col>

              <Row className={`justify-content-center align-items-center mt-4`}>
                <Col className="col-auto">
                  {/* Passa os benefícios para o ModalCanais */}
                  <ModalCanais beneficios={plan.beneficios} nome={plan.nome} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))
      }
    </Row >
  );
}

export default PlanosBasic;
