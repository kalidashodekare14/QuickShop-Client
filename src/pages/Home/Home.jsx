import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css'
import ReadyOrderBanner from "../../Components/ReadyOrderBanner/ReadyOrderBanner";

const Home = () => {


  return (
    <div className="mx-10 my-10">
      <Helmet>
        <title>Quick Shop | Home</title>
      </Helmet>
      <Banner />
      <div>
        <Categories></Categories>
      </div>
      <div className="my-10">
        <ReadyOrderBanner></ReadyOrderBanner>
      </div>
    </div>
  );
};

export default Home;
