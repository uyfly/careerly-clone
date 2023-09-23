import React, { useState } from "react";
import "../tailwind.css";
import logo from "../assets/images/logos/careerlylogo.png";
import { ReactComponent as Logo } from "../assets/images/logos/logo.svg";
import { ReactComponent as Search } from "../assets/images/ico/ico_search.svg";
import { ReactComponent as Chatting } from "../assets/images/ico/ico_chatting.svg";
import { ReactComponent as Notification } from "../assets/images/ico/ico_notification.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const dropdownMenuClickHandler = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex flex-wrap h-14 border-0 border-b border-solid border-color-slate-300 bg-color-white fixed w-full z-[5] top-0">
      <div className="bg-white flex justify-between w-full h-full max-w-screen-xl mx-auto px-2 md:px-4">
        <div className="flex items-center">
          <a
            href=""
            className="p-2 m-0 mr-2 rounded focus-visible:bg-color-slate-50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
          >
            <div className="hidden md:flex">
              <Logo />
            </div>
            <img className="md:hidden h-8" src={logo} alt="커리어리 홈" />
          </a>
          <a
            href=""
            className="hidden md:flex h-full p-2 items-center gap-1 font-medium text-center text-sm leading-none hover:text-slate-900 text-slate-500"
          >
            <p>커리어리 트렌드</p>
          </a>
          <a
            href=""
            className="hidden md:flex h-full p-2 items-center gap-1 font-medium text-center text-sm leading-none hover:text-slate-900 text-slate-500"
          >
            <p>개발자 Q&A</p>
          </a>
          <a
            href=""
            className="hidden md:flex h-full p-2 items-center gap-1 font-medium text-center text-sm leading-none hover:text-slate-900 text-slate-500"
          >
            <p>채용 공고 매칭</p>
          </a>
          <a
            href=""
            className="hidden md:flex h-full p-2 items-center gap-1 font-medium text-center text-sm leading-none hover:text-slate-900 text-slate-500"
          >
            <p>사이드 프로젝트</p>
          </a>
          <a
            href=""
            className="hidden md:flex h-full p-2 items-center gap-1 font-medium text-center text-sm leading-none hover:text-slate-900 text-slate-500"
          >
            <p>부트캠프 비교</p>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <div
            role="button"
            tabIndex="0"
            aria-label="검색"
            className="text-sm p-2 relative cursor-pointer"
          >
            <Search />
          </div>
          <a className="p-2 relative" aria-label="채팅" href="">
            <Chatting />
          </a>
          <a className="p-2 relative" aria-label="알림" href="">
            <Notification />
          </a>
          <div className="relative hidden md:inline">
            <button
              className="p-0 m-2 flex rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={dropdownMenuClickHandler}
            >
              <img
                className="w-9 h-9 profile-image"
                src={user.thumbnail}
                alt={`${user.nickname}님의 프로필사진`}
              />
            </button>
            <div
              className={`z-[6] top-[3.25rem] hidden absolute w-[12.5rem] py-2 bg-color-white rounded right-0 left-auto border border-solid border-color-slate-300 shadow-lg text-sm text-slate-600 hover:text-slate-900 ${
                isDropdownMenuOpen && "!block"
              }`}
              aria-labelledby="dropdownMenuButton"
            >
              <button
                className="w-full block text-left text-sm text-color-slate-900 hover:bg-slate-50 focus:bg-color-slate-100 focus:outline-none py-2 px-4"
                type="button"
                aria-hidden="true"
              >
                <span>내 프로필</span>
              </button>
              <button
                className="w-full block text-left text-sm text-color-slate-900 hover:bg-slate-50 focus:bg-color-slate-100 focus:outline-none py-2 px-4"
                type="button"
                aria-hidden="true"
              >
                <span>저장한 게시물</span>
              </button>
              <button
                className="dropdown-item focus:outline-none !py-2 !px-4"
                type="button"
                aria-hidden="true"
              >
                <span>관심분야 설정</span>
              </button>
              <button
                className="dropdown-item focus:outline-none !py-2 !px-4"
                type="button"
                aria-hidden="true"
              >
                <span>설정</span>
              </button>
              <div className="h-px w-[168px] bg-color-slate-200 my-1 mx-4"></div>
              <button
                className="w-full block text-left text-sm text-color-slate-900 hover:bg-slate-50 focus:bg-color-slate-100 focus:outline-none py-2 px-4"
                type="button"
                aria-hidden="true"
              >
                <span>고객센터</span>
              </button>
              <a
                className="w-full block text-left text-sm text-color-slate-900 hover:bg-slate-50 focus:bg-color-slate-100 focus:outline-none py-2 px-4"
                href="/"
              >
                <span className="text-color-slate-900">로그아웃</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
