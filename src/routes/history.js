import express from "express";
import { history } from "./price.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(history);
});

router.delete('/', (req, res) => {
    history.length = 0;
    res.status(200).json({ message: 'Histórico limpo com sucesso' });
});

export default router;