const KakaoUtil = require("../KakaoUtil");
const kakaoUtil = new KakaoUtil();
const { User } = require("../models/User");
const redisClient = require("../redis");

const userController = {
  /**
   * @description 카카오 인가 코드 받기
   */
  getKakaoAuthCode: (req, res) => {
    console.log("===== /kakao/oauth/authorize start =====");

    const authCode = kakaoUtil.getAuthCode();

    res.status(200).json({ url: authCode });
    console.log(`authCode : ${authCode}`);

    console.log("===== /kakao/oauth/authorize end =====");
  },
  /**
   * @description 카카오 로그인
   */
  kakaoLogin: async (req, res) => {
    console.log("===== /login start =====");

    try {
      const { code } = req.body;
      const { access_token, refresh_token } = await kakaoUtil.getToken(code);
      const userData = await kakaoUtil.getUserData(access_token);

      req.session.user = userData;
      res.cookie("access_token", access_token, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
      });

      redisClient.set(userData.userId.toString(), refresh_token);
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);

      const errorData = {
        message: "Internal server error.. :(",
      };
      res.status(500).json(errorData);
    }

    console.log("===== /login end =====");
  },
  /**
   * @description 카카오 로그아웃
   */
  kakaoLogout: async (req, res) => {
    console.log("===== /logout start =====");

    const logoutRedirectUri = kakaoUtil.getLogoutRedirectUri();

    res.status(200).json({ url: logoutRedirectUri });
    console.log(`logoutRedirectUri : ${logoutRedirectUri}`);

    console.log("===== /logout end =====");
  },
  /**
   * @description 카카오 토큰 갱신하기
   */
  updateKakaoAuthToken: async (req, res) => {
    console.log("===== /kakao/oauth/token start =====");

    redisClient.get("3022227764").then(async (refreshToken) => {
      const { access_token, refresh_token } = await kakaoUtil.updateToken(
        refreshToken
      );

      res.status(200).json({ access_token, refresh_token });
    });

    console.log("===== /kakao/oauth/token end =====");
  },
  /**
   * @description 카카오 사용자 정보 가져오기
   */
  getKakaoUserInfo: async (req, res) => {
    console.log("===== /kakao/user/me start =====");

    try {
      console.log("맛있는 쿠키: " + req.cookies["access_token"]);
      const userData = await kakaoUtil.getUserData(req.cookies["access_token"]);
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);

      const errorData = {
        message: "Internal server error.. :(",
      };
      res.status(500).json(errorData);
    }

    console.log("===== /kakao/user/me end =====");
  },
  /**
   * @description 사용자 등록
   */
  registerUser: async (req, res) => async (request, response) => {
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
  },
  /**
   * @description 쿠키 가져오기
   */
  getCookies: (req, res) => {
    res.send(req.cookies);
  },
  /**
   * @description 세션 가져오기
   */
  getSession: (req, res) => {
    if (req.session) {
      console.log("Session : " + JSON.stringify(req.session.user));
      res.send(req.session);
    } else {
      console.log("Sorry, no session...");
      res.send({ result: "failed!!" });
    }
  },
};

module.exports = userController;
