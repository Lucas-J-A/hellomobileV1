import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getTarifas = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idPlano } = req.query;

  try {
    const response = await axios.post('https://mvnopro.com.br/api/v1/dev/getHelloTariffs/');
    let data = response.data.map((item: any) => ({
      ...item,
      img: `/img/planos/${item["idPlano"]}.png`,
    }));

    if (idPlano) {
      data = data.filter((item: any) => item["idPlano"] === idPlano);
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
