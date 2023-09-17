import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  /**
   * @description 카카오 로그인
   */
  const fetchKakaoLogin = useCallback(
    async (code) => {
      try {
        const params = {
          code,
        };

        const response = await (
          await fetch("http://localhost:8080/kakao/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(params),
          })
        ).json();

        console.log(response);

        // navigate("/home");
      } catch (error) {
        alert("Function fetchLogin error!");
        console.error(error);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (code) {
      fetchKakaoLogin(code);
    }
  }, [code, fetchKakaoLogin]);

  useEffect(() => {
    const address = new URL(window.location.href);
    const code = address.searchParams.get("code") || "";

    setCode(code);
  }, []);

  return <div className="App">Loading...</div>;
};

export default KakaoCallback;
