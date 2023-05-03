import React from 'react';
import errorimg from '../../assets/images/brokenCup.jpg'
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from 'flowbite-react';

const ErrorPage = () => {
    const error=useRouteError()
    const navigate=useNavigate()
    const handleGoBack=()=>{
navigate(-1)
    }
    return (
        <div className='flex flex-col gap-4 items-center mt-12'>
            <img src={errorimg} alt="" className='w-[400px]'/>
            <h1 className='text-red-600 font-bold text-6xl'>{error?.status}</h1>
            <p className='font-semibold text-2xl'>{error?.statusText}</p>
            <p>{error?.error?.message}</p>
          <Button onClick={handleGoBack} color="failure">
      Go Back
    </Button>
        </div>
    );
};

export default ErrorPage;