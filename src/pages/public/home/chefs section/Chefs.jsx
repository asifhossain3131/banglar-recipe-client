import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-server-asifhossain3131.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
  
    return (
        <div className='my-12'>
          <h1 className='font-bold text-4xl text-center'>Meet The Best Chefs In The City</h1>
          <div className=' mt-12 lg:mx-12 grid grid-cols-1 lg:grid-cols-3 gap-4 '>
            {
                chefs.map(chef=><Chef key={chef.chefId} chef={chef}></Chef>)
            }
          </div>
        </div>
    );
};

export default Chefs;