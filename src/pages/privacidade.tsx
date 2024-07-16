import TopBar from '../../components/TopBar';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import TermosPrivacidade from '../../components/TermosPrivacidade';
import { Container } from 'react-bootstrap';
import MetaCustom from '../../components/Meta/MetaCustom';

const Privacidade = () => {
    return (
        <>
        <MetaCustom title="Hello - Política de Privacidade" description="Política de Privacidade" />
        <TopBar />
        <CustomNavbar />     
        <Container className='mx-auto align-items-center'>
        <TermosPrivacidade />
        </Container>
        <Footer />
        </>
    )
}

export default Privacidade