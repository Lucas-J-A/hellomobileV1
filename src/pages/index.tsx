import { Container } from 'react-bootstrap';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import VideoCTA from '../../components/VideoCTA';
import FAQ from '../../components/FAQ';
import TopBar from '../../components/TopBar';
import ResponsiveCarousel from '../../components/ResponsiveCarousel';
import CardsInicioCTA from '../../components/CardsInicioCTA';
import HeroPlanos from '../../components/HeroPlanos';
import Planos from '../../components/Planos';
import BaixarAppWatch from '../../components/BaixarAppWatch'
import PlanosBasic from '../../components/PlanosBasic';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';

const Home = () => {
  return (
    <>
      <TopBar />
      <CustomNavbar />

      <ResponsiveCarousel />
      <Container className='mx-auto align-items-center'>
        <CardsInicioCTA />
        <VideoCTA />
      </Container>
      <HeroPlanos />
      <Container className='mx-auto align-items-center'>
        {/* <Swape /> */}
        <Container id="planos" className="justify-content-center align-items-center mx-auto mt-5">
          <PlanosBasic />
          <Planos />
        </Container>
        <BaixarAppWatch />
        <FAQ />
      </Container>
      <BotaoWhatsapp />
      <Footer />
    </>
  );
};

export default Home;
