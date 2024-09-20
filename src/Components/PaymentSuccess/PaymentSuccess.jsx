import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useOrderHistory from '../../hooks/useOrderHistory';
import { useCart } from 'react-use-cart';

const PaymentSuccess = () => {

    const [transactionId, setTransactionId] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const { isEmpty, items, emptyCart } = useCart()

    useEffect(() => {
        const pramas = new URLSearchParams(location.search)
        const tranId = pramas.get("tran_id")
        if (tranId) {
            setTransactionId(tranId)
            localStorage.setItem('paymentStatus', 'success')
            emptyCart()

            // setTimeout(() => {
            //     localStorage.removeItem('paymentStatus');
            // }, 3000)
        }
        else {
            navigate('/')
        }

    }, [location, navigate])

    console.log(transactionId)

    return (
        <div className='h-[500px] flex flex-col justify-center items-center'>
            <h1 className='text-2xl flex items-center space-x-2'>
                <FaCheckCircle className='text-2xl text-[#73c21d]' />
                <span className='text-[#63bc03cb]'>Payment Successful!</span>
            </h1>
            <p className='font-bold'>Thank you! your payment has been received</p>
            <div className=' text-[#888888]'>
                <p>Transaction id: {transactionId ? transactionId : 'N/A'}</p>
            </div>
            <Link to={"/"}>
                <button className='btn rounded-none my-5 bg-[#00bba6] text-white'>Go To Home</button>
            </Link>
        </div>
    );
};

export default PaymentSuccess;