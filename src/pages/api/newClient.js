export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('https://dashboard.mvnobrasil.com.br/api/v1/dev/newClient/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          res.status(200).json(result);
        } else {
          res.status(response.status).json(result);
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  