import styles from '../src/styles/CardBeneficios.module.css';
import {Row, Col, Card, Button} from 'react-bootstrap';

function CardPlanosControl() {
  return (
    <Card className={styles.cardBeneficios}>
      <Card.Body className={`rounded text-end ${styles.bodyBenefPlanos}`}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-5" sm={4} md={5} lg={3} xl={4} xxl={5}></Col>
          <Col className="col-7" sm={8} md={7} lg={9} xl={8} xxl={7}>
              <Card.Title as="h4" className={` pb-2 ${styles.cardBenefTitle}`}>
                Planos Controle</Card.Title>
        <Card.Text className={styles.cardBenefText}>
        Todos os Benefícios e vantagens que só um cliente Hello têm.
        </Card.Text>
                <Button variant="primary" as="a" href="#planos"className={styles.cardBenefLink}>Ver Planos</Button>  {/* Criar um Botão que vai pro próprio site, um scroll para o componente */}
          </Col>
          </Row>
      </Card.Body>
    </Card>
  );
}

export default CardPlanosControl;