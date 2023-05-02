import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';


const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location=useLocation()
 if(loading){
    return  <Loading></Loading>
 }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;