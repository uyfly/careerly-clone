import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const code = new URL(document.location.toString()).searchParams.get("code");
  const grantType = "authorization_code";
  const clientId = `${process.env.REACT_APP_KAKAO_CLIENT_ID}`;
  const redirectUri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${clientId}&redirect_uri=${redirectUri}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log("auth token received : " + JSON.stringify(response));
        const { access_token } = response.data;

        if (access_token) {
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
              }
            )
            .then((response) => {
              console.log("user data api call : " + JSON.stringify(response));
            });
        }
      });

    navigate("/home");
  }, []);

  return <p>KakaoLogin Success</p>;
};

export default KakaoCallback;
