import ErrorFound from "../404-page/ErrorFound";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <ErrorFound />
      <Footer />
    </div>
  );
};
