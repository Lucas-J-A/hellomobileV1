import TopBar from '../../components/TopBar';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';
import FaleConoscoHead from '../../components/FaleConoscoHead';
import FaleConoscoFormas from '../../components/FaleConoscoFormas'
import MailForm from '../../components/MailForm';
import { Container } from 'react-bootstrap'


const Contato = () => {
    return ( 
<>
    <TopBar />
      <CustomNavbar />
        <BotaoWhatsapp />

            <FaleConoscoHead />
            <FaleConoscoFormas />
            <MailForm />

            <Footer />
</>
    );

}

export default Contato;