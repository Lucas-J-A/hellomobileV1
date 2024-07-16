import {Row, Col, Container} from 'react-bootstrap';
import CardPlanosControl from "../components/CardPlanosControl";
import CardPlanosInter from "../components/CardPlanosInter";
import CardPlanosWatch from "../components/CardPlanosWatch";

function CardsInicioCTA() {
    return (
        <Container className="mt-3">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-11 pb-1" sm={11} md={6} lg={4} xl={4} xxl={4}>
            <CardPlanosControl />
          </Col>
          <Col className="col-11 pb-1" sm={11} md={6} lg={4} xl={4} xxl={4}>
            <CardPlanosInter />
          </Col>
          <Col className="col-11 pb-1" sm={11} md={12} lg={4} xl={4} xxl={4}>
            <CardPlanosWatch />
          </Col>
        </Row>
      </Container>
    );
};

export default CardsInicioCTA;