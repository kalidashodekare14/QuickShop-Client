import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './Shop.css'
import card from '../../assets/s1.png'
import { useState } from "react";
import { FaChartBar, FaFilter, FaSearch } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import useAllProducts from "../../hooks/useAllProducts";

const Shop = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [priceRange, setPriceRange] = useState([0, 500])
    const [allProducts] = useAllProducts()

    // console.log(allProducts)


    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    const handlePriceChange = (v) => {
        setPriceRange(v)
    }


    return (
        <div className='flex bg-[#f2f4f8] pt-10 relative'>
            {/* Product Filtering */}
            <div className={`lg:ms-5 fixed z-10 left-0 lg:translate-y-0 md:translate-y-0 translate-y-16 transform ${isOpen ? 'translate-x-2 translate-y-16 p-3 border ' : '-translate-x-full'} transition-transform duration-300 ease-in-out   md:relative md:translate-x-0 bg-[#f2f4f8] w-72 min-h-screen space-y-2`}>
                <select className="select select-bordered w-full">
                    <option disabled selected>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Color</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Blue</option>
                    <option>Green</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Brand Name</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <div className='bg-white w-full  flex flex-col  justify-center'>
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
            <div className='w-full min-h-screen'>
                <div className=" space-x-2 bg-white flex justify-between items-center w-[96%] m-auto p-2">
                    <div>
                        <h1 className="hidden lg:block">All Laptop</h1>
                        <div className="md:hidden">
                            {
                                !isOpen ? <>
                                    <FaFilter className="text-2xl text-[#00bba6] cursor-pointer" onClick={toggleSidebar} />

                                </>
                                    : <>
                                        <FaFilterCircleXmark className="text-2xl text-red-500 cursor-pointer" onClick={toggleSidebar} />
                                    </>
                            }

                        </div>
                    </div>
                    <div className="flex items-center border px-3 rounded-xl">
                        <input className="input lg:w-80 w-full" placeholder="Search" type="text" />
                        <FaSearch className=""></FaSearch>
                    </div>
                    <div className="flex items-center">
                        <h3 className="w-28 hidden lg:block">Sort By:</h3>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Default</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <div className="w-[96%] m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {
                            allProducts.map(product => (
                                <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                        <h1 className="text-white">25 % OFF</h1>
                                    </div>
                                    <div className="p-5">
                                        <img className="w-full h-40" src={product.image} alt="image" />
                                    </div>
                                    <div className="text-center text-2xl">
                                        <h1 className="text-xl">{product.name}</h1>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-5">
                                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                        {/* card 1 */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;