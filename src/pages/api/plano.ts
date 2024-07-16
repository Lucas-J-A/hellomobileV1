import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}


const getTarifas = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idPlano } = req.query;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  const Url = baseUrl + "/api/tarifas";

  try {
    const response = await axios.post(Url);
    let data = response.data.map((item: any) => ({
      ...item,
    }));

    if (idPlano) {
      data = data.filter((item: any) => item["idPlano"] == idPlano);
    }

    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Tarifa não encontrada." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados da tarifa.", error: "error 567" });
  }
};

export default getTarifas;
