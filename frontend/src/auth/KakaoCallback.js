import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../store/userSlice";
import { useDispatch } from "react-redux";

const KakaoCallback = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @description 카카오 로그인
   */
  const fetchKakaoLogin = async (code) => {
    try {
      const params = {
        code,
      };

      await fetch("/users/kakao/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(params),
      })
        .then((res) => res.json())
        .then((user) => dispatch(login(user)))
        .then(navigate("/home"));

      // const response = await fetch("/users/kakao/login", {
      //   method: "POST",
      //   headers: { "Content-type": "application/json" },
      //   body: JSON.stringify(params),
      // });

      // if (response.ok) {
      //   const user = await response.json();
      //   await fetch("/users/getCookies", {
      //     method: "GET",
      //   })
      //     .then((res) => res.json())
      //     .then((data) =>
      //       dispatch(
      //         login({
      //           user,
      //           access_token: data.access_token,
      //         })
      //       )
      //     )
      //     .then(navigate("/home"));
      //   console.log("로그인 되었습니다.");
      // } else {
      //   console.log("로그인 실패");
      // }
    } catch (error) {
      alert("Function fetchLogin error!");
      console.error(error);
    }
  };

  /**
   * @description 카카오 로그아웃
   */
  const fetchKakaoLogout = () => {
    console.log("로그아웃 되었습니다.");
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const address = new URL(window.location.href);
    const code = address.searchParams.get("code") || "";

    setCode(code);
    code ? fetchKakaoLogin(code) : fetchKakaoLogout();
  }, []);

  return <div className="App">Loading...</div>;
};

export default KakaoCallback;
