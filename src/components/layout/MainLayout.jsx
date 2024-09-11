import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
