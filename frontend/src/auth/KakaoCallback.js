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
        .then(() => {
          console.log("로그인 되었습니다.");
          navigate("/home");
        })
        .catch((err) => console.log("로그인 실패 :" + err));
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
