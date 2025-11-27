const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Boa Noite!");

});

const port = 3000;
app.listen(port, () => console.log("Servidor rodando na porta " + port));

module.exports = app;
