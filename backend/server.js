const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/api/user", (req, res) => {
  // res.send("hello");
  res.json({ message: "Welcome to the Support Desk API" });
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
