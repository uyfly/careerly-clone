const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
const cors = require("cors");
const KakaoUtil = require("./KakaoUtil");
app.use(cors());

const kakaoUtil = new KakaoUtil();

app.listen(8080, () => {
  console.log("listening on 8080");
});

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/", function (request, response) {
//   response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

// app.get("*", function (request, response) {
//   response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.get("/kakao/oauth/authorize", (request, response) => {
  console.log("===== /kakao/oauth/authorize start =====");

  const authCode = kakaoUtil.getAuthCode();

  response.status(200).json({ url: authCode });
  console.log(`authCode : ${authCode}`);

  console.log("===== /kakao/oauth/authorize end =====");
});

// app.post("/kakao/oauth/token", (request, response) => {
//   console.log("===== /kakao/oauth/token start =====");

//   const code = request.body.code;
//   const token = kakaoUtil.getToken(code);

//   response.status(200).json({ url: token });

//   console.log("===== /kakao/oauth/token end =====");
// });

app.post("/kakao/login", async (request, response, next) => {
  console.log("===== /login start =====");

  try {
    const { code } = request.body;
    console.log(code);
    const { access_token } = await kakaoUtil.getToken(code);
    const userData = await kakaoUtil.getUserData(access_token);

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
