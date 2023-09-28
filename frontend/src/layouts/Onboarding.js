import { ReactComponent as Logo } from "../assets/images/logos/logo.svg";
import { ReactComponent as Arrow } from "../assets/images/ico/ico_arrow2.svg";
import { ReactComponent as Frontend } from "../assets/images/ico/ico_frontend.svg";
import { ReactComponent as Backend } from "../assets/images/ico/ico_backend.svg";
import { ReactComponent as Ai } from "../assets/images/ico/ico_ai.svg";
import { ReactComponent as Pm } from "../assets/images/ico/ico_pm.svg";
import { ReactComponent as Marketing } from "../assets/images/ico/ico_marketing.svg";
import { ReactComponent as Design } from "../assets/images/ico/ico_design.svg";
import { ReactComponent as Business } from "../assets/images/ico/ico_business.svg";
import { ReactComponent as Search } from "../assets/images/ico/ico_search2.svg";
import welcomePageIllustMo from "../assets/images/img/img_welcome_page_illust_mo.png";
import welcomePageIllustPc from "../assets/images/img/img_welcome_page_illust_pc.png";

const Onboarding = () => {
  return (
    <>
      <nav className="h-14 border-0 border-b border-solid border-color-slate-300 bg-color-slate-50 !border-b-0 fixed w-full z-[5]">
        <div className="bg-white flex justify-between w-full h-full max-w-screen-md mx-auto px-2 md:px-4 border border-solid border-slate-300 border-t-0 border-x-0 md:border-x">
          <div className="flex items-center">
            <a
              role="presentation"
              className="w-[94px] h-6 m-2 pointer-events-none"
              href="/?from=/onboarding"
            >
              <Logo />
            </a>
          </div>
        </div>
      </nav>
      <div className="h-14"></div>
      <div className="bg-slate-50">
        <div className="mx-auto max-w-3xl min-h-[calc(100vh-56px)] bg-white border-0 md:border-l md:border-r border-solid border-slate-300">
          <div className="w-full">
            <div
              className="h-1 bg-slate-700 transition-all ease-in-out duration-500"
              style={{ width: "0%" }}
            ></div>
          </div>
          {/* step 1 */}
          {/* <div className="flex flex-col min-h-[calc(100vh-60px)]">
            <div className="md:grow px-4 md:pt-20 pt-5 pb-10 flex flex-col gap-7 items-center">
              <div className="text-center">
                <h3 className="text-slate-900 mb-3 whitespace-pre-wrap">
                  이미 80,000여 명의 개발 분야 사람들이 시작했어요!
                </h3>
                <p className="text-slate-500 text-base whitespace-pre-wrap">
                  현재 회사에 재직 중이신가요? <br />
                  경력 또는 학력을 입력하면 관련 분야 사람을 추천받을 수 있어요.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center border border-solid bg-color-slate-700 hover:bg-color-slate-800 text-color-white border-color-slate-700 text-base px-4 py-3 rounded font-bold block w-full  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500"
                >
                  <span className="text-ellipsis line-clamp-1">
                    네, 재직중이에요
                  </span>
                </button>
                <button
                  type="button"
                  className="text-color-slate-700 text-sm focus:outline-none font-bold"
                >
                  아직 경력이 없어요
                </button>
              </div>
            </div>
            <img
              src={welcomePageIllustPc}
              className="w-full hidden md:block"
              alt=""
            />
            <img
              src={welcomePageIllustMo}
              className="block w-full md:hidden"
              alt=""
            ></img>
          </div> */}
          {/* step 2 */}
          {/* <div className="mx-auto w-full md:max-w-sm px-4 py-10 flex flex-col gap-10 items-center">
            <div className="text-center">
              <h3 className="text-slate-900 mb-3">무슨 일을 하시나요?</h3>
              <p className="text-slate-500 text-base whitespace-pre-wrap">
                재직 중이 아니라면
                <br /> 가장 최근에 일한 곳을 알려주세요.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="company">
                    <span className="text-sm font-bold text-color-text-bold">
                      회사
                    </span>
                  </label>
                  <p className="text-xs text-color-text-subtler">0 / 50</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="custom-input"
                    placeholder="회사명을 입력해주세요."
                    autoComplete="off"
                    maxLength="50"
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="title">
                    <span className="text-sm font-bold text-color-text-bold">
                      직함
                    </span>
                  </label>
                  <p className="text-xs text-color-text-subtler">0 / 50</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="custom-input"
                    placeholder="백엔드 개발자, 프로덕트 매니저, 마케팅팀 대리 등"
                    autoComplete="off"
                    maxLength="50"
                  />
                </div>
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="isCurrent"
                  name="isCurrent"
                  className="custom-checkbox"
                />
                <label
                  htmlFor="isCurrent"
                  className="pl-2 mb-0 cursor-pointer text-sm text-color-text-subtle flex-grow"
                >
                  재직 중
                </label>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="startDate">
                    <span className="text-sm font-bold text-slate-900">
                      시작일
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <div className="flex space-x-2 items-center">
                    <select className="custom-select">
                      <option disabled value="-1">
                        시작연도
                      </option>
                      <option value="2023">2023년</option>
                      <option value="2022">2022년</option>
                      <option value="2021">2021년</option>
                      <option value="2020">2020년</option>
                      <option value="2019">2019년</option>
                      <option value="2018">2018년</option>
                      <option value="2017">2017년</option>
                      <option value="2016">2016년</option>
                      <option value="2015">2015년</option>
                      <option value="2014">2014년</option>
                      <option value="2013">2013년</option>
                      <option value="2012">2012년</option>
                      <option value="2011">2011년</option>
                      <option value="2010">2010년</option>
                    </select>
                    <select className="custom-select">
                      <option disabled value="-1">
                        월
                      </option>
                      <option value="0">1월</option>
                      <option value="1">2월</option>
                      <option value="2">3월</option>
                      <option value="3">4월</option>
                      <option value="4">5월</option>
                      <option value="5">6월</option>
                      <option value="6">7월</option>
                      <option value="7">8월</option>
                      <option value="8">9월</option>
                      <option value="9">10월</option>
                      <option value="10">11월</option>
                      <option value="11">12월</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="endDate">
                    <span className="text-sm font-bold text-slate-900">
                      종료일
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <div className="flex space-x-2 items-center">
                    <select className="custom-select false">
                      <option disabled value="-1">
                        종료연도
                      </option>
                      <option value="2023">2023년</option>
                      <option value="2022">2022년</option>
                      <option value="2021">2021년</option>
                      <option value="2020">2020년</option>
                      <option value="2019">2019년</option>
                      <option value="2018">2018년</option>
                      <option value="2017">2017년</option>
                      <option value="2016">2016년</option>
                      <option value="2015">2015년</option>
                      <option value="2014">2014년</option>
                      <option value="2013">2013년</option>
                      <option value="2012">2012년</option>
                      <option value="2011">2011년</option>
                      <option value="2010">2010년</option>
                    </select>
                    <select className="custom-select false">
                      <option disabled value="-1">
                        월
                      </option>
                      <option value="0">1월</option>
                      <option value="1">2월</option>
                      <option value="2">3월</option>
                      <option value="3">4월</option>
                      <option value="4">5월</option>
                      <option value="5">6월</option>
                      <option value="6">7월</option>
                      <option value="7">8월</option>
                      <option value="8">9월</option>
                      <option value="9">10월</option>
                      <option value="10">11월</option>
                      <option value="11">12월</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center border border-solid bg-color-slate-100 text-color-slate-400 border-color-slate-100 text-base px-4 py-3 rounded font-bold block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500"
                disabled
              >
                <span className="text-ellipsis line-clamp-1">프로필 저장</span>
              </button>
              <div className="flex items-center text-sm mt-1">
                <button
                  type="button"
                  className="flex items-center px-2 text-color-slate-700 font-bold"
                >
                  <span className="text-color-slate-700 font-bold">
                    아직 경력이 없으신가요?
                  </span>
                  <Arrow className="fill-slate-700 ml-1" />
                </button>
              </div>
            </div>
          </div> */}
          {/* step 3 */}
          {/* <div className="mx-auto w-full md:max-w-sm px-4 py-10 flex flex-col gap-10 items-center">
            <div className="text-center">
              <h3 className="text-slate-900 mb-3">어디에서 공부하셨나요?</h3>
              <p className="text-slate-500 text-base">
                가장 최근에 소속되었던 교육기관을 알려주세요.
              </p>
            </div>
            <div className="bg-slate-50 p-4 w-full rounded flex justify-center items-center">
              <button
                type="button"
                className="flex items-center text-color-slate-700 font-bold"
              >
                <span className="text-sm font-bold text-slate-700">
                  경력이 있으신가요?
                </span>
                <Arrow className="fill-slate-700 ml-1" />
              </button>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="institute">
                    <span className="text-sm font-bold text-color-text-bold">
                      교육기관
                    </span>
                  </label>
                  <p className="text-xs text-color-text-subtler">0 / 50</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="institute"
                    name="institute"
                    className="custom-input"
                    placeholder="하나대학교, 부트캠프, 연구실 등"
                    autoComplete="off"
                    maxLength="50"
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="major">
                    <span className="text-sm font-bold text-slate-900">
                      전공/과정
                    </span>
                  </label>
                  <p className="text-xs text-slate-400">0 / 50</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="major"
                    name="major"
                    className="custom-input"
                    placeholder="컴퓨터공학, MBA, 웹 개발 등"
                    autoComplete="off"
                    maxLength="50"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center border border-solid bg-color-slate-100 text-color-slate-400 border-color-slate-100 text-base px-4 py-3 rounded font-bold block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500"
                disabled
              >
                <span className="text-ellipsis line-clamp-1">프로필 저장</span>
              </button>
            </div>
          </div> */}
          {/* step 4 */}
          {/* <div className="mx-auto w-full md:max-w-sm px-4 py-10 flex flex-col gap-10 items-center">
            <div className="text-center">
              <h3 className="text-slate-900 mb-3">
                어떤 분야의 이야기를 듣고 싶으세요?
              </h3>
              <p className="text-slate-500 text-base whitespace-pre-wrap">
                관심이 많은 순서대로 최대 3개까지 골라주세요.
                <br /> 관련 업계 소식과 인사이트를 얻을 수 있어요.
              </p>
            </div>
            <div className="w-full flex flex-wrap gap-3">
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Frontend className="icn-green-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">프론트엔드</p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Backend className="icn-green-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">백엔드</p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Ai className="icn-purple-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">
                  AI/머신러닝
                </p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Pm className="icn-blue-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">PM/PO/기획</p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Marketing className="icn-magenta-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">마케팅</p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Design className="icn-yellow-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">디자인</p>
              </div>
              <div
                role="button"
                tabIndex="-1"
                className="w-[calc(50%-6px)] last:w-full p-3 bg-white md:hover:bg-slate-100 border border-solid border-color-slate-200 rounded flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <Business className="icn-indigo-600 w-5 h-5" />
                </div>
                <p className="text-base font-bold text-slate-900">
                  비즈니스/스타트업
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-lg btn-block text-color-white focus:ring-0 bg-slate-700 font-bold hover:text-color-white hover:bg-slate-800 disabled:bg-slate-100 disabled:text-color-slate-400"
              disabled
            >
              확인
            </button>
          </div> */}
          {/* step 5 */}
          <div className="mx-auto w-full md:max-w-sm py-10 flex px-4 flex-col gap-10 items-center">
            <div className="text-center flex flex-col w-full items-center gap-10">
              <h3 className="text-slate-900 m-0 whitespace-pre">
                내가 보유한 스킬을 모두 선택 해주세요.
              </h3>
              <div className="flex flex-col text-left w-full">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center pr-2 border-solid border border-slate-300 rounded focus-within:border-slate-900">
                      <input
                        type="text"
                        className="custom-input !border-0"
                        placeholder="스킬을 검색해 보세요."
                        autoComplete="off"
                      />
                      <button type="button" className="focus:outline-none px-0">
                        <Search className="fill-slate-800" />
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-3 mt-4">인기 스킬</p>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Java
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            SpringBoot
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            MySQL
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            javascript
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Github
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            SQL
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            git
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Spring
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            python
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            AWS
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Docker
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            React
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            커뮤니케이션
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            typescript
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            데이터 분석
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            C++
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Node.js
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            html
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            css
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Kotlin
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            c언어
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Kubernetes
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            OracleDB
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            c#
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Linux
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Android
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            머신 러닝
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            django
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            Vue.js
                          </h3>
                        </button>
                        <button
                          type="button"
                          className="border border-solid border-slate-200 rounded-full px-3 py-2.5 bg-white text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                          <h3 className="font-bold text-sm text-color-slate-900 leading-none my-0">
                            NestJs
                          </h3>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-lg btn-block flex flex-row focus:outline-none focus:ring-0 md:justify-center text-color-white bg-slate-700 font-bold hover:text-color-white hover:bg-slate-800 disabled:bg-slate-100 disabled:text-color-slate-400"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
