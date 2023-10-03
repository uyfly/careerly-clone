const KakaoUtil = require("../KakaoUtil");
const kakaoUtil = new KakaoUtil();
const { User } = require("../models/User");

const userController = {
  /**
   * @description 인가 코드 받기
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
  getKakaoLogin: async (req, res) => {
    console.log("===== /login start =====");

    try {
      const { code } = req.body;
      const { access_token } = await kakaoUtil.getToken(code);
      const userData = await kakaoUtil.getUserData(access_token);

      req.session.user = userData;
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
  getKakaoLogout: async (req, res) => {
    console.log("===== /logout start =====");

    const logoutRedirectUri = kakaoUtil.getLogoutRedirectUri();

    res.status(200).json({ url: logoutRedirectUri });
    console.log(`logoutRedirectUri : ${logoutRedirectUri}`);

    console.log("===== /logout end =====");
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
};

module.exports = userController;
