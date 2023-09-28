import { ReactComponent as Logo } from "../assets/images/logos/logo.svg";
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
          <div className="flex flex-col min-h-[calc(100vh-60px)]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
