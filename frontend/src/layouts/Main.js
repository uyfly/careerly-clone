import main from "../assets/images/img/img_main.png";

const Main = () => {
  return (
    <div className="flex-col">
      <section
        id="landing-title-section"
        className="w-full"
        style={{ height: "832px" }}
      >
        <div className="relative h-full w-full">
          <span>
            <img
              sizes="100vw"
              src={main}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </span>
          <div className="relative flex max-w-screen-xl mx-auto py-32 px-4 w-full h-full justify-between text-white">
            <div className="ml-32 flex flex-col justify-center h-full w-[480px] shrink-0">
              <div className="text-2xl whitespace-pre-line leading-9 pb-5 font-normal">
                개발 트렌드부터 Q&A, 네트워킹까지
              </div>
              <div className="text-5xl font-bold whitespace-pre-line leading-[60px]">
                요즘 개발자들의
                <br />
                필수 커뮤니티, 커리어리
              </div>
              <div className="py-10">
                <button
                  type="button"
                  className="p-4 px-8 rounded-[0.3rem] text-base font-bold focus:outline-none bg-slate-200 text-slate-700"
                >
                  지금 시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
