const express = require("express");
const cors = require("cors");

const app = express();

const transactionControllers = require("./controllers/transactionControllers");

app.use(express.json());

app.use(cors());

app.use("/transactions", transactionControllers);

// HOME ROUTE
app.get("/", (req, res) => {
  console.log("GET request to /");
  res.send("Here's Your Budget Log");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.delete("/transactions/:index", (request, response) => {
  if (transactionsArray[request.params.index]) {
    const [deletedTransaction] = transactionsArray.splice(
      request.params.index,
      1
    );
    response.status(200).json(deletedTransaction);
  }
});

module.exports = app;
