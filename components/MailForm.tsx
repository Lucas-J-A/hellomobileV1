import React, { useState } from 'react';
import { Form, Button, Modal, Col, Row, Container } from 'react-bootstrap';
import styles from '../src/styles/ClientMailForm.module.css';
import { useMask } from '@react-input/mask';
import Typography from '@mui/material/Typography';

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface FormData {
    nome: string;
    email: string;
    telefoneContato: string;
    departamentos: string;
    assunto: string;
    mensagem: string;
}

const MailForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefoneContato: '',
        departamentos: '',
        assunto: '',
        mensagem: '',
    });

    const maskTelefoneDDD = useMask({ mask: '(__) _____-____', replacement: { _: /\d/ } });
    const departamentos = ["Suporte ao Cliente", "Marketing", "Parcerias", "Ouvidoria", "Trabalhe Conosco", "Assessoria de Imprensa"];

    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const validateForm = () => {
        let errors: { [key: string]: string } = {};
        if (!formData.nome) errors.nome = 'Nome é obrigatório';
        if (!formData.email) errors.email = 'E-mail é obrigatório';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) errors.email = 'E-mail inválido';
        if (!formData.telefoneContato) errors.telefoneContato = 'Telefone de contato é obrigatório';
        if (!formData.departamentos) errors.departamentos = 'Por favor, escolha um departamento';
        if (!formData.assunto) errors.assunto = 'Sua mensagem precisa de um assunto';
        if (!formData.mensagem) errors.mensagem = 'Conteúdo da mensagem é obrigatório';
        else if (formData.mensagem.length > 720) errors.mensagem = 'A mensagem deve ter no máximo 720 caracteres';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (event: React.ChangeEvent<FormControlElement>) => {
        const { name, value } = event.target;
        let cleanedValue = value;
        
        if (name !== 'mensagem') {
            cleanedValue = value.replace(/[^\w\s@.-]/gi, '').replace(/ç/g, 'c');
        }
        
        if (name === 'mensagem') {
            cleanedValue = value.slice(0, 720);
        }

        setFormData({ ...formData, [name]: cleanedValue });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            try {
                const response = await fetch('/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setShowSuccessModal(true);
                    setFormData({
                        nome: '',
                        email: '',
                        telefoneContato: '',
                        departamentos: '',
                        assunto: '',
                        mensagem: '',
                    });
                } else {
                    throw new Error('Falha ao enviar mensagem');
                }
            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);
                setShowErrorModal(true);
            }
        } else {
            setShowErrorModal(true);
        }

        setIsSubmitting(false);
    };

    return (
        <Container className="text-black pt-2 w-100 mt-2 px-2">
            <Typography component={'p'} variant={'h3'} className={` ${styles.campoMailTitle}`}>
                Envie-nos uma mensagem!
            </Typography>
            
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nome">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.nome}
                            />
                            <Form.Control.Feedback type="invalid">{formErrors.nome}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.email}
                            />
                            <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="telefoneContato">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>
                                Telefone de Contato
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="telefoneContato"
                                value={formData.telefoneContato}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.telefoneContato}
                                ref={maskTelefoneDDD}
                                placeholder="(__) 9____-____"
                            />
                            <Form.Control.Feedback type="invalid">{formErrors.telefoneContato}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="departamentos">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Departamento</Form.Label>
                            <Form.Control
                                as="select"
                                name="departamentos"
                                value={formData.departamentos}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.departamentos}
                            >
                                <option value="">Selecione um departamento</option>
                                {departamentos.map((dept, index) => (
                                    <option key={index} value={dept}>{dept}</option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">{formErrors.departamentos}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="assunto">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Assunto do e-mail:</Form.Label>
                            <Form.Control 
                                type="text"
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.assunto}
                            />
                            <Form.Control.Feedback type="invalid">{formErrors.assunto}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="mensagem">
                            <Form.Label className={`text-muted mb-0 pt-0 ${styles.labelCadastro}`}>Digite a sua mensagem:</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={4}
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleInputChange}
                                isInvalid={!!formErrors.mensagem}
                                maxLength={720}
                            />
                            <Form.Control.Feedback type="invalid">{formErrors.mensagem}</Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                {formData.mensagem.length}/720 caracteres
                            </Form.Text>
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit" 
                            disabled={isSubmitting} 
                            className={`w-100 ${styles.submitButton}`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                        </Button>            
                    </Form>
                </Col>
                <Col></Col>

                <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mensagem Enviada</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Mensagem enviada com sucesso. Iremos te responder o mais breve possível. Uma cópia da sua mensagem também foi enviada para o seu e-mail.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Erro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    );
}

export default MailForm;