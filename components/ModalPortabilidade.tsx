// components/ModalPortabilidade.tsx
import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { usePortabilidade } from '../context/PortabilidadeContext';
import { useMask } from '@react-input/mask';
import styles from '../src/styles/ModalContratacao.module.css'

const ddds = [
  '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '21', '22', '24', '27', '28',
  '31', '32', '33', '34', '35', '37', '38',
  '41', '42', '43', '44', '45', '46',
  '47', '48', '49',
  '51', '53', '54', '55',
  '61', '62', '63', '64', '65', '66', '67',
  '68', '69',
  '71', '73', '74', '75', '77', '79',
  '81', '82', '83', '84', '85', '86', '87', '88', '89',
  '91', '92', '93', '94', '95', '96', '97', '98', '99'
];

interface ModalPortabilidadeProps {
  id: string;
}

const ModalPortabilidade: React.FC<ModalPortabilidadeProps> = ({ id }) => {
  const [showInitialModal, setShowInitialModal] = useState(false);
  const [showPortabilityModal, setShowPortabilityModal] = useState(false);
  const handleInitialModalClose = () => setShowInitialModal(false);
  const handleInitialModalShow = () => setShowInitialModal(true);
  let { setDdd, setNumero, setId } = usePortabilidade();
  let [localDdd, setLocalDdd] = useState('');
  let [localNumero, setLocalNumero] = useState('');
  const router = useRouter();

  const handlePortabilityModalClose = () => setShowPortabilityModal(false);
  const handlePortabilityModalShow = () => {
    setShowInitialModal(false);
    setShowPortabilityModal(true);
  };


  const handlePortabilidade = () => {
    setDdd(localDdd);
    setNumero(localNumero);
    setId(id);
    router.push(`/cadastro`);
  };

  const handleNovoNumero = () => {
    setId(id);
    router.push(`/cadastro`);
  };

  const inputRef = useMask({ mask: '_____-____', replacement: { _: /\d/ } });

  return (
    <>
      <Button variant="primary" onClick={handleInitialModalShow} className={styles.btnContratar}>
        Assinar plano
      </Button>

      <Modal show={showInitialModal} onHide={handleInitialModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.headerContratar}>Falta pouco para você ter o seu chip Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className={styles.modalP}>Você deseja ter um novo número ou quer trazer o seu número para a Hello?</p>
            <Button variant="primary" onClick={handleNovoNumero} className={styles.btnContratar}>
              Novo Número
            </Button>
            <Button variant="secondary" onClick={handlePortabilityModalShow} className={styles.btnPortabilidade}>
              Portabilidade
            </Button>
          </Col>
        </Modal.Body>
      </Modal>
      < Modal show={showPortabilityModal} onHide={handlePortabilityModalClose} >
        <Modal.Header closeButton>
          <Modal.Title className={styles.headerContratar}>Escolha o seu DDD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className={styles.modalP}>Com a Hello, você não perde o seu número e ainda usufrui de benefícios exclusivos para portabilidade. Abaixo, escolha o seu DDD e o número que deseja trazer para a Hello.</p>
            <Form>
              <Form.Group controlId="formDdd">
                <Form.Label className={`text-muted ${styles.formLabelContratar}`}>Qual o seu DDD?</Form.Label>
                <Form.Control className={styles.optionContratar} as="select" value={localDdd} onChange={(e) => setLocalDdd(e.target.value)}>
                  <option value="">Selecione o DDD</option>
                  {ddds.map((ddd) => (
                    <option key={ddd} value={ddd}>{ddd}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formNumero">
                <Form.Label className={`text-muted ${styles.formLabelContratar}`}>Número de Telefone</Form.Label>
                <Form.Control
                  className={styles.labelContratar}
                  type="text"
                  value={localNumero}
                  onChange={(e) => setLocalNumero(e.target.value)}
                  ref={inputRef}
                  placeholder="Digite seu número de telefone"
                />
              </Form.Group>
              <Button variant="primary" onClick={handlePortabilidade} className={styles.btnContratar}>
                Enviar
              </Button>
            </Form>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPortabilidade;
