import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="md:w-[1536px] mx-auto">
      {/* Banner Section */}
      <div>
        <Banner />
      </div>
      {/* Categories Section */}
      <div>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
