import { Container, Col, Row, ListGroup, Badge } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from '../src/styles/Footer.module.css';
import Link from 'next/link';
import Typography from '@mui/material/Typography'; // Importando Typography do Material-UI
import ReclameAqui from "../components/ReclameAqui";
// foi colocado essa função para retirar alguns styles padrão da tag
const listItemStyle = {
  backgroundColor: "transparent",
  border: "none",
  textAling: "center"
};



const linkStyle = {
  textDecoration: 'none', // Remove o sublinhado
  color: 'inherit' // Usa a cor padrão do texto
};

const Footer = () => {
  return (
    <Container fluid className={`pt-5 md-2 mt-5 ${styles.footer}`}>
      <Container >
        <Row>
          <Col sm={12} md={4} lg={3}>
            <Typography variant="h6" className="p-2">Telefonia do Futuro</Typography>
            <ListGroup variant="flush" className={`list-group ${styles.helloFooterMenu}`} style={{ backgroundColor: "transparent" }}>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Plano Controle</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Hello Global</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Hello Home</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="https://www.hellomobile.com.br/">Chip de Viagem</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Typography variant="h6" className="p-2">Institucional</Typography>
            <ListGroup variant="flush" className={`list-group ${styles.helloFooterMenu}`} style={{ backgroundColor: "transparent" }}>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Quem Somos Nós</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Meu Hello na Mídia</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Fale Conosco</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Trabalhe conosco</Link></ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col sm={12} md={4} lg={3}>
            <Typography variant="h6" className="p-2">Central do Cliente</Typography>
            <ListGroup variant="flush" className={`list-group ${styles.helloFooterMenu}`} style={{ backgroundColor: "transparent" }}>
              <ListGroup.Item style={listItemStyle}><Link href="#0">F.A.Q.</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Canal de Atendimento</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="#0">Mapa de Cobertura</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="/adesao">Termo de adesão</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Link href="/privacidade">Política de privacidade</Link></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><a href="assets/docs/TERMOS DE USO HELLO.pdf" target="_blank">Termos de uso</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <Typography variant="h6" className="p-2">Segurança do Site</Typography>
            <ListGroup variant="flush" className={`list-group ${styles.helloFooterMenu}`} style={{ backgroundColor: "transparent" }}>
              <ListGroup.Item style={listItemStyle}><Image src="/img/footer/anatelEmpresa.png" alt="Anatel" className="imageAnatel" style={{ width: '60px', height: 'auto', maxWidth: '100%' }} /></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><Image src="/img/footer/awsImagem.png" alt="AWS" className="imageAnatel" style={{ width: '60px', height: 'auto', maxWidth: '100%' }} /></ListGroup.Item>
              <ListGroup.Item style={listItemStyle}><ReclameAqui /></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Container className='border-top'>
            <Row className="pb-4">
              <Col xs={4} className="text-center mt-2">
                <Link href="#0"><Image src="/img/logo-meu-hello.png" alt="Logo meu hello" width="52px" /></Link>
              </Col>
              <Col xs={8} className='text-center mt-2'>
                <Badge>
                  &copy;{new Date().getFullYear()}   Hello Mobile LTDA
                </Badge>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
