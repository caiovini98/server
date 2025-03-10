const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World! - Server is running"));

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
