import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Icon, Icon123, Facebook, Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';
import styles from '../src/styles/TopBar.module.css'


function TopBar() {
    return (

        <Container fluid className={` align-items-center ${styles.topbar}`}>
            <Container>
                <Row  >
                    <Col xl={10} sm={12} className={`mt-xl-2 mt-sm-0 ml-5 text-sm-center text-xl-start order-xl-0 order-1`}>
                        <i><span>Não somos só mais uma operadora, <strong>somos a sua nova operadora.</strong></span></i>
                    </Col>
                    <Col xl={2} sm={12} className={`mt-xl-2 mt-sm-0  text-sm-center text-xl-start order-xl-1 order-0 ${styles.topbarText} ${styles.socialLinks}`}>
                        <a href="#" className="facebook"><Facebook /></a>
                        <a href="#" className="instagram"><Instagram /></a>
                        <a href="#" className="linkedin"><Linkedin /></a>
                        <a href="#" className="youtube"><Youtube /></a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TopBar;