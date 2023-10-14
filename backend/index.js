const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MemoryStore = require("memorystore")(session);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret_key", // 변경 필요
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod: 60 * 60 * 1000 }),
  }),
  cookieParser()
);

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const cors = require("cors");
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.REACT_APP_MONGODB_ID}:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.8euidl6.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((error) => console.log(error));

app.listen(8080, () => {
  console.log("서버가 http://localhost:8080 에서 실행 중입니다.");
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
