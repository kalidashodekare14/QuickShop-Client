import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { IoMdCopy } from 'react-icons/io';
import { SiGooglemessages } from 'react-icons/si';
import { Link } from 'react-router-dom';

const OrderHistory = () => {

    const axiosSecure = useAxiosSecure()

    const { data: userData = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order-history`);
            return res.data;
        },
    });


    console.log(userData)


    return (
        <div>
            <h1>Order Now</h1>
            <div className='flex justify-center gap-5'>
                <div className='bg-white w-52 h-32 border rounded-2xl flex flex-col items-center justify-center'>
                    <p className='text-[#86858f]'>Total Orders</p>
                    <p className='text-3xl font-bold'>21 -</p>
                </div>
                <div className='bg-white w-52 h-32 border rounded-2xl flex flex-col items-center justify-center'>
                    <p className='text-[#86858f]'>New Orders</p>
                    <p className='text-3xl font-bold'>25 -</p>
                </div>
                <div className='bg-white w-52 h-32 border rounded-2xl flex flex-col items-center justify-center'>
                    <p className='text-[#86858f]'>Returns Orders</p>
                    <p className='text-3xl font-bold'>0 -</p>
                </div>
                <div className='bg-white w-52 h-32 border rounded-2xl flex flex-col items-center justify-center'>
                    <p className='text-[#86858f]'>Fulfilled Orders</p>
                    <p className='text-3xl font-bold'>21 -</p>
                </div>
            </div>
            <div className='my-10 mx-5'>
                <Tabs classID='border'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Unfulfilled</Tab>
                        <Tab>Unpaid</Tab>
                        <Tab>Pending</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="overflow-x-auto">
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        userData.map(order => (
                                            <tr>
                                                <th>{order.paymentId}</th>
                                                <td>{order.date ? order.date : 'N/A'}</td>
                                                <td>{order.customar_name}</td>
                                                <td>
                                                    {
                                                        order.status ? (
                                                            <h2 className='border px-3 text-[#08b047] border-[#08b047] rounded-xl'>
                                                                ● Success
                                                            </h2>
                                                        ) : (
                                                            <h2 className='border px-3 text-red-500 border-red-500 rounded-xl'>
                                                                ● Pending
                                                            </h2>
                                                        )
                                                    }
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
                                                <td>
                                                    <div className='flex items-center gap-2 text-xl'>
                                                        <IoMdCopy />
                                                        <SiGooglemessages />
                                                    </div>
                                                </td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderHistory;