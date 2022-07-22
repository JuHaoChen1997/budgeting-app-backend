//Dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const transacrionsController = require("./controllers/transactions.controller");

//___________________
//Middleware
//___________________

app.use(express.json()); // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

app.use("/transactions", transacrionsController);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Error Page
app.use("/*", (req, res) => {
  res.send("Error Page");
});

module.exports = app;
