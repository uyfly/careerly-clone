import React from "react";
import { ReactComponent as Back } from "../../assets/images/ico/ico_back.svg";

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
                <span class="text-white">완료</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PostCreate;
