const express = require("express");
const data = require("./data");

const app = express();

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:5000',
        logLevel: 'debug',
        changeOrigin: true
    }));
};

app.get("/api/products", (req, res) => {
  res.send(data.data.products);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
  