import { Container } from 'react-bootstrap';
import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import TopBar from '../../components/TopBar';
import TarifasPlanosHome from '../../components/TarifasPlanosHome';
import SliderCanais from '../../components/SliderCanais';
import BannerHome from '../../components/BannerHome';
import ListaMarcas from '../../components/ListaMarcas'
import CanaisSliderHome from '../../components/CanaisSliderHome'
import HeroHelloHome from '../../components/HeroHelloHome'

const Home = () => {
  return (
    <>
      <TopBar />
      <CustomNavbar />
      <BannerHome />
      <CanaisSliderHome />
      <Container className='my-5 align-items-center'>
        <HeroHelloHome />

        <TarifasPlanosHome />
      </Container >
      <Footer />
    </>
  );
};

export default Home;