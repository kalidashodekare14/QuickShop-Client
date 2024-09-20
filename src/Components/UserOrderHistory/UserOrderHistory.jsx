import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { IoMdCopy } from 'react-icons/io';
import { SiGooglemessages } from 'react-icons/si';
import { RotatingLines } from 'react-loader-spinner';

const UserOrderHistory = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: userOrderHistory = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ["userOrder", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-order-history/${user?.email}`);
            return res.data;
        },
    });

    if (userLoading) {
        return <div className='flex justify-center items-center h-[40vh]'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }

    console.log(userOrderHistory)


    return (
        <div className='bg-[#f3f4f6] min-h-screen'>
            <div className=' border bg-[#f3f4f6] w-full'>
                <div className='lg:w-[70%]  m-auto mt-12'>
                    <h1 className='text-2xl text-[#242e4c] font-bold'>Order History</h1>
                    <p className='text-[#848da0]'>You can view your order</p>
                </div>
            </div>
            <div className='lg:w-[70%] m-auto border bg-[#ffffff]'>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-200 text-[14px]">
                                <th>Transaction Id</th>
                                <th>Date</th>
                                <th>Customar</th>
                                <th>Payment</th>
                                <th>Total</th>
                                <th>Delivery</th>
                                <th>Items</th>
                                <th>Fulfilment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrderHistory.map(order => (
                                    <tr>
                                        <th>{order.paymentId}</th>
                                        <td>{order.date ? new Date(order.date).toLocaleDateString() : 'N/A'}</td>
                                        <td>{order.customar_name}</td>
                                        <td>
                                            <div className={`${order.status === 'Success' && 'text-green-500 p-2 rounded-xl border border-green-500 ' || order.status === 'Pending' && ' text-red-500 p-2 rounded-xl border border-red-500 '}`}>
                                                {
                                                    order.status
                                                }
                                            </div>
                                        </td>
                                        <td>${order.amount}</td>
                                        <td>{order.delivery ? order.delivery : 'N/A'}</td>
                                        <td>
                                            <Link to={`/dashboard/order-items/${order._id}`}>
                                                <div className='btn rounded-none'>
                                                    {order?.order_details.length || 0} items
                                                </div>
                                            </Link>
                                        </td>
                                        <td>
                                            {
                                                order?.fulfilment ? (
                                                    <h2 className='border px-3 text-[#08b047] border-[#08b047] rounded-xl'>
                                                        ● Fulfilled
                                                    </h2>
                                                ) : (
                                                    <h2 className='border px-3 text-red-500 border-red-500 rounded-xl'>
                                                        ● Unfulfilled
                                                    </h2>
                                                )
                                            }
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserOrderHistory;