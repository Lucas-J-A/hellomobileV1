import styles from '../src/styles/CardBeneficios.module.css';
import {Row, Col, Card, Button} from 'react-bootstrap';

function CardPlanosInter() {
  return (
    <Card className={styles.cardBeneficios}>
      <Card.Body className={`rounded ${styles.bodyBenefInter}`}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-7" sm={8} md={7} lg={8} xl={7} xxl={7}>
              <Card.Title as="h4" className={` pb-2 ${styles.cardBenefTitle}`}>
              Chip de Viagem</Card.Title>
        <Card.Text className={styles.cardBenefText}>
        Saia do Brasil 100% conectado em mais 180 países.
        </Card.Text>
        <Button variant="primary" as="a" href="https://www.hellomobile.com.br" target="_blank" rel="noopener noreferrer" className={styles.cardBenefLink}>
  Comprar Chip
</Button>

</Col>
          <Col className="col-5" sm={4} md={5} lg={4} xl={5} xxl={5}></Col>
          </Row>
      </Card.Body>
    </Card>
  );
}

export default CardPlanosInter;