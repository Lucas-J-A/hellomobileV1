import { useRouter } from 'next/router';
import { Col, Row, Container } from 'react-bootstrap';
import CardPlano from '../../../components/CardPlano';
import TopBar from '../../../components/TopBar';
import CustomNavbar from '../../../components/CustomNavbar';
import Footer from '../../../components/Footer';
import ClientForm from '../../../components/ClientForm';
import styles from '../../styles/Cadastro.module.css'

const PlanoPage = () => {

  return (
    <>
      <TopBar />
      <CustomNavbar />
      <Container className={styles.cadastroContainer} >
        <Row className="d-flex justify-content-center">
          <Col className="col-11 justify-content-start" md={8}>
            <ClientForm />
          </Col>
          <Col className={`col-11 justify-content-end ${styles.colDetalhes}`} md={4}>
            <CardPlano />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PlanoPage;
