import {Helmet} from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";

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
      <div>
        <h1>Slider</h1>
      </div>
    </div>
  );
};

export default Home;
