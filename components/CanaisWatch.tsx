import { Tab, Tabs, Container, Row, Col, Image } from 'react-bootstrap'
import styles from '../src/styles/tabsCanaisWatch.module.css'

function CanaisWatch() {
    return (
        <Container className={`mt-3 mb-2 mx-auto align-items-center ${styles.tabsCanaisWatch}`}>
        <Tabs
        defaultActiveKey="start"
        id="CanaisWatch" className={styles.tituloCanaisWatch}>
        <Tab eventKey="start" as="h5" title="Hello Play Start" className={styles.campoCanaisWatch}>
            <Container className="p-3 pt-4">
                <Row className={` d-flex  ${styles.linhaCanais}`}>
                    <Col className="col-7 ">    
                        <Row className="mt-1 d-flex"><p className=" mx-1 ps-3">Os melhores Canais estão aqui!</p>  </Row>                                     
                    <Row className="justify-content-center align-items-center mt-1 d-flex">
                        <Image src="img/PlayStart/01-CNN_Brasil.png" alt="Logo CNN" className={`mx-1 ${styles.imgCanaisWatchquadrado}`} />
                        <Image src="img/PlayStart/02-Universal-Channel.png" alt="Logo Universal Channel" className={`mx-1 ${styles.imgCanaisWatchquadrado}`} />
                        <Image src="img/PlayStart/03-EUROPA.png" alt="Logo Europa" className={`mx-1 ${styles.imgCanaisWatchquadrado}`} />
                        <Image src="img/PlayStart/04-Sony.png" alt=" Sony" className={`mx-1 ${styles.imgCanaisWatchSony}`} />
                    </Row>
                    <Row className="justify-content-center align-items-center mt-3 d-flex">
                        <Image src="img/PlayStart/05-LIONSGATE.png" alt="Logo lionsgate" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                        <Image src="img/PlayStart/06-Cisneros.png" alt="Logo Cisneros" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                        <Image src="img/PlayStart/07-xpeed.png" alt="Logo xpeed" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                    </Row>
                    <Row className="justify-content-center align-items-center mt-3 d-flex">
                        <Image src="img/PlayStart/08-futura.png" alt="Logo Futura" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                        <Image src="img/PlayStart/09-gazeta.png" alt="Logo Gazeta" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                        <Image src="img/PlayStart/10-brasil.png" alt="Logo TV Brasil" className={`mx-2 ${styles.imgCanaisWatchretangulo}`} />
                    </Row>
                    <Row className="justify-content-center align-items-center mt-3 d-flex">
                        <Image src="img/PlayStart/11-redevida.png" alt="Logo Rede Vida" className={`mx-2 ${styles.imgCanaisWatchquadrado}`} />
                        <Image src="img/PlayStart/12-aparecida.png" alt="Logo TV Aparecida" className={`mx-2 ${styles.imgCanaisWatchquadrado}`} />
                        <Image src="img/PlayStart/13-cancao.png" alt="Logo Cancao Nova" className={`mx-2 ${styles.imgCanaisWatchquadrado}`} />
                    </Row>
                    </Col>
                    <Col className={`col-5 ${styles.bordaColWatch}`}>
                        <Row className="mt-1 d-flex"><p className=" mx-1 ps-3">Mais Benefícios!!</p></Row>
                        <Row><p><span>Além do melhor conteúdo para você acessar de qualquer dispositivo smart, o este plano também oferece:</span></p></Row>
                        <Row>
                            <Image rounded src="img/leia-mais-uol.jpg" alt="Uol Leia Mais" /></Row>                                   

                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="tv" title="Hello Play TV" >
          Tab content for Profile
        </Tab>
        <Tab eventKey="plus" title="Hello Play TV Plus" disabled>
          Tab content for Contact
        </Tab>
      </Tabs> 
      </Container>
    )
}

export default CanaisWatch;

