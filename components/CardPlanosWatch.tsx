import styles from '../src/styles/CardBeneficios.module.css';
import {Row, Col, Card, Button} from 'react-bootstrap';

function CardPlanosWatch() {
  return (
    <Card className={styles.cardBeneficios}>
      <Card.Body className={`rounded text-end ${styles.bodyBenefWatch}`}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-5" sm={4} md={5} lg={4} xl={5} xxl={6}></Col>
          <Col className="col-7" sm={8} md={7} lg={8} xl={7} xxl={6}>
              <Card.Title as="h4" className={` pb-2 ${styles.cardBenefTitle}`}>
              TV, Séries e filmes</Card.Title>
        <Card.Text className={styles.cardBenefText}>
        Assista seus canais favoritos no celular, tablet, TV ou no PC.
        </Card.Text>
                <Button variant="primary" as="a" href="#planos"className={styles.cardBenefLink}>Ver Conteúdo</Button>  {/* Criar um Botão que vai pro próprio site, um scroll para o componente */}
          </Col>
          </Row>
      </Card.Body>
    </Card>
  );
}

export default CardPlanosWatch;