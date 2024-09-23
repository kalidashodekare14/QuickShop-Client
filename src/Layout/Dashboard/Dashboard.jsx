import { Link, NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../../hooks/UseAdmin";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import { Audio } from "react-loader-spinner";
import useAllUsers from "../../hooks/useAllUsers";
import UseAdmin from "../../hooks/UseAdmin";
import { FaBarsStaggered, FaFilter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { io } from "socket.io-client";
import { useQuery } from "@tanstack/react-query";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import useUserProfile from "../../hooks/useUserProfile";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin, adminLoading] = UseAdmin()
  const [allUser, loadingAllUser] = useAllUsers()
  const [isopen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [isOpenNoti, setIsOpenNoti] = useState(false)
  const axiosSecure = useAxiosSecure()
  const [userData] = useUserProfile()

  const toggleSidebar = () => {
    setIsOpen(!isopen)
  }


  const handleOpenNotification = () => {
    setIsOpenNoti(!isOpenNoti)

    axiosSecure.patch('/notification-unread-update')
      .then(res => {
        if (res.data.modifiedCount > 0) {
          notificationRefetch()
        }
      })
      .catch(error => {
        console.log(error.message)
      })

  }


  useEffect(() => {
    axiosSecure.get('/notification')
      // .then(res => res.json())
      .then(res => {
        console.log(res.data)
        setNotifications(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })

    const socket = io('http://localhost:8000')

    socket.on('newUser', (notification) => {
      setNotifications(prev => [notification, ...prev])
    })

    // socket.on('newOrder', (data) => {
    //     setNotifications(prev => [...prev, data.message])
    // })

    return () => {
      socket.disconnect()
    }

  }, [])

  const { data: unReadNotifications = 0, isLoading, refetch: notificationRefetch } = useQuery({
    queryKey: ["unReadNotifications"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notification/unread`);
      return res.data;
    },
  });


  if (adminLoading) {
    return <div className="flex justify-center items-center md:mt-60">
      <Audio
        height="100"
        width="100"
        color="#00bba6"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  }



  return loadingAllUser ? (
    <div className="flex justify-center items-center md:mt-60">
      <Audio
        height="100"
        width="100"
        color="#00bba6"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  ) : (
    <div className="flex">
      {isAdmin ? (
        <div className="relative">
          <div className={`fixed lg:relative z-10 lg:translate-x-0 duration-300 ${isopen ? 'translate-x-0' : '-translate-x-full'} transform `}>
            <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between  mt-6">
                <nav className="flex-1 -mx-3 space-y-3">
                  <div>
                    <h1 className="uppercase text-[#5f5d5d]">Menu</h1>
                  </div>
                  <NavLink to={"/dashboard/overview"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" : "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>

                    <p className="mx-2 text-sm font-medium">Overview</p>
                  </NavLink>

                  <NavLink
                    to="/dashboard/manageProducts"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" : "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>

                    <span className="mx-2 text-sm font-medium">
                      Manage Products
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/addProduct"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" : "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>

                    <span className="mx-2 text-sm font-medium">Add Product</span>
                  </NavLink>

                  <NavLink to={"/dashboard/order-history"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" : "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>

                    <span className="mx-2 text-sm font-medium">Order History</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/allUser"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 text-[#00bba6] border border-[#00bba6] dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" : "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>

                    <span className="mx-2 text-sm font-medium">Users</span>
                  </NavLink>
                </nav>
                <div className="divider">OR</div>
                <div>
                  <Link to={'/'} className="flex items-center space-x-3 text-sm font-medium ">
                    <FaHome />
                    <h1>Home</h1>
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
      <div className="flex-1 w-full bg-[#FAF9F6]">
        <div className='flex flex-col lg:flex-row justify-between items-center py-5 lg:px-10'>
          <h1 className='text-2xl mb-5'>Dashboard</h1>
          <div className='flex flex-row-reverse lg:flex-row  items-center gap-8'>
            <div className="lg:hidden">
              <FaBarsStaggered onClick={toggleSidebar} />
            </div>
            <div>
              <input className='input input-bordered rounded-none' type="text" />
            </div>
            <div className="indicator">
              <span className="indicator-item badge bg-[#de192e] text-white">{unReadNotifications?.totalUnreadNotificaton}+</span>
              <div className='relative'>
                <IoNotificationsCircleSharp onClick={handleOpenNotification} className='text-4xl' />
                <div className={`${isOpenNoti ? 'visible' : 'hidden'} rounded-xl absolute lg:right-0 z-10 w-96 h-80 border bg-white`}>
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
            <div className="dropdown lg:dropdown-end">
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
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
