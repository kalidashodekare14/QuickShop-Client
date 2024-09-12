import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const CartCheckout = () => {

    const axiosCommon = useAxiosCommon()
    const salesTexRate = 0.1


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    const salesTax = cartTotal * salesTexRate
    const grandTotal = cartTotal + salesTax

    const handleDeleteButton = (cart) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (removeItem(cart.id)) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    }

    const handleCartPayment = () => {
        const paymentInfo = {
            amount: 1500,
            currency: 'BDT'
        }
        axiosCommon.post('/create-payment', paymentInfo)
            .then(res => {
                console.log(res)
                const redirecUrl = res.data.paymentUrl
                if (redirecUrl) {
                    window.location.replace(redirecUrl)
                }
            })
    }

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
                                                <div className='flex items-center'>
                                                    <button onClick={() => updateItemQuantity(cart.id, Math.max(1, cart.quantity - 1))} className='btn'>-</button>
                                                    <input value={cart.quantity} className='input input-bordered w-12' type="text" />
                                                    <button onClick={() => updateItemQuantity(cart.id, cart.quantity + 1)} className='btn'>+</button>
                                                </div>
                                            </td>
                                            <td>${cart.price * cart.quantity}</td>
                                            <td>
                                                <div onClick={() => handleDeleteButton(cart)}>
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
                                <h2>Subtotal :</h2>
                                <h2>${cartTotal.toFixed(2)}</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Sales Tax :</h2>
                                <h2>${salesTax.toFixed(2)}</h2>
                            </div>
                            <div className='mb-5 flex justify-between items-center'>
                                <h2>Grand Total : </h2>
                                <h2>${grandTotal.toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={handleCartPayment} className='btn w-32'>Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCheckout;