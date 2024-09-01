import React from 'react';
import useData from '../../hooks/useData';

const UserProfile = () => {

    const { userData } = useData()
    console.log(userData)

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
                            <label htmlFor="">Your Name</label>
                            <input  className='input input-bordered' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Your Password</label>
                            <input defaultValue={userData.password}  className='input input-bordered' type="password" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email Address</label>
                            <input value={userData.email} className='input input-bordered' type="text" />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col p-5  items-center gap-3 w-40'>
                        <div className="avatar">
                            <div className="w-32 rounded-3xl">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <button className='btn'>Upload a Picture</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;