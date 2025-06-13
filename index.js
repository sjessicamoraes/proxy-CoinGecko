import express from 'express';
import priceRoute from './src/routes/price.js';
import statusRoute from './src/status.js';
import historyRoute from './src/routes/history.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/price', priceRoute);
app.use('/status', statusRoute);
app.use('/history', historyRoute);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
