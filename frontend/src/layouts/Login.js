import React from "react";
import "../tailwind.css";
import kakao from "../assets/images/img/img_symbol_kakao.png";
import apple from "../assets/images/img/img_symbol_apple.png";
import { ReactComponent as Arrow } from "../assets/images/ico/ico_arrow.svg";
import { ReactComponent as Logo } from "../assets/images/logos/logo.svg";
import Footer from "./Footer";

const Login = () => {
  const kakaoLoginHandler = async () => {
    await fetch("http://localhost:8080/kakao/oauth/authorize", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => (document.location.href = data.url));
  };

  const emailChangeHandler = () => {};

  return (
    <>
      <nav className="h-14 border-0 border-b border-solid border-color-slate-300 bor bg-color-slate-50 !border-b-0 fixed w-full z-[5]">
        <div className="bg-white flex justify-between w-full h-full max-w-screen-md mx-auto px-2 md:px-4 border border-solid border-slate-300 border-t-0 border-x-0 md:border-x">
          <div className="flex items-center">
            <a href="" className="w-[94px] h-6 m-2 false">
              <Logo />
            </a>
          </div>
        </div>
      </nav>
      <div className="h-14"></div>
      <div className="bg-slate-50 flex flex-col w-full min-h-[calc(100vh-56px)]">
        <div className="w-full grow mx-auto px-0 bg-white max-w-3xl border-0 md:border-l md:border-r border-solid border-slate-300">
          <div className="flex flex-col gap-10 px-4 pt-10 md:pt-[60px] pb-12 mx-auto md:max-w-sm">
            <h1 className="text-[1.75rem] md:text-[2rem] md:text-center text-slate-900 mb-0">
              로그인
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="font-bold text-sm mb-2">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  className="custom-input"
                  placeholder="이메일 입력"
                  value=""
                  onChange={emailChangeHandler}
                />
                <div className="text-sm text-color-coral-800 mt-1 hidden"></div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="font-bold text-sm mb-2">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  className="custom-input"
                  placeholder="비밀번호 입력"
                />
                <div className="text-sm text-color-coral-800 mt-1 hidden"></div>
              </div>
              <div>
                <button
                  type="submit"
                  className="items-center justify-center border border-solid bg-slate-700 hover:bg-slate-800 disabled:bg-slate-100 text-white disabled:text-slate-400 border-slate-700 disabled:border-slate-100 text-base px-4 py-3 rounded font-bold block w-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
                >
                  이메일로 계속하기
                </button>
                <div className="flex flex-row justify-between items-center my-2">
                  <div className="bg-color-slate-300 w-1/2 h-px"></div>
                  <p className="flex shrink-0 px-3 text-xs text-color-slate-500">
                    또는
                  </p>
                  <div className="bg-color-slate-300 w-1/2 h-px"></div>
                </div>
                <button
                  type="button"
                  className="mb-3 w-full bg-[#FEE500] rounded py-3 flex items-center justify-center gap-1 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
                  onClick={kakaoLoginHandler}
                >
                  <img className="h-5 w-5" src={kakao} alt="kakao_icon" />
                  <span className="font-bold text-base text-color-slate-900">
                    카카오로 계속하기
                  </span>
                </button>
                <button
                  type="submit"
                  className="w-full bg-color-black rounded py-3 flex items-center justify-center gap-1 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
                >
                  <img className="h-5 w-5" src={apple} alt="apple_icon" />
                  <span className="font-bold text-base text-color-white">
                    Apple로 계속하기
                  </span>
                </button>
              </div>
            </form>
            <div className="flex flex-row md:justify-center items-center gap-2">
              <p className="text-sm text-color-slate-900">
                아직 회원이 아니신가요? 3초 만에
              </p>
              <a
                href=""
                className="flex items-center gap-1 p-1 group rounded hover:bg-color-slate-50 focus:bg-color-slate-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
              >
                <span className="text-sm font-bold text-color-slate-700 group-hover:text-color-slate-800">
                  가입하기
                </span>
                <Arrow />
              </a>
            </div>
            <div className="flex flex-row items-center gap-3 md:justify-center">
              <a
                href="/customer-service"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <p className="text-xs text-slate-600 underline underline-offset-2">
                  고객센터
                </p>
              </a>
              <div className="h-3 w-px bg-color-slate-300"></div>
              <a href="/forgot-password">
                <p className="text-xs text-slate-600 underline underline-offset-2">
                  비밀번호를 잊으셨나요?
                </p>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
