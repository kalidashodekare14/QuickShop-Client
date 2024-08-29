import React, { useContext } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import card from '../../assets/s1.png'
import card1 from '../../assets/s2.png'
import card2 from '../../assets/s3.png'
import card3 from '../../assets/s4.png'
import card5 from '../../assets/s6.png'
import { dataContext } from '../../DataProvider/DataProvider';

const ReadyOrderBanner = () => {

    const { allProducts } = useContext(dataContext)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
                {
                    allProducts.map(product => (
                        <div className="relative border flex flex-col justify-center items-center me-2">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="w-full">
                                <img className="w-full h-[30vh]" src={product.image} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1 className='text-[20px]'>{product.name.slice(0, 39)}</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5 mb-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
                {/* card 1 */}


            </Carousel>
        </div>
    );
};

export default ReadyOrderBanner;