import Link from "next/link";
import styles from '../src/styles/FaleConosco.module.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Typography } from "@mui/material";

function FaleConoscoHead() {
    return (

        <Container className="text-black pt-5 w-100 mt-5 px-2"  >
            <Typography component={'p'} variant={'h2'} className={` ${styles.faleHeadingTitle}`}>
            Entre em contato conosco
            </Typography>
            <Typography component={'p'} className={styles.faleHeadingDescription}>
            Abaixo listamos as formas de contato disponíveis.<br />
Estamos ansiosos em lhe atender da melhor maneira possível.
            </Typography>
        </Container>
        
    );
} 

export default FaleConoscoHead;
