import { ReactComponent as Sharing } from "../assets/images/ico/ico_sharing_solid.svg";
import { useSelector } from "react-redux";

const Profiles = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="bg-white">
      <div className="mx-auto w-[1024px] px-6 grid grid-cols-12 gap-12 py-8">
        <div className="col-start-3 col-span-8 flex flex-col gap-8">
          <div>
            <div className="flex items-start justify-between">
              <img
                style={{ width: "120px", height: "120px" }}
                className="profile-image"
                src={user.profile}
                alt="프로필 이미지"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center border border-solid hover:bg-slate-50 text-color-slate-700 border-color-slate-500 text-base px-4 py-3 rounded font-bold focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500"
                >
                  <Sharing className="fill-color-slate-700 block w-6 h-6" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center border border-solid hover:bg-slate-50 text-color-slate-700 border-color-slate-500 text-base px-4 py-3 rounded font-bold focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-color-slate-500"
                >
                  <span className="text-ellipsis line-clamp-1">편집</span>
                </button>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <h1 className="inline text-3xl font-semibold text-color-text-bold mb-0">
                  {user.name}
                </h1>
              </div>
              <p className="text-base text-color-text-subtle">
                KB라이프생명 선임매니저
              </p>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <button
                type="button"
                className="text-base text-slate-900 p-0 focus:outline-none"
              >
                팔로워
                <span className="ml-1 font-bold">
                  <span>2</span>
                </span>
              </button>
              <button
                type="button"
                className="text-base text-slate-900 p-0 focus:outline-none"
              >
                팔로잉
                <span className="ml-1 font-bold">
                  <span>4</span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 bg-white border border-solid border-slate-700 rounded-xl p-4 items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
