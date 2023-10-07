require("dotenv").config();

class KakaoUtil {
  constructor() {
    this.clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
    this.redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    this.logoutRedirectUri = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;
  }

  /**
   * @description 인가 코드 받기
   */
  getAuthCode() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code`;
  }

  /**
   * @description 카카오계정과 함께 로그아웃
   */
  getLogoutRedirectUri() {
    return `https://kauth.kakao.com/oauth/logout?client_id=${this.clientId}&logout_redirect_uri=${this.logoutRedirectUri}`;
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
   * @description 토큰 갱신하기
   * @param refresh_token
   */
  async updateToken(refresh_token) {
    const params = {
      grant_type: "refresh_token",
      client_id: this.clientId,
      refresh_token,
    };

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

    console.log(`updateToken data : ${JSON.stringify(data)}`);

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
      name: data.kakao_account.profile.nickname,
      email: data.kakao_account.email,
      image: data.kakao_account.profile.profile_image_url,
      userId: data.id,
      accessToken: token,
    };

    return userData;
  }
}

module.exports = KakaoUtil;
