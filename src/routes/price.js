import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const history = [];
const cache = new Map();

router.get('/:coin', async (req, res) => {
  const { coin } = req.params;

  try {
    const cached = cache.get(coin);
    const now = Date.now();

    if (cached && now - cached.timestamp < 60000) {
      console.log('⚡ Retornando do cache');

      history.push({
       coin,
        price_usd: cached.price_usd,
        timestamp: new Date().toISOString(),
        cached: true
      });

      if (history.length > 50) {
        history.shift();
      }

      console.log(history);

      return res.json({
        coin,
        price_usd: cached.price_usd,
        cached: true
      });
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    );

    if (!response.ok) {
      return res.status(502).json({ error: 'Erro ao consultar CoinGecko' });
    }

    const data = await response.json();

    if (!data[coin]) {
      return res.status(404).json({ error: 'Criptomoeda não encontrada' });
    }

    const price = data[coin].usd;
    const timestamp = new Date().toISOString();

    cache.set(coin, {
      price_usd: price,
      timestamp: now
    });

    history.push({
      coin,
      price_usd: price,
      timestamp,
      cached: false
    });

    if (history.length > 50) {
      history.shift();
    }

    return res.json({
      coin,
      price_usd: price,
      cached: false
    });


  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao consultar API externa' });
  }
});

export { router as default, history };
