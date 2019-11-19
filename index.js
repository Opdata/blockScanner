const express = require("express");
const app = express();
const Web3 = require("web3");
const port = 3000;
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get("/", function(req, res) {
  console.log(web3);
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(req, res) {
  console.log(`example app port ${port}`);
});
