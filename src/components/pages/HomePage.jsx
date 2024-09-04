import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
// import { Trending } from "../trending/TrendingCard";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Trending />
      <Footer />
    </div>
  );
};
