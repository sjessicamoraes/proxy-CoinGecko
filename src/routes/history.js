import express from "express";
import { history } from "./price.js";

const router = express.Router();

router.get('/', (req, res) => {
    const { coin } = req.query;

    if(coin) {
        const filtered = history.filter(entry => entry.coin === coin.toLowerCase());

        if(filtered.length === 0) {
            return res.status(404).json({ error: `Nenhum histórico encontrado para "${coin}"` });
        }

        return res.json(filtered);
    }
    return res.json(history);
});

router.delete('/', (req, res) => {
    history.length = 0;
    res.status(200).json({ message: 'Histórico limpo com sucesso' });
});

export default router;