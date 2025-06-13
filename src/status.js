import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'online', service: 'CoinGecko Proxy' });
});

export default router;
