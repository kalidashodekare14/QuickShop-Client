import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Shop.css";
import Select from "react-select";
// import card from "../../assets/s1.png";
import {useState} from "react";
import {FaFilter, FaSearch} from "react-icons/fa";
import {FaFilterCircleXmark} from "react-icons/fa6";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import {useQuery} from "@tanstack/react-query";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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

  const categories = Array.from(
    new Set(allProducts.map((res) => res.category))
  );

  const brands = Array.from(new Set(allProducts.map((res) => res.brand)));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const filterProducts = allProducts.filter((product) => {
    const matchedCategories = selectedCategory
      ? product.category === selectedCategory.value
      : true;
    const matchedBrands = selectedBrand
      ? product.brand === selectedBrand.value
      : true;
    const matchedSearchQueries = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchedPriceRange =
      product.price >= minPrice && product.price <= maxPrice;
    return (
      matchedCategories &&
      matchedBrands &&
      matchedSearchQueries &&
      matchedPriceRange
    );
  });

  // Sort products based on selected sort order
  const sortProducts = (products) => {
    if (sortOrder === "lowToHigh") {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "newest") {
      return products.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "oldest") {
      return products.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  };

  // Apply sorting to the filtered products
  const sortedProducts = sortProducts([...filterProducts]);

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
        <div className="category">
          <h4 className="text-xl font-semibold">Category</h4>
          <Select
            className="md:w-72 mt-2"
            isClearable
            placeholder="Select a category"
          />
        </div>
        <div className="category mt-3">
          <h4 className="text-xl font-semibold">Color</h4>
          <Select
            className="md:w-72 mt-2"
            isClearable
            placeholder="Select a category"
          />
        </div>
        <div className="category mt-3">
          <h4 className="text-xl font-semibold">Brand</h4>
          <Select
            className="md:w-72 mt-2"
            isClearable
            placeholder="Select a category"
          />
        </div>

        <div className="bg-white w-full  mt-8 flex flex-col  justify-center">
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
                <div className="space-y-3 mt-3 text-center text-lg px-1 font-semibold">
                  <h1 className="text-[18px]">{product.name.slice(0, 39)}</h1>
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