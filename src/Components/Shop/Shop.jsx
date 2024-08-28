import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Shop.css";
// import card from "../../assets/s1.png";
import {useState} from "react";
import {FaFilter, FaSearch} from "react-icons/fa";
import {FaFilterCircleXmark} from "react-icons/fa6";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import {useQuery} from "@tanstack/react-query";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  // const [minPrice, setMinPrice] = useState("")
  // const [maxPrice, setMaxPrice] = useState("")

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlePriceChange = (v) => {
    setPriceRange(v);
  };
  // ------------------------------------

  const axiosCommon = useAxiosCommon();
  const {data: allProducts = []} = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosCommon.get("/allProducts");
      return res.data;
    },
  });

  return (
    <div className="flex bg-[#f2f4f8] pt-10 relative">
      {/* Product Filtering */}
      <div
        className={`lg:ms-5 fixed z-10 left-0 lg:translate-y-0 md:translate-y-0 translate-y-16 transform ${
          isOpen
            ? "translate-x-2 translate-y-16 p-3 border "
            : "-translate-x-full"
        } transition-transform duration-300 ease-in-out  md:translate-x-0 bg-[#f2f4f8] w-72 min-h-screen space-y-2`}
      >
        <select className="select select-bordered w-full">
          <option disabled selected>
            Category
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-full">
          <option disabled selected>
            Color
          </option>
          <option>Black</option>
          <option>Orange</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <select className="select select-bordered w-full">
          <option disabled selected>
            Brand Name
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <div className="bg-white w-full  flex flex-col  justify-center">
          <div className="p-3 border-b">
            <h1 className="">Price Range</h1>
          </div>
          <div className="px-2 py-5">
            <RangeSlider
              id="range-slider-gradient"
              className="margin-lg"
              step={"any"}
              defaultValue={priceRange}
              onInput={handlePriceChange}
            />
          </div>
          <div className="flex items-center justify-around pb-5">
            <div className="flex justify-center items-center border w-20 h-10">
              <input className="input input-bordered w-20" type="text" />
            </div>
            <div className="flex justify-center items-center border w-20 h-10">
              <input className="input input-bordered w-20" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen md:ml-80">
        <div className=" space-x-2 bg-white flex justify-between items-center w-[96%] m-auto p-2">
          <div>
            <h1 className="hidden lg:block">All Laptop</h1>
            <div className="md:hidden">
              {!isOpen ? (
                <>
                  <FaFilter
                    className="text-2xl text-[#00bba6] cursor-pointer"
                    onClick={toggleSidebar}
                  />
                </>
              ) : (
                <>
                  <FaFilterCircleXmark
                    className="text-2xl text-red-500 cursor-pointer"
                    onClick={toggleSidebar}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex items-center border px-3 rounded-xl">
            <input
              className="input lg:w-80 w-full"
              placeholder="Search"
              type="text"
            />
            <FaSearch className=""></FaSearch>
          </div>
          <div className="flex items-center">
            <h3 className="w-28 hidden lg:block">Sort By:</h3>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Default
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="w-[96%] m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {allProducts.map((product) => (
              <div
                key={product._id}
                className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg"
              >
                <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                  <h1 className="text-white">25 % OFF</h1>
                </div>
                <div className="">
                  <img className=" border h-60" src={product.image} alt="" />
                </div>
                <div className="text-center text-lg px-2 font-semibold">
                  <h1>{product.name}</h1>
                  <p>$150</p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <button className="btn bg-[#00bba6] text-white rounded-md">
                    Buy Now
                  </button>
                  <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
