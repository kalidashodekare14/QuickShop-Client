import { FaCheckDouble, FaFonticonsFi, FaUsers } from 'react-icons/fa6';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TbMoneybag } from "react-icons/tb";
import { MdProductionQuantityLimits } from 'react-icons/md';
import RechartDashboard from '../../Components/RechartDashboard/RechartDashboard';
import GeoChart from '../../Components/GeoChart/GeoChart';
import bd from '../../assets/bangladesh.png'
import ind from '../../assets/india.png'
import ca from '../../assets/canada.png'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DashboardOverview = () => {


    const axiosSecure = useAxiosSecure()

    const { data: overviewData = {}, isLoading: userLoading, refetch } = useQuery({
        queryKey: ["overviewData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard-overview`);
            return res.data;
        },
    });


    console.log(overviewData)

    return (
        <div className=''>
            <div className='border-b mb-5'>
                <div className='flex justify-between items-center my-5 px-10'>
                    <h1 className='text-2xl'>Dashboard</h1>
                    <div className='flex justify-center items-center gap-5'>
                        <input className='input input-bordered rounded-none' type="text" />
                        <div className="indicator">
                            <span className="indicator-item badge bg-[#de192e] text-white">99+</span>
                            <IoNotificationsCircleSharp className='text-4xl' />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <span className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </span>
                                </li>
                                <li><span>Settings</span></li>
                                <li><span>Logout</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-10'>
                <Tabs>
                    <TabList className="border-none">
                        <Tab>Last 24 hour</Tab>
                        <Tab>Last weeks</Tab>
                        <Tab>Last month</Tab>
                        <Tab>Last year</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='my-10'>
                            <div className='my-10 flex justify-between space-x-5'>
                                <div className='bg-white w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <TbMoneybag className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Revennue</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>${overviewData?.totalRevenue?.last24Hours}</h1>
                                </div>
                                <div className='bg-white w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaUsers className='text-2xl text-[#fca3a7] p-1' />

                                        </span>
                                        <p className='text-[17px]'>Total Customar</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalCustomers?.last24Hours}</h1>
                                </div>
                                <div className='bg-white w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaCheckDouble className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Transaction</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalTransactions?.last24Hours}</h1>
                                </div>
                                <div className='bg-white w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <MdProductionQuantityLimits className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Product</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalProducts?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 w-full'>
                                <div className='w-[50%] border bg-white p-3'>
                                    <RechartDashboard></RechartDashboard>
                                </div>
                                <div className='flex border w-[50%]'>
                                    <div className='w-[65%] bg-white p-1'>
                                        <GeoChart></GeoChart>
                                    </div>
                                    <div className='space-y-5 w-[20%]'>
                                        <div className='p-2'>
                                            <div className='flex items-center'>
                                                <img className='w-10' src={bd} alt="" />
                                                <h1>Bangladesh</h1>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <input value={'90'} type="range" />
                                                <span>50%</span>
                                            </div>
                                        </div>
                                        <div className='p-2'>
                                            <div className='flex items-center'>
                                                <img className='w-10' src={ind} alt="" />
                                                <h1>India</h1>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <input value={'60'} type="range" />
                                                <span>50%</span>
                                            </div>
                                        </div>
                                        <div className='p-2'>
                                            <div className='flex items-center'>
                                                <img className='w-10' src={ca} alt="" />
                                                <h1>Bangladesh</h1>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <input value={'30'} type="range" />
                                                <span>50%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default DashboardOverview;