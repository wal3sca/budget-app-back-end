const express = require("express");
const transactionsArray = require("../models/transactions");
const transactions = express.Router();

// ROUTES
transactions.get("/", (_, res) => {
  console.log("GET request to / transactions");
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  console.log("GET request received to route: /transactions/:arrayIndex");
  const { id } = req.params;
  res.status(200).json(transactionsArray[id]);
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.status(201).json(transactionsArray);
});

// replace the object at id with another object
// input: new object
// output: array
transactions.put("/:id", (req, res) => {
  transactionsArray.splice(req.params.id, 1, req.body);
  res.status(200).json(transactionsArray);
});

//req.params.id === :id
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (!transactionsArray[id]) {
    const [deleteTransaction] = transactionsArray.splice(id, i);
    res.status(200).json(deleteTransaction);
  } else {
    res.status(404);
  }
});

module.exports = transactions;
