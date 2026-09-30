const express = require("express");
const cors = require("cors");
const { players, clubs } = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "LaLiga Player API",
    version: "1.0.0",
    endpoints: {
      players: "GET /api/players",
      search: "GET /api/players/search?q=vinicius",
      byId: "GET /api/players/5",
      byClub: "GET /api/players/club/Real%20Madrid",
      clubs: "GET /api/clubs"
    }
  });
});

app.get("/api/players", (req, res) => {
  res.json(players);
});

app.get("/api/players/search", (req, res) => {
  const q = String(req.query.q || "").trim().toLowerCase();

  if (!q) {
    return res.status(400).json({
      error: "Informe um termo de pesquisa usando ?q="
    });
  }

  const results = players.filter((player) =>
    player.name.toLowerCase().includes(q) ||
    player.club.toLowerCase().includes(q) ||
    player.position.toLowerCase().includes(q) ||
    player.nationality.toLowerCase().includes(q)
  );

  res.json({
    query: q,
    total: results.length,
    players: results
  });
});

app.get("/api/players/club/:club", (req, res) => {
  const club = decodeURIComponent(req.params.club).toLowerCase();

  const results = players.filter(
    (player) => player.club.toLowerCase() === club
  );

  res.json({
    club: req.params.club,
    total: results.length,
    players: results
  });
});

app.get("/api/players/:id", (req, res) => {
  const player = players.find((p) => p.id === Number(req.params.id));

  if (!player) {
    return res.status(404).json({
      error: "Jogador não encontrado"
    });
  }

  res.json(player);
});

app.get("/api/clubs", (req, res) => {
  res.json(clubs);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});