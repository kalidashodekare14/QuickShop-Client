import React from 'react';
import useAuth from '../../../hooks/useAuth';
import UseAdmin from '../../../hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, adminLoading] = UseAdmin()
    const location = useLocation()


    if (loading || adminLoading) {
        return <div>
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

    if (user && isAdmin) {
        return children
    }

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;