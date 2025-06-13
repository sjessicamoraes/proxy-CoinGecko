import express from 'express';
import priceRouter from './src/routes/price.js';
import statusRouter from './src/status.js';
import historyRouter from './src/routes/history.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/price', priceRouter);
app.use('/status', statusRouter);
app.use('/history', historyRouter);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
