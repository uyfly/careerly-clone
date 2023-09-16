const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
