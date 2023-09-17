require("dotenv").config();

class KakaoUtil {
  constructor() {
    this.clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
    this.redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  }

  /**
   * @description 인가 코드 받기
   */
  getAuthCode() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code`;
  }

  /**
   * @description 토큰 받기
   * @param 인가 코드
   */
  async getToken(code) {
    const params = {
      grant_type: "authorization_code",
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      code,
    };

    // const { data } = await axios.post(
    //   "https://kauth.kakao.com/oauth/token",
    //   params,
    //   {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //     },
    //   }
    // );

    const data = await (
      await fetch(
        `https://kauth.kakao.com/oauth/token?${new URLSearchParams(
          params
        ).toString()}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
    ).json();

    console.log(`getToken data : ${JSON.stringify(data)}`);

    const tokenData = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    };

    return tokenData;
  }

  /**
   * @description 사용자 정보 가져오기
   * @param 엑세스 토큰
   */
  async getUserData(token) {
    // const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //   },
    // });

    const data = await (
      await fetch("https://kapi.kakao.com/v2/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
    ).json();

    console.log(`getUserData data : ${JSON.stringify(data)}`);

    const userData = {
      nickname: data.kakao_account.profile.nickname,
    };

    return userData;
  }
}

module.exports = KakaoUtil;
