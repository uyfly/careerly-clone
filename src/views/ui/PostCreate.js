import React from "react";
import { ReactComponent as Back } from "../../assets/images/ico/ico_back.svg";
import { ReactComponent as Image } from "../../assets/images/ico/ico_image.svg";
import { ReactComponent as Add } from "../../assets/images/ico/ico_add.svg";

const PostCreate = () => {
  return (
    <div>
      <div className="h-screen bg-slate-50 flex flex-col">
        <nav className="h-14 w-full px-0 bg-slate-50 border-b-0">
          <div className="h-full w-full max-w-3xl mx-auto px-2 bg-white flex items-center justify-between border border-solid border-slate-300 border-t-0 border-x-0 md:border-x">
            <button
              type="button"
              className="w-10 h-10 p-0 flex items-center justify-center focus:outline-none"
            >
              <Back />
            </button>
            <div className="flex gap-2 px-2">
              <button
                type="button"
                className="focus:outline-0 rounded bg-white border border-solid border-color-coral-600 flex-none px-4 py-2 text-sm opacity-40"
                disabled=""
              >
                <span className="text-color-coral-600">보관</span>
              </button>
              <button
                type="button"
                className="focus:outline-0 rounded bg-color-coral-600 flex-none px-4 py-2 text-sm opacity-40"
                disabled=""
              >
                <span className="text-white">완료</span>
              </button>
            </div>
          </div>
        </nav>
        <div className="bg-white flex items-center gap-4 w-full max-w-screen-md mx-auto px-3 py-2 border border-solid border-slate-300 border-t-0 border-x-0 md:border-x z-[1]">
          <button type="button" className="p-1 focus:outline-none">
            <Image />
          </button>
        </div>
        <div className="mx-auto w-full max-w-3xl flex-1 overflow-auto hide-scroll-bar bg-white md:border md:border-solid md:border-slate-300 md:border-y-0">
          <div className="mx-auto w-full max-w-[633px] px-4 flex flex-col py-5">
            <div className="flex flex-col">
              <div
                className="py-3 flex gap-2 items-center group"
                role="button"
                aria-hidden="true"
              >
                <Add className="fill-slate-300 md:group-hover:fill-slate-400" />
                <p className="font-bold text-slate-300 md:group-hover:text-slate-400 text-xl leading-normal">
                  제목 추가
                </p>
              </div>
            </div>
            <textarea
              className="text-slate-900 placeholder:text-slate-300 border-0 rounded-none px-0 py-6 resize-none focus:ring-0 focus:outline-none caret-color-teal-800 overflow-y-hidden"
              name="description"
              placeholder="나누고 싶은 생각을 적어주세요.
링크나 사진을 추가할 수도 있어요."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
