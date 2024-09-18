import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderItems = () => {

    const items = useLoaderData()


    const productItems = items.order_details
    console.log(productItems)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10 mx-5'>
            {
                productItems.map(items => (
                    <div className="relative card bg-base-100 shadow-xl">
                        <figure className=''>
                            <div className='absolute top-0 right-0 bg-[#00bba6] w-20 flex justify-center items-center'>
                                <p className='text-2xl text-white'>{items.quantity} Pics</p>
                            </div>
                            <img
                                className='w-full h-[250px]'
                                src={items.image}
                                alt="Shoes" />

                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{items.product_name}</h2>
                            <div>
                                <p>Brand Name: {items.brand_name}</p>
                                <p>Category: {items.category}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default OrderItems;