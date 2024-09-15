import React from 'react';
import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    if (loading) {
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

    if (user) {
        return children
    }

    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;