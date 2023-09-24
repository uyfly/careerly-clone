const Footer = () => {
  return (
    <div className="flex bg-color-slate-50 border-0 border-solid border-t border-color-slate-300 w-full">
      <div className="max-w-3xl mx-auto py-9 px-4">
        <div className="flex flex-wrap gap-2 gap-y-1 items-center lg:justify-center mb-5">
          <a target="_blank" href="https://publy.co/content/755">
            <span className="text-sm text-color-slate-400 hover:text-color-slate-500 underline underline-offset-2">
              이용약관
            </span>
          </a>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <a target="_blank" href="https://publy.co/content/756">
            <span className="text-sm text-color-slate-400 hover:text-color-slate-500 font-bold underline underline-offset-2">
              개인정보 처리방침
            </span>
          </a>
        </div>
        <div className="flex flex-wrap lg:justify-center text-sm text-color-slate-400 gap-2 gap-y-1 items-center">
          <span>(주) 퍼블리</span>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <span>대표이사: 김우영</span>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <span>사업자 등록번호: 123-45-67890</span>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <span>서울시 강남구 테헤란로 503 하이브로빌딩 10층</span>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <span>통신 판매업: 2020-서울강남-02648</span>
          <div className="h-3 w-px bg-color-slate-300"></div>
          <span>직업 정보: J1200020230004</span>
        </div>
        <div className="lg:text-center text-sm text-color-slate-400 mt-5">
          커리어리 서비스에서 제공하는 상품 정보에 대하여 (주)퍼블리는
          통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 (주)퍼블리는
          상품, 거래 정보 및 가격에 대하여 어떠한 의무와 책임도 부담하지
          않습니다.&nbsp;
          <a
            href="https://publy.co/content/7268"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-sm text-color-slate-400 hover:text-color-slate-500 underline underline-offset-2">
              소비자분쟁해결기준
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
