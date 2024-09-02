import React, { useState } from 'react';
import useData from '../../hooks/useData';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { RotatingLines } from 'react-loader-spinner';
import { LuSaveAll } from "react-icons/lu";

const image_hosting_key = import.meta.env.VITE_IMG_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UserProfile = () => {

    const { userData, userLoading, userRefetch } = useData()
    const [uploading, setUploading] = useState(false)
    const axiosCommon = useAxiosCommon()
    const { user } = useAuth()
    const [nameClicker, setNameClicker] = useState(true)

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
        userRefetch()
    }

    const handleNameChange = () => {
        setNameClicker(!nameClicker)
    }

    const handleChangesForName = e => {
        e.preventDefault()
        const name = e.target.name.value
        // console.log(name)
        const userNameInfo = {
            name: name
        }
        axiosCommon.patch(`/user-name-change/${user?.email}`, userNameInfo)
            .then(res => {
                console.log(res.data)
                userRefetch()
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className='h-60  border bg-[#f3f4f6] w-full'>
                <div className='w-[60%]  m-auto mt-12'>
                    <h1 className='text-2xl text-[#242e4c] font-bold'>Profile Info</h1>
                    <p className='text-[#848da0]'>Edit your name, avatar etc.</p>
                </div>
            </div>
            <div className='-mt-32'>
                <div className='flex w-[60%] m-auto bg-white border'>
                    <div className='flex-1 space-y-5 p-5'>
                        <div className='flex flex-col'>
                            <p>Your Name</p>
                            <div>
                                {
                                    nameClicker ? (
                                        <div className='border p-3 rounded-xl'>
                                            <h2>{userData.name ? userData?.name : 'N/A'}</h2>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleChangesForName} className='flex items-center border rounded-2xl'>
                                            <input placeholder='Enter Your Name' className='input  w-full' name='name' type="text" />
                                            <button type='submit' className='text-2xl '>
                                                <LuSaveAll />
                                            </button>

                                        </form>
                                    )
                                }
                            </div>

                            <div className='flex justify-end  cursor-pointer'>
                                {
                                    nameClicker ? (
                                        <div onClick={handleNameChange}>
                                            <span>Change</span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span>Change</span>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Current Address</p>
                            <div className='border p-2 rounded-xl'>
                                <h2>{userData.address ? userData?.address : 'N/A'}</h2>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Mobile Number</p>
                            <div className='border p-2 rounded-xl'>
                                <h2>{userData.address ? userData?.address : 'N/A'}</h2>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Email Address</p>
                            <div>
                            </div>
                            <div className='border p-2 rounded-xl'>
                                <h2>{userData ? userData?.email : 'kalidash'}</h2>
                            </div>

                        </div>
                    </div>
                    <div className='flex-1 flex flex-col p-5  items-center gap-3 w-40'>
                        <div className="avatar">
                            <div className="w-32 rounded-3xl border">

                                {
                                    uploading ? <RotatingLines
                                        visible={true}
                                        height="96"
                                        width="96"
                                        color="grey"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    /> : <img src={userData.image} alt='No Image' />
                                }
                            </div>
                        </div>
                        <div>
                            <label>
                                <input onChange={handleImageHosting} type="file" hidden />
                                <div className='w-40 h-9 border flex flex-col bg-[#00bba6] text-white rounded-2xl justify-center items-center'>{uploading ? "Uploading.." : "Upload a Picture"}</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;