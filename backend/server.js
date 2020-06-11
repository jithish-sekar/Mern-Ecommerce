const express = require("express");
const data = require("./data");

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.data.products);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
  