import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="md:w-[1536px] mx-auto">
      <div>
        <Banner />
      </div>
      <div>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
