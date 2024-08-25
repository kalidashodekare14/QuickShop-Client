import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import card from '../../assets/s1.png'
import card1 from '../../assets/s2.png'
import card2 from '../../assets/s3.png'
import card3 from '../../assets/s4.png'
import card5 from '../../assets/s6.png'

const ReadyOrderBanner = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl lg:my-20 my-10'>Ready for Order 🔥</h1>
            </div>
            <Carousel
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                responsive={responsive}>
                {/* card 1 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 2 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card1} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 3 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card2} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 4 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card3} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 6 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card5} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 7 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 8 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
                {/* card 9 */}
                <div className="relative border flex flex-col justify-center items-center p-5 me-5">
                    <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                        <h1 className="text-white">25 % OFF</h1>
                    </div>
                    <div className="p-5">
                        <img className="w-40 h-40" src={card} alt="" />
                    </div>
                    <div className="text-center text-2xl">
                        <h1>Full Shart</h1>
                        <p>$150</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                        <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ReadyOrderBanner;