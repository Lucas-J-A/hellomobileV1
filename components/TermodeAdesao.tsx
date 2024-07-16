import {Container, Row, Col, Image, ListGroup } from 'react-bootstrap'
import styles from '../src/styles/adesao.module.css'
import Link from 'next/link';

function TermosdeAdesao() {
    return (
<Container id="adesao" className={`mx-auto mt-5 align-items-center ${styles.adesao}`}>
            <Row className="mt-5 mx-auto mt-5 text-dark align-items-center">
                <h3 className="text-center mt-3">Termos de Adesão</h3>
                <span className="text-center"> Seja bem-vindo(a) aos termos de adesão da Hello, a sua nova operadora de telefonia digital. </span>
            </Row>
            <ListGroup as="ol" numbered variant="flush" className="mt-5">
                    <ListGroup.Item as="li"
                                    className={`d-flex justify-content-between align-items-start ${styles.listAdesao}`}>
            
                        <Row id="Informacoes-Gerais" className="ms-2 me-auto">
                            <Row >
                                <h5>Em caso de solicitação de portabilidade numérica-móvel
</h5>
                            </Row>
                            <Container>
                                <p className={`text-muted ${styles.textoAdesao}`}>Venho por meio desta, solicitar que a linha telefônica descrita no cadastro, seja PORTADA para os serviços de telefonia
da operadora Hello sem perda do número supra-citado, conforme o Regulamento Geral de Portabilidade, aprovado
pela resolução n° 460 da ANATEL de 19 de março de 2007. </p>
                            </Container>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item as="li"
                                    className={`d-flex justify-content-between align-items-start ${styles.listAdesao}`}>
            
                        <Row id="Informacoes-Gerais" className="ms-2 me-auto">
                            <Row >
                                <h5>Contrato de Permanência
                                </h5>
                            </Row>
                            <Container>
                                <p className={`text-muted ${styles.textoAdesao}`}>O cliente declara ter ciência de que em função do recebimento dos benefícios descritos da oferta contratada, deverá
permanecer vinculado ao PLANO DE SERVIÇO contratado durante o prazo de 12 (doze) meses (“PERMANÊNCIA
MÍNIMA”). Na hipótese de cancelamento do serviço durante o prazo de PERMANÊNCIA MÍNINA, o Cliente estará
obrigado ao pagamento da multa por rescisão antecipada do contrato. A multa equivale a 40% do total das parcelas
restantes. </p>
                            </Container>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item as="li"
                                    className={`d-flex justify-content-between align-items-start ${styles.listPrivacidade}`}>
            
                        <Row id="Informacoes-Gerais" className="ms-2 me-auto">
                            <Row >
                                <h5>Informações Importantes
                                </h5>
                            </Row>
                            <Container>
                                <p className={`text-muted ${styles.textoAdesao}`}>O cliente adere ao contrato de produto selecionado neste termo de adesão, e declara, sob as penas da lei, que:
                                </p>
                                <p className={`text-muted ms-3 ${styles.textoAdesao}`}>
                                a) Seus dados cadastrais são verdadeiros e que se compromete a atualiza-los periodicamente, autorizando a Hello a
                                verifica-los junto aos órgãos restritivos de crédito e instituições assemelhadas; <br />
                                b) Conhece as condições do Plano de Serviço, Promoções e/ou Pacotes ora contratados; <br />
                                c) Tem conhecimento que o valor da habilitação poderá ser cobrado conforme as condições promocionais
                                apresentadas neste momento;<br />
                                d) Tem conhecimento que este instrumento integra: (I) o Contrato de Prestação de Serviço móvel pessoal, (II) o
                                Contrato de Permanência, (III) o Regulamento do Plano de Serviço e (IV) o(s) regulamentos(s) da Promoção, se
                                aplicáveis, e concorda em receber estes instrumentos no e-mail acima informado, mas, caso queira recebe-los
                                impressos no momento da contratação, basta solicitar as impressões; <br />
                                e) Tem conhecimento que, na hipótese de cancelamento ou alteração das condições contratadas, o cliente não poderá
                                se desobrigar do pagamento da multa contratual prevista no contrato de permanência; <br />
                                f) Autoriza a Hello a lançar no documento de cobrança, de forma avulsa e/ou em combos e/ou ofertas conjuntas de
                                serviços de telecomunicações, quando aplicável, os valores relacionados aos Serviços de Valor Adicionado, serviços
                                suplementares, facilidades adicionais e/ou outros serviços contratados, prestados pela Hello;<br />
                                g) Aceita receber mensagens de cunho publicitário enviadas pela Hello e/ou seus parceiros para seu aparelho.
                                </p>
                            </Container>
                        </Row>
                    </ListGroup.Item>
            </ListGroup>
</Container>
    
);

}

export default TermosdeAdesao