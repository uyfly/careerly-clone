const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
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
  }),
  cookieParser()
);

// 카카오 인가 코드 받기
router.get("/kakao/oauth/authorize", userController.getKakaoAuthCode);
// 카카오 로그인
router.post("/kakao/login", userController.kakaoLogin);
// 카카오 로그아웃
router.get("/kakao/logout", userController.kakaoLogout);
// 카카오 토큰 갱신하기
router.post("/kakao/oauth/token", userController.updateKakaoAuthToken);
// 카카오 사용자 정보 가져오기
router.get("/kakao/user/me", userController.getKakaoUserInfo);
// 사용자 등록
router.post("/register", userController.registerUser);
// 쿠키 가져오기
router.get("/getCookies", userController.getCookies);
// 세션 가져오기
router.get("/getSession", userController.getSession);

module.exports = router;
