import { useEffect, useState } from "react";
import { ReactComponent as Like } from "../assets/images/ico/ico_like.svg";
import { ReactComponent as Repost } from "../assets/images/ico/ico_repost.svg";
import { ReactComponent as Reply } from "../assets/images/ico/ico_reply.svg";
import { ReactComponent as Bookmark } from "../assets/images/ico/ico_bookmark.svg";
import { ReactComponent as Sharing } from "../assets/images/ico/ico_sharing.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import profileDummy from "../assets/images/img/img_profile_dummy.png";
import appDownloadQr from "../assets/images/img/img_app_download_qr.png";
import logo from "../assets/images/logos/careerlylogo.png";

const Home = () => {
  const [isOmitted, setIsOmitted] = useState(true);
  const postList = useSelector((state) => state.post.postList);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const omitHandler = () => {
    setIsOmitted(false);
  };

  return (
    <div className="bg-slate-50">
      <div className="w-[1024px] px-6 grid grid-cols-12 gap-12 bg-slate-50 mx-auto">
        <div className="flex flex-col py-8 col-span-8 gap-5">
          <div className="bg-white border border-solid border-slate-300 border-x-0 sm:border-x">
            <div className="flex items-center gap-4 p-4">
              <a aria-label="내 프로필" href="/profiles/535435">
                <img
                  className="aspect-square object-cover rounded-full w-10 h-10 profile-image"
                  src={user ? user.image : profileDummy}
                  alt="profile picture"
                  title="profile picture"
                />
              </a>
              <button
                type="button"
                className="w-full bg-slate-50 border border-solid border-color-slate-200 rounded-lg p-3.5 text-left focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-slate-500 focus-visible:ring-offset-2"
                href="/posts/create?from=newsfeed"
              >
                <Link to="/posts/create">
                  <p className="text-sm text-color-slate-400">
                    나누고 싶은 생각이 있으신가요?
                  </p>
                </Link>
              </button>
            </div>
          </div>
          {postList.map((data, index) => {
            return (
              <div className="infinite-scroll-component__outerdiv" key={index}>
                <div className="infinite-scroll-component flex flex-col gap-5">
                  <div>
                    <div className="bg-white border border-solid border-slate-300">
                      <div className="flex justify-between items-center p-4">
                        <a
                          className="flex gap-4 items-center"
                          aria-label="프로필"
                        >
                          <div className="relative flex-none w-10 h-10 border border-solid border-slate-200 bg-white rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">
                              우영
                            </p>
                            <p className="text-xs leading-[1.3] text-slate-700">
                              <span>좋은회사</span> • 얼마 전
                            </p>
                          </div>
                        </a>
                        <div className="flex-none">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center border border-solid bg-slate-700 hover:bg-slate-800 text-white border-slate-700 text-xs px-2 py-1.5 rounded font-bold "
                          >
                            <span className="text-ellipsis line-clamp-1">
                              팔로우
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="mb-6 font-bold">{data.title}</p>
                        <div
                          role={isOmitted ? "button" : null}
                          className="focus:outline-none"
                          onClick={omitHandler}
                        >
                          <p className="auto-line-break text-slate-900 whitespace-pre-wrap">
                            {isOmitted
                              ? data.content.slice(0, 100)
                              : data.content}
                            {isOmitted && (
                              <span>
                                ...{" "}
                                <span className="text-slate-500 cursor-pointer">
                                  더 보기
                                </span>
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="mx-4 mb-2 border border-solid border-slate-200 rounded"></div>
                      <div className="flex justify-between">
                        <div className="px-4 py-3 flex items-center">
                          <button
                            type="button"
                            className="flex items-center false"
                            aria-label="좋아요 2명"
                          >
                            <p className="text-xs text-slate-500 hover:underline underline-offset-2">
                              좋아요 <b>2</b>
                            </p>
                          </button>
                        </div>
                        <a
                          href=""
                          className="px-4 py-3 flex flex-wrap justify-end false"
                        >
                          <p className="text-xs text-slate-500 hover:underline hover:underline-offset-2">
                            저장 <b>1</b> • 조회 <b>272</b>
                          </p>
                        </a>
                      </div>
                      <div className="flex h-11">
                        <div className="flex px-1">
                          <button
                            type="button"
                            className="flex items-center gap-1 p-3 focus:outline-none false"
                          >
                            <Like />
                            <p className="font-bold text-xs text-slate-500">
                              좋아요
                            </p>
                          </button>
                          <button
                            type="button"
                            className="flex items-center gap-1 p-3 focus:outline-none false"
                          >
                            <Repost />
                            <p className="font-bold text-xs text-slate-500">
                              리포스트
                            </p>
                          </button>
                        </div>
                        <div className="flex-1 flex justify-end px-1">
                          <a
                            href=""
                            className="p-3 flex gap-1 items-center focus:outline-none false"
                          >
                            <Reply />
                          </a>
                          <button
                            type="button"
                            className="p-3 flex gap-1 items-center focus:outline-none false false"
                            aria-label="게시물 저장하기"
                          >
                            <Bookmark />
                          </button>
                          <button
                            type="button"
                            className="p-3 flex items-center focus:outline-none false"
                            aria-label="공유하기"
                          >
                            <Sharing />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-4 sticky top-14 h-[calc(100vh-56px)] overflow-scroll overscroll-contain hide-scroll-bar">
          <div className="py-8 flex flex-col gap-5">
            <div className="flex p-4 bg-white border border-solid border-slate-300">
              <p className="flex-1 font-bold">
                앱으로 편리하게
                <br /> 이용해보세요.
              </p>
              <div className="relative">
                <img src={appDownloadQr} className="w-28 h-28" alt="qrimage" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-1">
                    <img className="w-6 h-6" src={logo} alt="app logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-color-white border border-solid border-color-slate-300">
              <div>
                <div className="pt-4 px-4">
                  <h5 className="mb-0">주간 인기 TOP 10</h5>
                  <p className="text-sm text-color-slate-700">
                    지난주 커리어리에서 인기 있던 게시물이에요!
                  </p>
                </div>
                <div className="pb-4">
                  <div>
                    <a rel="noreferrer" href="/comments/91555">
                      <div className="md:hover:bg-color-slate-50 h-20 px-4 flex items-center gap-3">
                        <div className="flex-none w-[24px] flex justify-center">
                          <span className="leading-none font-bold text-xl text-color-coral-600">
                            1
                          </span>
                        </div>
                        <div className="flex-1 pl-1">
                          <p className="mb-1 text-sm text-color-slate-900 line-clamp-2">
                            기술, 개발 학습 자료 7가지
                          </p>
                          <p className="text-xs text-color-slate-700 line-clamp-1">
                            <span className="font-bold text-color-slate-900">
                              킴코더
                            </span>{" "}
                            Senior Software Engineer @ AWS
                          </p>
                        </div>
                      </div>
                    </a>
                    <a rel="noreferrer" href="/comments/91516">
                      <div className="md:hover:bg-color-slate-50 h-20 px-4 flex items-center gap-3">
                        <div className="flex-none w-[24px] flex justify-center">
                          <span className="leading-none font-bold text-xl text-color-coral-600">
                            2
                          </span>
                        </div>
                        <div className="flex-1 pl-1">
                          <p className="mb-1 text-sm text-color-slate-900 line-clamp-2">
                            사이드 프로젝트를 수십억에 매각한 29살 비전공자
                          </p>
                          <p className="text-xs text-color-slate-700 line-clamp-1">
                            <span className="font-bold text-color-slate-900">
                              김우영
                            </span>{" "}
                            개발자
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
