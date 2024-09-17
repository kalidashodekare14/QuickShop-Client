import React from 'react';
import faild from '../../assets/failed.png'
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
    return (
        <div className='h-[500px] flex flex-col justify-center items-center gap-3'>
            <img className='w-32' src={faild} alt="" />
            <h1 className='text-3xl text-[#656565]'>Your Payment Cancel</h1>
            <p className='text-xl text-[#656565bd]'>Please try again</p>
            <Link to={"/"}>
                <button className='btn rounded-none bg-[#00bba6] text-white'>Go to Back</button>
            </Link>
        </div>
    );
};

export default PaymentCancel;