/* eslint-disable react/no-unescaped-entities */
import {FaChildren} from "react-icons/fa6";
import {GiRunningShoe} from "react-icons/gi";
import {IoIosMan} from "react-icons/io";
import {IoWoman} from "react-icons/io5";
import {MdOutlineDeviceHub} from "react-icons/md";
import {SiCapacitor} from "react-icons/si";

const Categories = () => {

  return (
    <div>
      <div className="text-center space-y-2 my-10">
        <h1 className=" text-3xl font-motserrat font-[700]">FEATURED CATEGORIES</h1>
        <p className="text-1xl font-openSans">
          Get your desired product from featured category
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
        <div className="bg-[#f6f8fa]  text-[#9c9c9c] p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <IoIosMan className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Men's Store</h1>
        </div>
        <div className="bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <IoWoman className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Women's Store</h1>
        </div>
        <div className="bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <FaChildren className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Kid's Store</h1>
        </div>
        <div className="bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <SiCapacitor className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Accessories</h1>
        </div>
        <div className="bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <GiRunningShoe className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Footwear </h1>
        </div>
        <div className="bg-[#f6f8fa]  text-[#9c9c9c] p-5 flex flex-col justify-center rounded-md shadow-md items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer">
          <MdOutlineDeviceHub className="text-5xl hover:rotate-45 duration-150" />
          <h1 className="text-2xl font-motserrat">Electronics</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
