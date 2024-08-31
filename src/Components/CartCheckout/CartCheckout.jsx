import React from 'react';
import { useCart } from 'react-use-cart';
import { FaDeleteLeft } from "react-icons/fa6";

const CartCheckout = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    // console.log(items)

    return (
        <div>
            <div>
                <h1 className='text-center my-20 text-4xl'>Shopping Cart</h1>
            </div>
            <div className='flex justify-between mx-20 space-x-20'>
                <div className='w-full'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((cart) => (
                                        <tr>
                                            <td>
                                                <img className='w-32' src={cart.image} alt="" />
                                            </td>
                                            <td>Quality Control Specialist</td>
                                            <td>${cart.price}</td>
                                            <td>
                                                <input className='input input-bordered' type="text" />
                                            </td>
                                            <td>${cart.price}</td>
                                            <td>
                                                <div onClick={() => removeItem(cart.id)}>
                                                    <FaDeleteLeft className='text-2xl text-red-500' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <div>
                        <div>
                            <p>Enter Promo Code</p>
                            <div className='border rounded-lg flex items-center'>
                                <input className='input w-full' type="text" />
                                <button className='btn rounded-none '>Submit</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Shopping Cost : </h2>
                                <h2>TBF</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Discount : </h2>
                                <h2>$857</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Tex : </h2>
                                <h2>TBF</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Estimated Total : </h2>
                                <h2>TBF</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='btn w-32'>Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCheckout;