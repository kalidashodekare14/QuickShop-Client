import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className='h-[500px] flex flex-col justify-center items-center'>
            <h1 className='text-2xl flex items-center space-x-2'>
                <FaCheckCircle className='text-2xl text-[#73c21d]' />
                <span className='text-[#63bc03cb]'>Payment Successful!</span>
            </h1>
            <p className='font-bold'>Thank you! payment of Rs. 3000 has been received</p>
            <div className=' text-[#888888]'>
                <p>Order Id: 66e465057493e110078a67c8</p>
                <p>Transaction id: 66e465057493e110078a67c8</p>
            </div>
            <Link to={"/"}>
                <button className='btn rounded-none my-5 bg-[#00bba6] text-white'>Go To Home</button>
            </Link>
        </div>
    );
};

export default PaymentSuccess;