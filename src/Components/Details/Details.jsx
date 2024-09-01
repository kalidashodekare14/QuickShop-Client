import React from 'react';
import img from '../../assets/card.jpg'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import ImageZoom from "react-image-zooom";
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const productDetails = useLoaderData()
    console.log(productDetails)

    return (
        <div className='mx-20 flex justify-center items-center min-h-screen gap-10'>
            <div className='w-[50%]'>
               
                <img className='w-[70%]' src={productDetails.image} alt="" />
            </div>
            <div className='w-[50%] space-y-5'>
                <h1 className='text-3xl'>T-Shart Reebok Zig Kinetica 3</h1>
                <div className='flex items-center gap-3'>
                    <Rating
                        className=''
                        style={{ maxWidth: 100 }}
                        value={3}
                        readOnly
                    />
                    <span>42 Reviews</span>
                </div>
                <div>
                    <h1 className='text-4xl'>$150</h1>
                </div>
                <div className='space-y-3'>
                    <h2>Brand Name</h2>
                    <h2>Category</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='btn'>Buy Now</button>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;