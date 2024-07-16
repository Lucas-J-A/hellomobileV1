import React, { useState } from 'react';
import { Modal, Row, Image, Col } from 'react-bootstrap';
import styles from '../src/styles/ModalCanais.module.css';
import stylesTariffs from '../src/styles/Tariffs.module.css';



interface Beneficio {
  value: string;
  descricao: string;
}

interface ModalCanaisProps {
  beneficios: Beneficio[];
}

const ModalCanais: React.FC<ModalCanaisProps> = ({ beneficios }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderValue = (value: any): React.ReactNode => {
    if (typeof value === 'object' && value !== null) {
      return (
        <ul>
          {Object.entries(value).map(([key, val]) => (
            <li key={key}>
              <strong>{key}:</strong> {renderValue(val)}
            </li>
          ))}
        </ul>
      );
    }

    const res = value.toString()
      .replace(/[^\w\s]/gi, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .toLowerCase(); // Opcional: converte a string para minúsculas

    return res + '.webp';
  };

  // foi colocado essa função para retirar alguns styles padrão da tag

  return (
    <>
      <a href="#" onClick={handleShow} className={`${styles.btnVerTodosCanais} `}  >
        Ver todos canais
      </a >

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className={styles.headerContratar}>Todos Canais do Plano</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* imagem que vem dinamicamente */}

          {beneficios.map((item, index) => (
            <Row key={index}>
              {Object.entries(item).map(([key, value]) => {
                console.log(value)
                // Verifica se o valor é 'Up + TV Fechada' ou 'Up + TV Lineares'
                if (value === 'Up + TV Fechada' || value === 'Up + TV Lineares') {
                  console.log(value)
                  return (
                    <Col key={key} className="align-items-center">
                      <Image
                        alt=""
                        src={`/img/planos/canais/${renderValue(value)}`}
                        className={`text-center img-fluid ${stylesTariffs.imgCanais}`}
                      />
                    </Col>
                  );
                }
              })}
            </Row>
          ))}


        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCanais;
