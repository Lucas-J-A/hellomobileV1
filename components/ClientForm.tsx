import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Form, Button, Modal, Col, Row, Container } from 'react-bootstrap';
import { cpf as validateCPF } from 'cpf-cnpj-validator';
// import InputMask from 'react-input-mask';
import styles from '../src/styles/ClientForm.module.css';
import { usePortabilidade } from '../context/PortabilidadeContext';
import { useMask } from '@react-input/mask';
import Link from 'next/link';
import TermosPrivacidade from './TermosPrivacidade';
import Typography from '@mui/material/Typography'
import { ClassNames } from '@emotion/react';
import TermosdeAdesao from './TermodeAdesao';
import { isAdult } from '../src/utils/ageCheck';
type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

const ClientForm: React.FC = () => {
  const router = useRouter();

  let { ddd, numero, id } = usePortabilidade();
  let disabledE = false;
  let varPortabilidade = (ddd && numero) ? "1" : "0";


  const maskTelefoneDDD = useMask({ mask: '(__) _____-____', replacement: { _: /\d/ } });
  const maskTelefone = useMask({ mask: '_____-____', replacement: { _: /\d/ } });
  const maskCPF = useMask({ mask: '___.___.___-__', replacement: { _: /\d/ } });
  const maskCep = useMask({ mask: '_____-___', replacement: { _: /\d/ } });
  const maskDDD = useMask({ mask: '__', replacement: { _: /\d/ } });

  let [formData, setFormData] = useState({
    nome: '',
    idPlano: id,
    dataNascimento: '',
    telefonoContato: '',
    cpf: '',
    rg: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
    portabilidade: varPortabilidade,
    numeroLinha: numero,
    ddd: ddd,
    error: null
  });

  if (ddd && numero) {
    disabledE = true;
  }

  let [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  let [isSubmitting, setIsSubmitting] = useState(false);
  let [showErrorModal, setShowErrorModal] = useState(false);
  let [showPrivacidadeModal, setShowPrivacidadeModal] = useState(false);
  let [showAdesaoModal, setShowAdesaoModal] = useState(false);
  let [isAgreed, setIsAgreed] = useState<any>(false);
  let [isAdesao, setIsAdesao] = useState<any>(false);

  const handleClosePrivacidade = () => setShowPrivacidadeModal(false);

  let handleShowPrivacidade: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setShowPrivacidadeModal(true);
  };

  const handleCloseAdesao = () => setShowAdesaoModal(false);

  let handleShowAdesao: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setShowAdesaoModal(true);
  };

  let handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  let handleAdesaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdesao(e.target.checked);
  };

  let handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const changePortabilidade = (event: React.ChangeEvent<FormControlElement>) => {
    handleInputChange(event as React.ChangeEvent<HTMLInputElement>);
  };



  let handleCepBlur = async () => {
    if (formData.cep.length === 8) {
      try {
        let response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
        let data = response.data;
        setFormData((prevState) => ({
          ...prevState,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        }));
      } catch (error) {
        setFormErrors({ ...formErrors, cep: 'Erro ao buscar CEP' });
      }
    }
  };

  let validateForm = () => {
    let errors: { [key: string]: string } = {};
    if (!formData.nome) errors.nome = 'Nome é obrigatório';
    if (!formData.telefonoContato) errors.telefonoContato = 'Telefone de contato é obrigatório';
    if (!validateCPF.isValid(formData.cpf)) errors.cpf = 'CPF inválido';
    if (!formData.email) errors.email = 'E-mail é obrigatório';
    if (!formData.cep) errors.cep = 'CEP é obrigatório';
    if (!formData.logradouro) errors.logradouro = 'Logradouro é obrigatório';
    if (!formData.cidade) errors.cidade = 'Cidade é obrigatória';
    if (!formData.estado) errors.estado = 'Estado é obrigatório';
    if (!formData.ddd) errors.ddd = 'DDD é obrigatório para envio do chip';
    if (formData.portabilidade == "1" && !formData.numeroLinha) errors.numeroLinha = 'Número da linha é obrigatório para portabilidade';
    if (!formData.dataNascimento) {
      errors.dataNascimento = 'Data de nascimento é obrigatória';
    } else if (!isAdult(formData.dataNascimento)) {
      errors.dataNascimento = 'Você deve ter 18 anos ou mais';
    }


    return errors;
  };


  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!isAgreed) {
      alert('Você deve concordar com a política de privacidade para continuar.');
      return;
    }

    if (!isAdesao) {
      alert('Você deve concordar com a política de adesão para continuar.');
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        let response = await fetch('/api/newClient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let result = await response.json();

        if (result[0].Result === 'Ok') {
          window.location.href = '/sucesso';
        } else {
          console.error('Error:', result[0].Result || 'Unknown error occurred');
          setShowErrorModal(true);
        }
      } catch (error) {
        console.error('Error: Unable to reach the server.', error);
      }
    };
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className={styles.clientForm}>
        <Typography component={'p'} variant={'h2'} className={styles.formHeading}>Queremos saber mais sobre você!</Typography>
        <Typography component={'p'} className={styles.formDescription}>Precisamos apenas de algumas informações necessárias para finalizar o seu cadastro</Typography>
        <Row>
          <Typography component={'p'} className={styles.formDescription}> <span>Informações Pessoais</span></Typography>
          <Form.Group as={Col} controlId="nome" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}> Nome </Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              isInvalid={!!formErrors.nome}

            />
            <Form.Control.Feedback type="invalid">{formErrors.nome}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="dataNascimento" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}> Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleInputChange}
              isInvalid={!!formErrors.dataNascimento}
            />
            <Form.Control.Feedback type="invalid">{formErrors.dataNascimento}</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="email" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}> Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="telefonoContato" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Telefone de Contato</Form.Label>
            <Form.Control
              type="text"
              name="telefonoContato"
              value={formData.telefonoContato}
              onChange={handleInputChange}
              isInvalid={!!formErrors.telefonoContato}
              ref={maskTelefoneDDD}
              placeholder="(__) 9____-____"
            />
            <Form.Control.Feedback type="invalid">{formErrors.telefonoContato}</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="cpf" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>CPF</Form.Label>
            <Form.Control
              type="text"
              name="cpf"
              value={formData.cpf}
              ref={maskCPF}
              onChange={handleInputChange}
              isInvalid={!!formErrors.cpf}
              placeholder="___.___.___-__"
            />
            <Form.Control.Feedback type="invalid">{formErrors.cpf}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="rg" md="6">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>RG</Form.Label>
            <Form.Control
              type="text"
              name="rg"
              value={formData.rg}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="cep" md="4">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>CEP</Form.Label>
            <Form.Control
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
              onBlur={handleCepBlur}
              isInvalid={!!formErrors.cep}
            />
            <Form.Control.Feedback type="invalid">{formErrors.cep}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="cidade">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Cidade</Form.Label>
            <Form.Control
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              isInvalid={!!formErrors.cidade}
            />
            <Form.Control.Feedback type="invalid">{formErrors.cidade}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="estado">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Estado</Form.Label>
            <Form.Control
              as="select"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              isInvalid={!!formErrors.estado}
            >
              <option value="">Selecione</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">{formErrors.estado}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="logradouro" md="8">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleInputChange}
              isInvalid={!!formErrors.logradouro}
            />
            <Form.Control.Feedback type="invalid">{formErrors.logradouro}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="numero" md="4">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Número</Form.Label>
            <Form.Control
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="complemento">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Complemento</Form.Label>
            <Form.Control
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="bairro">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Bairro</Form.Label>
            <Form.Control
              type="text"
              name="bairro"
              value={formData.bairro}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-5">
          <Form.Group as={Col} controlId="portabilidade" md="3">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Portabilidade</Form.Label>
            <Form.Control
              as="select"
              name="portabilidade"
              value={formData.portabilidade}
              onChange={changePortabilidade}
              disabled={disabledE}
            >
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="ddd" md="3">
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>DDD</Form.Label>
            <Form.Control
              type="text"
              name="ddd"
              value={formData.ddd}
              onChange={handleInputChange}
              disabled={disabledE}
              ref={maskDDD}
              isInvalid={!!formErrors.ddd}
            />
            <Form.Control.Feedback type="invalid">{formErrors.ddd}</Form.Control.Feedback>
          </Form.Group>

          {formData.portabilidade == "1" && <Form.Group as={Col} controlId="numeroLinha" >
            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Número da Linha</Form.Label>
            <Form.Control
              type="text"
              name="numeroLinha"
              value={formData.numeroLinha}
              onChange={handleInputChange}
              ref={maskTelefone}
              disabled={disabledE}
              isInvalid={!!formErrors.numeroLinha}
            />
            <Form.Control.Feedback type="invalid">{formErrors.numeroLinha}</Form.Control.Feedback>
          </Form.Group>}
        </Row>
        <Row className="mb-6">
          <Form.Group as={Col} controlId="portabilidade" md="12">
            <Form.Check
              type="switch"
              id="privacyPolicy"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              label={
                <span className={`${styles.linkPrivacidade}`}>
                  Eu concordo com os
                  <Button onClick={handleShowPrivacidade}>
                    termos de privacidade.
                  </Button>
                </span>
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-6">
          <Form.Group as={Col} controlId="adesao" md="12">
            <Form.Check
              type="switch"
              id="membershipPolicy"
              checked={isAdesao}
              onChange={handleAdesaoChange}
              label={
                <span className={`${styles.linkPrivacidade}`}>
                  Eu concordo com os
                  <Button onClick={handleShowAdesao}>
                    termos de adesão.
                  </Button>
                </span>
              }
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" disabled={isSubmitting} className={`w-100 ${styles.submitButton}`}>
          {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
        </Button>
        {formErrors.apiError && <p className={styles.apiError}>{formErrors.apiError}</p>}
      </Form>
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ocorreu um erro ao enviar os dados. Por favor, tente novamente.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShowErrorModal(false), setIsSubmitting(false) }}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className="modal-xl" show={showPrivacidadeModal} onHide={handleClosePrivacidade}>
        <Modal.Header closeButton>
          <Modal.Title>Política de privacidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermosPrivacidade />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacidade}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className="modal-xl" show={showAdesaoModal} onHide={handleCloseAdesao}>
        <Modal.Header closeButton>
          <Modal.Title>Política de adesão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermosdeAdesao />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdesao}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClientForm;
