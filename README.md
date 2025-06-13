# 💱 CoinGecko Proxy API

API intermediária que consulta dados de preço de criptomoedas na CoinGecko, com cache e histórico local.

---

## 🚀 Funcionalidades

- Consulta de preço em tempo real via CoinGecko
- Cache com expiração (1 minuto por moeda)
- Histórico das últimas 50 requisições
- Filtro de histórico por moeda
- Limpeza manual do histórico (`DELETE /history`)
- Validação de moedas permitidas

---

## 📦 Instalação

```bash
git clone https://github.com/sjessicamoraes/proxy-api-service.git
cd proxy-api-service
npm install
npm start
```

---

## 🔧 Rotas disponíveis

### `GET /price/:coin`

Retorna o preço em USD da moeda solicitada (com cache de 1 minuto).

**Exemplo:**

```bash
curl http://localhost:3000/price/bitcoin
```

**Resposta:**

```json
{
  "coin": "bitcoin",
  "price_usd": 104849,
  "cached": false
}
```

---

### `GET /history`

Retorna o histórico das últimas 50 requisições.

**Exemplo:**

```bash
curl http://localhost:3000/history
```

**Com filtro:**

```bash
curl http://localhost:3000/history?coin=bitcoin
```

---

### `DELETE /history`

Remove todo o histórico da memória.

```bash
curl -X DELETE http://localhost:3000/history
```

---

## 🔐 Moedas suportadas

Atualmente são aceitas as seguintes moedas:

- bitcoin
- ethereum
- dogecoin
- litecoin
- solana

Outras moedas serão rejeitadas com erro 400.

---

## 🧪 Testes

Em breve...

---

## ☁️ Deploy

Em breve: será feito o deploy na [Render](https://render.com) ou [Railway](https://railway.app).

---

## 🧑‍💻 Desenvolvido por

Jessica Moraes – [jessicamoraes.dev](https://jessicamoraes.dev)
