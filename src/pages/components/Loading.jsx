import React from 'react';
import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <div className='flex items-center justify-center gap-4 my-12'>
            <ReactLoading  type='spin' color='blue' height={100} width={100}></ReactLoading>
            <span className='text-4xl lg:text-8xl flex items-center'>
            Loading....</span>
        </div>
    );
};

export default Loading;