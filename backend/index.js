const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// 세션 확인 및 로그인 페이지로 리디렉션하는 미들웨어
// const checkSession = (req, res, next) => {
//   if (req.session && req.session.user) {
//     console.log("세션있음");
//   } else {
//     console.log("세션없음");
//     // res.redirect("/login");
//   }
// };

// 모든 페이지에서 세션 확인 미들웨어 사용
// app.use(checkSession);

// 메인 페이지 라우트
app.get("/home", (request, response) => {
  if (!request.session) {
    // 인증된 사용자라면 메인 페이지 렌더링
    response.send("메인 페이지, 사용자 : " + JSON.stringify(request.session));
  } else {
    // 인증되지 않은 사용자는 로그인 페이지로 리디렉션
    response.redirect("/login");
  }
});
