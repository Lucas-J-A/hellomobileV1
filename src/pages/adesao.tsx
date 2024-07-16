import TopBar from '../../components/TopBar';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import MetaIndex from '../../components/Meta/Index';
import TermosdeAdesao from '../../components/TermodeAdesao';
import { Container } from 'react-bootstrap';

const adesao = () => {
    return (
        <>
        <TopBar />
        <CustomNavbar />        
        <Container className='mx-auto align-items-center'>
        <TermosdeAdesao />
        </Container>
        <Footer />
        </>
    )
}

export default adesao