import { FaCheckDouble, FaUsers } from 'react-icons/fa6';;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TbMoneybag } from "react-icons/tb";
import { MdProductionQuantityLimits } from 'react-icons/md';
import RechartDashboard from '../../Components/RechartDashboard/RechartDashboard';
import GeoChart from '../../Components/GeoChart/Geo24HorseChart';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import GeoWeekChart from '../../Components/GeoChart/GeoWeekChart';
import GeoMonthChart from '../../Components/GeoChart/GeoMonthChart';
import GeoYearChart from '../../Components/GeoChart/GeoYearChart';

const DashboardOverview = () => {


    const axiosSecure = useAxiosSecure()

    const { data: overviewData = {}, isLoading: userLoading, refetch } = useQuery({
        queryKey: ["overviewData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard-overview`);
            return res.data;
        },
    });

    // country customar
    const country24HourseData = overviewData?.totalCountry?.last24Hours.map(country => [country._id, country.totalCustomers]) || []
    const chart24HourseData = [["Country", "Popularity"], ...country24HourseData]

    const countryWeekData = overviewData?.totalCountry?.lastWeek.map(country => [country._id, country.totalCustomers]) || []
    const chartWeekData = [["Country", "Popularity"], ...countryWeekData]

    const countryMonthData = overviewData?.totalCountry?.lastMonth.map(country => [country._id, country.totalCustomers]) || []
    const chartMonthData = [["Country", "Popularity"], ...countryMonthData]

    const countryYearData = overviewData?.totalCountry?.lastYear.map(country => [country._id, country.totalCustomers]) || []
    const chartYearData = [["Country", "Popularity"], ...countryYearData]



    const getDayName = (dayNumber) => {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
        return days[dayNumber - 1]
    }

    // week revenue
    const weekData = overviewData?.totalWeekRevenue?.revenueData.map(item => (
        {
            name: getDayName(item._id),
            pv: item.totalRevenue
        }
    ))

    console.log(weekData)

    return (
        <div className=''>
            <div className='border-b mb-5'>
                {/* <div className='flex flex-col justify-between items-center my-5 px-10'>
                    <h1 className='text-2xl'>Dashboard</h1>
                    <div className='flex  justify-center items-center gap-5'>
                        <input className='input input-bordered rounded-none' type="text" />
                        <div className="indicator">
                            <span className="indicator-item badge bg-[#de192e] text-white">{unReadNotifications?.totalUnreadNotificaton}+</span>
                            <div className='relative'>
                                <IoNotificationsCircleSharp onClick={handleOpenNotification} className='text-4xl' />
                                <div className={`${isOpenNoti ? 'visible' : 'hidden'} rounded-xl absolute right-0 w-96 h-80 border bg-white`}>
                                    <ul className='space-y-5 p-2 overflow-y-auto scroll-smooth h-full'>
                                        {
                                            notifications.map((notification, index) => (
                                                <li className='border-b p-1 space-x-1' key={index}>
                                                    <div className='flex space-x-3 items-center'>
                                                        <div className="dropdown dropdown-end">
                                                            <div className="btn btn-ghost btn-circle avatar">
                                                                <div className="w-10 rounded-full">
                                                                    <img
                                                                        alt="Tailwind CSS Navbar component"
                                                                        src={notification?.image ? notification?.image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h1 className='text-[#3a4966]'><span className='font-medium'>{notification?.name}</span> {notification.message}</h1>
                                                            <span className='font-bold'>{notification.user.email}</span>
                                                            <span className='font-semibold'>{notification.transaction_id}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={userData.image} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to={'/dashboard/admin-profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><span>Settings</span></li>
                                <li><span>Logout</span></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='lg:mx-10'>
                <Tabs>
                    <TabList className="border-none">
                        <Tab>Last 24 hour</Tab>
                        <Tab>Last weeks</Tab>
                        <Tab>Last month</Tab>
                        <Tab>Last year</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='my-10'>
                            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between lg:space-x-5 gap-5'>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <TbMoneybag className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Revennue</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>${overviewData?.totalRevenue?.last24Hours}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaUsers className='text-2xl text-[#fca3a7] p-1' />

                                        </span>
                                        <p className='text-[17px]'>Total Customar</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalCustomers?.last24Hours}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaCheckDouble className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Transaction</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalTransactions?.last24Hours}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <MdProductionQuantityLimits className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Product</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalProducts?.last24Hours}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
                                <div className='lg:w-[50%] border bg-white p-3'>
                                    <div className='p-5'>
                                        <h1 className='text-xl font-bold'>Revenue Growth <span className='text-[13px] font-normal'>(USD)</span></h1>
                                        <p className='text-[#7c7c7c]'>of the week on website and compared with e-comarce</p>
                                    </div>
                                    <RechartDashboard weekData={weekData}></RechartDashboard>
                                </div>
                                <div className='flex flex-col lg:flex-row border lg:w-[50%]'>
                                    <div className='lg:w-[65%] bg-white p-1'>
                                        <div className='p-5'>
                                            <h1 className='text-xl font-bold'>Customar Groth</h1>
                                            <p className='text-[#7c7c7c]'>of the work based on country</p>
                                        </div>
                                        <GeoChart chart24HourseData={chart24HourseData}></GeoChart>
                                    </div>
                                    <div className='space-y-5 lg:w-[20%]'>
                                        {
                                            overviewData?.totalCountry?.last24Hours.map(range => (
                                                <div key={range._id} className='p-2'>
                                                    <div className='flex items-center'>
                                                        {/* <img className='w-10' src={bd} alt="" /> */}
                                                        <h1>{range._id}</h1>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <input value={'90'} type="range" />
                                                        <span>{range.totalCustomers}%</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='my-10'>
                            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between lg:space-x-5 gap-5'>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <TbMoneybag className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Revennue</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>${overviewData?.totalRevenue?.lastWeek}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaUsers className='text-2xl text-[#fca3a7] p-1' />

                                        </span>
                                        <p className='text-[17px]'>Total Customar</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalCustomers?.lastWeek}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaCheckDouble className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Transaction</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalTransactions?.lastWeek}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <MdProductionQuantityLimits className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Product</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalProducts?.lastWeek}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
                                <div className='lg:w-[50%] border bg-white p-3'>
                                    <div className='p-5'>
                                        <h1 className='text-xl font-bold'>Revenue Growth <span className='text-[13px] font-normal'>(USD)</span></h1>
                                        <p className='text-[#7c7c7c]'>of the week on website and compared with e-comarce</p>
                                    </div>
                                    <RechartDashboard weekData={weekData}></RechartDashboard>
                                </div>
                                <div className='flex flex-col lg:flex-row border lg:w-[50%]'>
                                    <div className='lg:w-[65%] bg-white p-1'>
                                        <div className='p-5'>
                                            <h1 className='text-xl font-bold'>Customar Groth</h1>
                                            <p className='text-[#7c7c7c]'>of the work based on country</p>
                                        </div>
                                        <GeoChart chart24HourseData={chart24HourseData}></GeoChart>
                                    </div>
                                    <div className='space-y-5 lg:w-[20%]'>
                                        {
                                            overviewData?.totalCountry?.lastWeek.map(range => (
                                                <div key={range._id} className='p-2'>
                                                    <div className='flex items-center'>
                                                        {/* <img className='w-10' src={bd} alt="" /> */}
                                                        <h1>{range._id}</h1>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <input value={'90'} type="range" />
                                                        <span>{range.totalCustomers}%</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='my-10'>
                            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between lg:space-x-5 gap-5'>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <TbMoneybag className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Revennue</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>${overviewData?.totalRevenue?.lastMonth}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaUsers className='text-2xl text-[#fca3a7] p-1' />

                                        </span>
                                        <p className='text-[17px]'>Total Customar</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalCustomers?.lastMonth}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaCheckDouble className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Transaction</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalTransactions?.lastMonth}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <MdProductionQuantityLimits className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Product</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalProducts?.lastMonth}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
                                <div className='lg:w-[50%] border bg-white p-3'>
                                    <div className='p-5'>
                                        <h1 className='text-xl font-bold'>Revenue Growth <span className='text-[13px] font-normal'>(USD)</span></h1>
                                        <p className='text-[#7c7c7c]'>of the week on website and compared with e-comarce</p>
                                    </div>
                                    <RechartDashboard weekData={weekData}></RechartDashboard>
                                </div>
                                <div className='flex flex-col lg:flex-row border lg:w-[50%]'>
                                    <div className='lg:w-[65%] bg-white p-1'>
                                        <div className='p-5'>
                                            <h1 className='text-xl font-bold'>Customar Groth</h1>
                                            <p className='text-[#7c7c7c]'>of the work based on country</p>
                                        </div>
                                        <GeoChart chart24HourseData={chart24HourseData}></GeoChart>
                                    </div>
                                    <div className='space-y-5 lg:w-[20%]'>
                                        {
                                            overviewData?.totalCountry?.lastMonth.map(range => (
                                                <div key={range._id} className='p-2'>
                                                    <div className='flex items-center'>
                                                        {/* <img className='w-10' src={bd} alt="" /> */}
                                                        <h1>{range._id}</h1>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <input value={'90'} type="range" />
                                                        <span>{range.totalCustomers}%</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='my-10'>
                            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between lg:space-x-5 gap-5'>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <TbMoneybag className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Revennue</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>${overviewData?.totalRevenue?.lastYear}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaUsers className='text-2xl text-[#fca3a7] p-1' />

                                        </span>
                                        <p className='text-[17px]'>Total Customar</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalCustomers?.lastYear}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <FaCheckDouble className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Transaction</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalTransactions?.lastYear}</h1>
                                </div>
                                <div className='bg-white lg:w-52 p-5 space-y-2 border rounded-2xl'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border rounded-full border-[#fca3a7]'>
                                            <MdProductionQuantityLimits className='text-2xl text-[#fca3a7] p-1' />
                                        </span>
                                        <p className='text-[17px]'>Total Product</p>
                                    </div>
                                    <h1 className='text-3xl font-bold'>{overviewData?.totalProducts?.lastYear}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
                                <div className='lg:w-[50%] border bg-white p-3'>
                                    <div className='p-5'>
                                        <h1 className='text-xl font-bold'>Revenue Growth <span className='text-[13px] font-normal'>(USD)</span></h1>
                                        <p className='text-[#7c7c7c]'>of the week on website and compared with e-comarce</p>
                                    </div>
                                    <RechartDashboard weekData={weekData}></RechartDashboard>
                                </div>
                                <div className='flex flex-col lg:flex-row border lg:w-[50%]'>
                                    <div className='lg:w-[65%] bg-white p-1'>
                                        <div className='p-5'>
                                            <h1 className='text-xl font-bold'>Customar Groth</h1>
                                            <p className='text-[#7c7c7c]'>of the work based on country</p>
                                        </div>
                                        <GeoChart chart24HourseData={chart24HourseData}></GeoChart>
                                    </div>
                                    <div className='space-y-5 lg:w-[20%]'>
                                        {
                                            overviewData?.totalCountry?.lastYear.map(range => (
                                                <div key={range._id} className='p-2'>
                                                    <div className='flex items-center'>
                                                        {/* <img className='w-10' src={bd} alt="" /> */}
                                                        <h1>{range._id}</h1>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <input value={'90'} type="range" />
                                                        <span>{range.totalCustomers}%</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default DashboardOverview;