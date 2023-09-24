import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const FullLayout = () => {
  return (
    <>
      <Header />
      <div className="h-14"></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FullLayout;
