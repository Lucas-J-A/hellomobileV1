// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const plans = [
      {
      "idPlano": 2013,
      "nome": "CONTROLE START 10GB",
      "valor": 49.9,
      "gbFixo": 10,
      "gbBonus": 0,
      "descricao": "Para os apaixonados por filmes, séries e vídeos, aqui você tem conteúdo e mais GB para a sua diversão.",
      "minutos": "1000",
      "sms": "120",
      "cobertura": "4G/5G",
      "chipHello": 0,
      "frete": 0,
      "beneficios": [
          {
              "5656": "Start Lineares",
              "5663": "UOL Leia+"
          }
      ]
    },
    {
    "idPlano": 2014,
    "nome": "CONTROLE ESSENTIALS + MAX 20GB",
    "valor": 69.9,
    "gbFixo": 20,
    "gbBonus": 0,
    "descricao": "Para os apaixonados por filmes, séries e vídeos, aqui você tem conteúdo e mais GB para a sua diversão.",
    "minutos": "1000",
    "sms": "120",
    "cobertura": "4G/5G",
    "chipHello": 0,
    "frete": 0,
    "beneficios": [
        {
            "5658": "Up + Lineares",
            "5663": "UOL Leia+",
            "5664": "HBO"
        }
    ]
  }
];
  res.status(200).json(plans);
};

export default handler;