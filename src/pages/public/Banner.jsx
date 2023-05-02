import React from 'react';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';

const Banner = () => {
    return (
        <div className='banner text-white grid grid-cols-1 lg:grid-cols-2 gap-4 justify-around'>
           <LeftNav></LeftNav>
           <RightNav></RightNav>
        </div>
    );
};

export default Banner;