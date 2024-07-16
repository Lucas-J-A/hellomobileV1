// components/RightSidebarModal.tsx
import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import axios from 'axios';

interface RightSidebarModalProps {
  id: string;
  show: boolean;
  handleClose: () => void;
}

interface Plano {
    idPlano: string;
    nome: string;
    gb: string;
    descricao: string;
    qtd: string;
    bonus: string;
    imagem: string;
    valor: string;
    url: string;
    minutos: string;
    sms: string;
    cobertura: string;
    chipHello: string;
    frete: string;
    total: string;
  }

const RightSidebarModal: React.FC<RightSidebarModalProps> = ({ id, show, handleClose }) => {
    const [plano, setPlano] = useState<Plano | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
          const fetchTarifa = async () => {
            try {
              const response = await axios.get(`/api/planos?idPlano=${id}`);
              if (response.data.length > 0) {
                setPlano(response.data[0]);
              } else {
                setError("Tarifa não encontrada.");
              }
            } catch (err) {
              setError("Erro ao buscar dados da tarifa.");
            } finally {
              setLoading(false);
            }
          };
          fetchTarifa();
        }
      }, [id]);


  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{plano?.nome}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Conteúdo do modal para o ID: {id}</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RightSidebarModal;
