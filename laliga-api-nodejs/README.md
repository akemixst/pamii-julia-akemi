# ⚽ LaLiga Player API

API REST desenvolvida em **Node.js + Express** para pesquisar jogadores e clubes da LaLiga.

## 🚀 Instalação

```bash
npm install
```

## ▶️ Executar

```bash
npm start
```

Para desenvolvimento:

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## 🔎 Endpoints

### Listar jogadores

```http
GET /api/players
```

### Pesquisar jogador

```http
GET /api/players/search?q=vinicius
```

Também é possível pesquisar por clube, posição ou nacionalidade:

```http
GET /api/players/search?q=Real%20Madrid
```

### Buscar jogador pelo ID

```http
GET /api/players/5
```

### Buscar jogadores de um clube

```http
GET /api/players/club/Real%20Madrid
```

### Listar clubes

```http
GET /api/clubs
```

## 📱 Usando com React Native / Expo

Exemplo:

```javascript
const response = await fetch(
  "http://SEU_IP:3000/api/players/search?q=vinicius"
);

const data = await response.json();

console.log(data.players);
```

> No celular físico, não use `localhost`. Use o IP da máquina que está executando a API, por exemplo `192.168.1.10`.

## 🛠️ Tecnologias

- Node.js
- Express
- CORS
- JavaScript




