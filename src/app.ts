import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.post('/somar', (req: Request, res: Response) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 + numero2;
    return res.json({ resultado });
});

app.post('/multiplicar', (req: Request, res: Response) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 * numero2;
    return res.json({ resultado });
});

app.post('/dividir', (req: Request, res: Response) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 / numero2;
    return res.json({ resultado });
});
  
app.post('/subtrair', (req: Request, res: Response) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 - numero2;
    return res.json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


