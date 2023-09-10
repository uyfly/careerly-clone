import React, { useState, useRef, useCallback } from "react";
import { ReactComponent as Back } from "../../assets/images/ico/ico_back.svg";
import { ReactComponent as ImageRegular } from "../../assets/images/ico/ico_image_regular.svg";
import { ReactComponent as ImageSolid } from "../../assets/images/ico/ico_image_solid.svg";
import { ReactComponent as Add } from "../../assets/images/ico/ico_add.svg";
import { ReactComponent as Cancel } from "../../assets/images/ico/ico_cancel.svg";
import { ReactComponent as File } from "../../assets/images/ico/ico_file.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { create } from "../../store/postSlice";

const PostCreate = () => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingContent, setEditingContent] = useState(false);
  const [attachingImage, setAttachingImage] = useState(false);

  const [titleLength, setTitleLength] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const isEditing = () => {
    setEditingTitle((prev) => !prev);
    setTitleLength(0);
  };

  const isAttaching = () => {
    setAttachingImage((prev) => !prev);
  };

  const newPost = {
    id: Date.now().toString(),
    title: title,
    content: content,
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setTitleLength(e.target.value.length);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
    setEditingContent(e.target.value.length > 0);
  };

  return (
    <div>
      <div className="h-screen bg-slate-50 flex flex-col">
        <nav className="h-14 w-full px-0 bg-slate-50 border-b-0">
          <div className="h-full w-full max-w-3xl mx-auto px-2 bg-white flex items-center justify-between border border-solid border-slate-300 border-t-0 border-x-0 md:border-x">
            <button
              type="button"
              className="w-10 h-10 p-0 flex items-center justify-center focus:outline-none"
            >
              <Link to="/home">
                <Back />
              </Link>
            </button>
            <div className="flex gap-2 px-2">
              <button
                type="button"
                className={`focus:outline-0 rounded bg-white border border-solid border-color-coral-600 flex-none px-4 py-2 text-sm ${
                  editingContent ? "opacity-100" : "opacity-40"
                }`}
                disabled
              >
                <span className="text-color-coral-600">보관</span>
              </button>
              <button
                type="button"
                className={`focus:outline-0 rounded bg-color-coral-600 flex-none px-4 py-2 text-sm ${
                  editingContent ? "opacity-100" : "opacity-40"
                }`}
                disabled={!editingContent ? "disabled" : null}
                onClick={() => dispatch(create(newPost))}
              >
                <span className="text-white">완료</span>
              </button>
            </div>
          </div>
        </nav>
        <div className="bg-white flex items-center gap-4 w-full max-w-screen-md mx-auto px-3 py-2 border border-solid border-slate-300 border-t-0 border-x-0 md:border-x z-[1]">
          <button
            type="button"
            className="p-1 focus:outline-none"
            onClick={isAttaching}
          >
            {attachingImage ? <ImageSolid /> : <ImageRegular />}
            {attachingImage && (
              <div className="mx-1 tag-sm bg-color-teal-100 text-color-teal-600 cursor-default">
                <span>0 / 9</span>
              </div>
            )}
          </button>
        </div>
        <div className="mx-auto w-full max-w-3xl flex-1 overflow-auto hide-scroll-bar bg-white md:border md:border-solid md:border-slate-300 md:border-y-0">
          <div className="mx-auto w-full max-w-[633px] px-4 flex flex-col py-5">
            {!editingTitle && (
              <div className="flex flex-col" onClick={isEditing}>
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
            )}
            {editingTitle && (
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div
                    role="button"
                    className="py-3 flex gap-2 items-center group"
                    aria-hidden="true"
                    onClick={isEditing}
                  >
                    <Cancel className="fill-slate-300 md:group-hover:fill-slate-400" />
                    <p className="font-bold text-slate-300 md:group-hover:text-slate-400 text-sm leading-[30px]">
                      취소
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm">{titleLength} / 40</p>
                </div>
                <textarea
                  className="font-bold text-slate-900 text-xl leading-normal placeholder:text-slate-300 border-0 rounded-none px-0 py-3 w-full resize-none focus:ring-0 focus:outline-none caret-color-teal-800"
                  name="commentTitle"
                  placeholder="제목을 입력하세요."
                  rows="1"
                  maxLength={40}
                  value={title}
                  onChange={titleChangeHandler}
                ></textarea>
              </div>
            )}
            <textarea
              className="text-slate-900 placeholder:text-slate-300 border-0 rounded-none px-0 py-6 resize-none focus:ring-0 focus:outline-none caret-color-teal-800 overflow-y-hidden"
              name="description"
              placeholder="나누고 싶은 생각을 적어주세요.
링크나 사진을 추가할 수도 있어요."
              ref={textRef}
              value={content}
              onInput={handleResizeHeight}
              onChange={contentChangeHandler}
            ></textarea>
            <div className="h-4"></div>

            <div className="py-2">
              {attachingImage && (
                <div className="flex flex-col gap-6 w-full">
                  <div className="rounded border border-dashed border-slate-300 h-[120px] flex flex-col gap-2 items-center justify-center">
                    <input type="file" multiple style={{ display: "none" }} />
                    <button
                      type="button"
                      className="btn btn-md btn-slate-200 text-slate-500 flex gap-1 items-center"
                    >
                      <File />
                      <span className="text-slate-500">파일 선택</span>
                    </button>
                    <p className="text-sm text-slate-400">
                      또는 여기에 사진을 드래그해보세요.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
