import Header from "./Header";
import { Outlet } from "react-router";

const FullLayout = () => {
  return (
    <>
      <Header />
      <div className="h-14"></div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default FullLayout;
