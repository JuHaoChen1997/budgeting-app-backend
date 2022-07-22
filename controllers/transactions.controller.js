const express = require("express");
const transaction = express.Router();
const transactionsData = require("../models/transacrions");

//show
transaction.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsData[index]) {
    res.json(transactionsData[index]);
  } else {
    res.status(404).send("Can not found the transaction");
  }
});

//index
transaction.get("/", (req, res) => {
  res.json(transactionsData);
});

//create
transaction.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.send("Successfully added new transaction");
});

//delete
transaction.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsData[index]) {
    const removedTransacation = transactionsData.splice(index, 1);
    res.json(removedTransacation);
  } else {
    res.status(404).send("Can not delete the transaction");
  }
});

//update
transaction.put("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsData[index]) {
    transactionsData[index] = req.body;
    res.json(req.body);
  } else {
    res.status(404).send("Can not update the transaction");
  }
});

module.exports = transaction;
