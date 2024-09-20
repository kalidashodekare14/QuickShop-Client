import React from 'react';
import { Navigate } from 'react-router-dom';

const PaymentProtectedRoute = ({ children }) => {
    const payemntStatus = localStorage.getItem('paymentStatus');
    if (payemntStatus !== 'success') {
        return <Navigate to={'/'} />
    }
    return children
};

export default PaymentProtectedRoute;