import Header from "./Header";
import Container from "./Container";

const FullLayout = () => {
  return (
    <main>
      <div>
        <Header />
        <div className="h-14"></div>
        <Container />
      </div>
    </main>
  );
};

export default FullLayout;
