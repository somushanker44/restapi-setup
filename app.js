const express = require("express");

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("we are on home page");
});

app.post("/posts", (req, res) => {
  res.send("we are on posts page");
});

// How to start listening to the server
app.listen(9999);
