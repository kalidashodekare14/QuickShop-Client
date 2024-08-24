import React from 'react';
import { FaChildren } from 'react-icons/fa6';
import { GiShoebillStork } from 'react-icons/gi';
import { IoIosMan } from 'react-icons/io';
import { IoWoman } from 'react-icons/io5';
import { MdOutlineDeviceHub } from 'react-icons/md';
import { SiCapacitor } from 'react-icons/si';

const Categories = () => {
    return (
        <div>
            <div className='text-center space-y-2 my-10'>
                <h1 className=' text-3xl'>FEATURED CATEGORIES</h1>
                <p className='text-1xl'>Get your desired product from featured category</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 '>
                <div className='bg-[#f6f8fa]  text-[#9c9c9c] p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <IoIosMan className='text-5xl ' />
                    <h1 className='text-2xl'>Men Store</h1>
                </div>
                <div className='bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <IoWoman className='text-5xl' />
                    <h1 className='text-2xl'>Women Store</h1>
                </div>
                <div className='bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <FaChildren className='text-5xl' />
                    <h1 className='text-2xl'>Children Store</h1>
                </div>
                <div className='bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <SiCapacitor className='text-5xl' />
                    <h1 className='text-2xl'>Accessories Store</h1>
                </div>
                <div className='bg-[#f6f8fa] text-[#9c9c9c]  p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <GiShoebillStork className='text-5xl' />
                    <h1 className='text-2xl'>Footwear Store</h1>
                </div>
                <div className='bg-[#f6f8fa]  text-[#9c9c9c] p-5 flex flex-col justify-center items-center hover:text-[#00bba6] hover:bg-[#00bba525] duration-150 cursor-pointer'>
                    <MdOutlineDeviceHub className='text-5xl' />
                    <h1 className='text-2xl'>Electronic Store</h1>
                </div>
            </div>
        </div>
    );
};

export default Categories;