import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styles from '../src/styles/Navbar.module.css';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomNavbar: React.FC = () => {
  const router = useRouter();
  let isActive = (pathname: string) => router.pathname === pathname;
  let [scrolled, setScrolled] = useState(false);

  let handleScroll = () => {
    let offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['fixed-top', styles.navbar];

  if (scrolled) {
    navbarClasses.push(styles.scrolled);
  }


  return (
    <Navbar className={navbarClasses.join(' ')} collapseOnSelect bg="white " variant="light " expand="lg">
      <Container className="position-relative">
        <Navbar.Brand href="/">
          <Image
            src="/img/logo-meu-hello.png"
            height="55"
            className="d-inline-block align-top"
            alt='logo hello'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="large me-auto justify-content-end" style={{ width: "100%" }}>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link active={isActive('/')}>Home</Nav.Link>
            </Link>
            <Link href="#planos" passHref legacyBehavior>
              <Nav.Link active={isActive('/hellocontrole')}>Hello Controle</Nav.Link>
            </Link>
            {/* <Link href="#helloglobal" passHref legacyBehavior>
              <Nav.Link active={isActive('/helloglobal')}>Hello Global</Nav.Link>
            </Link> */}
            <Link href="https://www.hellomobile.com.br" passHref legacyBehavior>
              <Nav.Link target="_blank" rel="noopener noreferrer" active={isActive('/chipdeviagem')}>Chip de Viagem</Nav.Link>
            </Link>
            {/* <NavDropdown title="Institucional" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Quem somos nós</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Mapa de cobertura
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link href="#faq" passHref legacyBehavior>
              <Nav.Link active={isActive('/faq')}>FAQ</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;