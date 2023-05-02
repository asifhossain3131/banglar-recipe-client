import React from 'react';
import errorimg from '../../assets/images/brokenCup.jpg'
import { Link, useRouteError } from 'react-router-dom';
import { Button } from 'flowbite-react';

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className='flex flex-col gap-4 items-center mt-12'>
            <img src={errorimg} alt="" className='w-[400px]'/>
            <h1 className='text-red-600 font-bold text-6xl'>{error?.status}</h1>
            <p className='font-semibold text-2xl'>{error?.statusText}</p>
            <p>{error?.error?.message}</p>
          <Link to='/'>
          <Button color="failure">
      Go Back
    </Button>
          </Link>
        </div>
    );
};

export default ErrorPage;