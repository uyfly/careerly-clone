const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("./models/User");

const app = express();

mongoose
  .connect(
    "mongodb+srv://kwy120:fbw8yip237!@cluster0.8euidl6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret_key", // 변경 필요
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // HTTPS를 사용하는 경우 true로 설정
      maxAge: 3600000, // 세션 만료 시간 (1시간)
    },
  })
);

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

// 로그인 페이지 라우트
app.get("/login", (request, response) => {
  // 로그인 페이지 렌더링
});

// 로그아웃 라우트
app.get("/logout", (request, response) => {
  request.logout();
  response.redirect("/login");
});

app.use(express.json());
const cors = require("cors");
const KakaoUtil = require("./KakaoUtil");
app.use(cors());

const kakaoUtil = new KakaoUtil();

app.listen(8080, () => {
  console.log("서버가 http://localhost:8080 에서 실행 중입니다.");
});

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/", function (request, response) {
//   response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

// app.get("*", function (request, response) {
//   response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.use(express.static("public"));

app.get("/kakao/oauth/authorize", (request, response) => {
  console.log("===== /kakao/oauth/authorize start =====");

  const authCode = kakaoUtil.getAuthCode();

  response.status(200).json({ url: authCode });
  console.log(`authCode : ${authCode}`);

  console.log("===== /kakao/oauth/authorize end =====");
});

app.post("/kakao/login", async (request, response, next) => {
  console.log("===== /login start =====");

  try {
    const { code } = request.body;
    console.log(code);
    const { access_token } = await kakaoUtil.getToken(code);
    const userData = await kakaoUtil.getUserData(access_token);

    request.session.user = userData;
    response.status(200).json(userData);
  } catch (error) {
    console.error(error);

    const errorData = {
      message: "Internal server error.. :(",
    };
    response.status(500).json(errorData);
  }

  console.log("===== /login end =====");
});

app.get("/kakao/logout", async (request, response) => {
  console.log("===== /logout start =====");

  const logoutRedirectUri = kakaoUtil.getLogoutRedirectUri();

  response.status(200).json({ url: logoutRedirectUri });
  console.log(`logoutRedirectUri : ${logoutRedirectUri}`);

  console.log("===== /logout end =====");
});

app.post("/register", async (request, response) => {
  // body parser를 통해 body에 담긴 정보를 가져온다
  const user = new User(request.body);

  // mongoDB 메서드, user 모델에 저장
  const result = await user
    .save()
    .then(() => {
      response.status(200).json({
        success: true,
      });
    })
    .catch((error) => {
      response.json({ success: false, error });
    });
});
