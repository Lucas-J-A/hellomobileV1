import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Telephone, Send, Reception4, InfoCircle } from 'react-bootstrap-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import styles from '../src/styles/CardPlano.module.css';
import styles from '../src/styles/CardPlano.module.css';
import { usePortabilidade } from '../context/PortabilidadeContext';
import Typography from '@mui/material/Typography'

interface Tarifa {
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

const CardPlano: React.FC = () => {
  const { ddd, numero, id } = usePortabilidade();
  let isPortabilidade = "Novo número";

  if (ddd && numero) {
    isPortabilidade = "Portabilidade"
  }

  const [tarifa, setTarifa] = useState<Tarifa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchTarifa = async () => {
        try {
          let response = await axios.get(`/api/plano?idPlano=${id}`);
          if (response.data.length > 0) {
            setTarifa(response.data[0]);
          } else {
            setError("Tarifa não encontrada.");
          }
        } catch (err) {
          setError("Erro ao buscar dados da tarifa.");
        } finally {
          setLoading(false);
        }
      };
      fetchTarifa();
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (

    <Container className={styles.cardContainer}>
      {tarifa && (
        <Card className={styles.customCard} style={{ backgroundColor: "transparent", border: "none" }}>

          <Card.Body  >
            <Image
              className= {`img-fluid mx-auto d-block ${styles.imgCardPlano}`}              
              src={'/img/cardplan/chiphelloplan.png'}
              alt='imagem de chip da hello'
            />
            <Card.Text>
              <Typography component={'p'} variant={'h4'} className={styles.detalhesPlano} >Detalhes do seu plano </Typography>
              <Typography component={'p'} className={`pt-1 ${styles.textPlano}`}>Você está adquirindo o plano: </Typography>
            </Card.Text>
            <Card.Title className={`p-0 m-0 ${styles.titleDetalhe}`}>{tarifa.nome}</Card.Title>
            <Card.Text className={styles.gb}>
              {tarifa.gbFixo + tarifa.gbBonus}GB
            </Card.Text>

            <Card.Text>
            <Typography component={'p'} className={styles.textPlano}> <span>Tipo de linha:</span> {isPortabilidade} </Typography>
            </Card.Text>
            {isPortabilidade == "Portabilidade" &&
              <div>
                <Card.Text className={styles.bonus}>
                  DDD escolhido: {ddd}
                </Card.Text>
                <Card.Text className={styles.bonus}>
                  Linha portada: ({ddd}) {numero}
                </Card.Text>
              </div>
            }

            <Row  >
              <Col className={styles.cardResume}>
                <Card.Text>
                <Typography component={'p'} className={`mb-2 ${styles.textPlano}`}><span>Resumo de Pedido:</span></Typography>
                <Typography component={'p'} className={styles.textPlano}> Assinatura controle: R$ {tarifa.valor.toFixed(2).replace('.', ',')}</Typography>
                <Typography component={'p'} className={styles.textPlano}> Chip Hello: {tarifa.chipHello == 0 ? 'Grátis': tarifa.chipHello.toFixed(2).replace('.', ',')}</Typography>
                <Typography component={'p'} className={styles.textPlano}> Frete: {tarifa.frete == 0 ? 'Grátis': tarifa.frete.toFixed(2).replace('.', ',')}</Typography>
                </Card.Text>
                <Card.Text>
                <Typography component={'p'} className={styles.textValorPlano}> <span>Valor Total: R$</span> {(tarifa.valor + tarifa.chipHello + tarifa.frete).toFixed(2).replace('.', ',')} </Typography>
                </Card.Text>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      )
      }
    </Container >
  );
};

export default CardPlano;
