import { useCallback, useEffect, useState } from "react";
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
  const fetchKakaoLogin = useCallback(
    async (code) => {
      try {
        console.log("로그인 되었습니다.");
        const params = {
          code,
        };

        const response = await (
          await fetch("/kakao/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(params),
          })
        ).json();

        const userData = response;

        dispatch(login(userData));

        navigate("/home");
      } catch (error) {
        alert("Function fetchLogin error!");
        console.error(error);
      }
    },
    [navigate]
  );

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
