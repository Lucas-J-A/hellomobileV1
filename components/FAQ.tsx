import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row } from 'react-bootstrap';
import styles from '../src/styles/Faq.module.css';


function FAQ() {

  return (

    <Container id="faq" className={styles.faq} style={{ marginTop: "70px" }}>
      <Row className="text-dark text-center">
        <h3>Principais Dúvidas <span>sobre cobertura</span></h3>
      </Row>
      <Row className="justify-content-center " >
        <Accordion defaultActiveKey="0" >
          <Accordion.Item eventKey="1" className={styles.faqContainer}>
            <Accordion.Header className={styles.faqHeader}>
              Vocês têm o meu DDD?
            </Accordion.Header>
            <Accordion.Body className={styles.faqBody}>
              Após a conclusão da sua compra, confirmamos o seu DDD, e pode ficar tranquilo que estará incluído em nossa área de cobertura!
            </Accordion.Body>
          </Accordion.Item >
          <Accordion.Item eventKey="2" className={styles.faqContainer}>
            <Accordion.Header className={styles.faqHeader}>
              Funciona em todo o Brasil?
            </Accordion.Header>
            <Accordion.Body className={styles.faqBody}>
              Temos o prazer de informar que sim, cobrimos todo
              território brasileiro . Isso significa que você terá
              acesso aos nossos serviços na sua região sem problemas.
              Estamos ansiosos para fornecer a você uma excelente experiência
              com nosso serviço. Se precisar de alguma assistência ou tiver
              alguma dúvida, não hesite em entrar em contato conosco. Estamos
              aqui para ajudar!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={styles.faqContainer}>
            <Accordion.Header className={styles.faqHeader}>
              Vocês Possuem E-SIM?
            </Accordion.Header>
            <Accordion.Body className={styles.faqBody}>
              No momento, não oferecemos suporte para E-SIM nacional. Estamos constantemente avaliando novas tecnologias para melhor atender às necessidades de nossos clientes, e atualizaremos nossos serviços conforme necessário. Se surgirem novas opções de E-SIM no futuro, teremos o prazer de informá-lo. Estamos à disposição para qualquer outra dúvida ou assistência que você possa precisar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={styles.faqContainer}>
            <Accordion.Header className={styles.faqHeader}>
              Se eu migrar meu número, perco acesso ao Whatsapp?
            </Accordion.Header>
            <Accordion.Body className={styles.faqBody}>
              Não, na primeira vez que você acessar o WhatsApp após inserir o chip de viagem Hello, o próprio aplicativo irá perguntar se você deseja substituir seu número por um novo ou se você deseja manter seu número. Basta clicar em “Manter Meu Número” para continuar com seu próprio número de telefone.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={styles.faqContainer}>
            <Accordion.Header className={styles.faqHeader}>
              De onde vem o sinal da Hello?
            </Accordion.Header>
            <Accordion.Body className={styles.faqBody}>
              O sinal que você recebe em seu dispositivo é fornecido pela rede da TIM. Como parceiros da TIM, cuidamos de todos os aspectos relacionados aos serviços de telecomunicações oferecidos. Isso inclui desde a infraestrutura de rede até a garantia de uma cobertura confiável e de qualidade em todo o país. Portanto, você pode confiar na nossa expertise para manter você conectado, seja para fazer chamadas, enviar mensagens ou usar a internet. Se surgir alguma dúvida sobre a qualidade do sinal ou sobre os serviços que oferecemos, não hesite em nos contatar. Estamos aqui para garantir que você tenha a melhor experiência possível com nossa rede e serviços.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>

  );
}

export default FAQ;