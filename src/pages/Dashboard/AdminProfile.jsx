import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { RotatingLines } from 'react-loader-spinner';
import { FaRegEdit } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUserProfile from '../../hooks/useUserProfile';
const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AdminProfile = () => {

    const [uploading, setUploading] = useState(false)
    const axiosCommon = useAxiosCommon()
    const axiosSecure = useAxiosSecure()
    const { user, profileUpdateSystem, profileNameUpdateSystem } = useAuth()
    const [profileChange, setProfileChange] = useState(false)
    const [userData, userLoading, refetch] = useUserProfile()



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // loading
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

    // image uploading
    const handleImageHosting = async (event) => {
        const selectedFile = event.target.files[0]
        setUploading(true)
        const formData = new FormData()
        formData.append('image', selectedFile)

        try {
            const res = await fetch(`${image_hosting_api}`, {
                method: 'POST',
                body: formData
            })
            const data = await res.json()
            if (data.success) {
                console.log(data.data.url)

                const uploadImage = {
                    image: data.data.url
                }
                axiosCommon.patch(`/user-image-update/${user?.email}`, uploadImage)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            profileUpdateSystem(null, data.data.url)
                                .then(res => {
                                    console.log(res.data)
                                    refetch()
                                    userData.image = data.data.url
                                })
                                .catch(error => {
                                    console.log(error.message)
                                })

                        }


                    })
                    .catch(error => {
                        console.log(error.message)
                    })




            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setUploading(false)

        }

    }

    // name clicker
    const handleProfileChange = () => {
        setProfileChange(true)
    }

    const onSubmit = (data) => {
        console.log(data)
        const userUpdateInfo = {
            name: data.name,
            address: data.address,
            mobileNumber: data.mobileNumber,
            city: data.city,
            state: data.state,
            postal_code: data.postalCode,
            country: data.country
        }
        axiosCommon.patch(`/profile-update/${user?.email}`, userUpdateInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    profileNameUpdateSystem(data.name)
                        .then(res => {
                            console.log("name is Change")
                            setProfileChange(false)
                            refetch()
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }

            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            <div className='h-60  border bg-[#f3f4f6] w-full'>
                <div className='lg:w-[80%]  m-auto mt-12'>
                    <h1 className='text-2xl text-[#242e4c] font-bold'>Profile Info</h1>
                    <p className='text-[#848da0]'>Edit your name, avatar etc.</p>
                </div>
            </div>
            <div className='-mt-32'>
                <div className='flex flex-col-reverse lg:w-[80%] m-auto bg-white border'>
                    <div className='relative w-[32]'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={`${profileChange && 'hidden'} absolute right-5 top-0 `}>
                                <div onClick={handleProfileChange}>
                                    <FaRegEdit className='text-xl' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 px-5 pt-5 pb-5'>
                                <div className='flex flex-col'>
                                    <p>Your Name</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl w-full'>
                                                    <h2>{userData.name ? userData?.name : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("name")} defaultValue={userData?.name} className=' input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Mobile Number</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.mobileNumber ? userData?.mobileNumber : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("mobileNumber")} defaultValue={userData?.mobileNumber} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Current Address</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.address ? userData?.address : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("address")} defaultValue={userData?.address} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <p>Email Address</p>
                                    <div>
                                    </div>
                                    <div className='border border-[#00bba6] p-3 rounded-xl'>
                                        <h2>{userData.email ? userData?.email : 'N/A'}</h2>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>City</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.city ? userData?.city : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("city")} defaultValue={userData?.city} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>State</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.state ? userData?.state : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("state")} defaultValue={userData?.state} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Postal Code</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.postal_code ? userData?.postal_code : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("postalCode")} defaultValue={userData?.postal_code} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p>Country</p>
                                    <div>
                                        {
                                            !profileChange ? (
                                                <div className='border border-[#00bba6] p-3 rounded-xl'>
                                                    <h2>{userData.country ? userData?.country : 'N/A'}</h2>
                                                </div>
                                            ) : (
                                                <div>
                                                    <input {...register("country")} defaultValue={userData?.country} className='input input-bordered w-full' type="name" />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                            </div>
                            {
                                profileChange && (
                                    <div className='flex justify-center items-center mb-5'>
                                        <button type='submit' className='btn '>Submit</button>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                    <div className='flex-1 flex flex-col p-5  items-center w-40'>
                        <div className="avatar">
                            <div className="w-32 rounded-3xl border">

                                {
                                    uploading ? (
                                        <div className='flex h-[20vh] justify-center items-center'>
                                            <RotatingLines
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="grey"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                ariaLabel="rotating-lines-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        </div>
                                    ) : <img src={userData.image} alt='No Image' />
                                }
                            </div>
                        </div>
                        <div className=''>
                            <div className='cursor-pointer' onClick={() => document.querySelector('input[type="file"]').click()}>
                                <input onChange={handleImageHosting} type="file" hidden />
                                <div className='w-36 h-9 border flex flex-col bg-[#00bba6] text-white rounded-2xl justify-center items-center'>{uploading ? "Uploading.." : "Upload a Picture"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;