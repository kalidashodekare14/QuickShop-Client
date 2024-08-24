import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";


const Home = () => {
  return (
    <div className="mx-10 my-10">
      <Banner />
      <div>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
