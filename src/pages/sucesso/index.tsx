import { useRouter } from 'next/router';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import TopBar from '../../../components/TopBar';
import CustomNavbar from '../../../components/CustomNavbar';
import Footer from '../../../components/Footer';

const Sucesso = () => {

  return (
    <div>
      <TopBar />
      <CustomNavbar />
      <Container style={{ marginTop: "120px" }}>
        <h1>Compra concluída com sucesso</h1>
        <p>Seus dados foram enviados.</p>
        <p>Você receberá um e-mail com mais informações.</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Sucesso;
