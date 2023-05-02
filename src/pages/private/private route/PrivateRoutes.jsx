import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
 if(loading){
    return  <div className="text-center mt-20">
    <Spinner aria-label="Center-aligned spinner example" size='lg' />
  </div>
 }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;