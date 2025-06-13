import express from "express";
import { history } from "./price.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(history);
});

export default router;