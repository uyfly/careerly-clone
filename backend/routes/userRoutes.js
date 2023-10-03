const express = require("express");
const session = require("express-session");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(
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

// 인가 코드 받기
router.get("/kakao/oauth/authorize", userController.getKakaoAuthCode);
// 카카오 로그인
router.post("/kakao/login", userController.getKakaoLogin);
// 카카오 로그아웃
router.get("/kakao/logout", userController.getKakaoLogout);
// 사용자 등록
router.post("/register");

module.exports = router;
