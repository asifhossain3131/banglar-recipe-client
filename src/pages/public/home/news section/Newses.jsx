import React, { useEffect, useState } from 'react';
import News from './News';

const Newses = () => {
    const [newses, setNewses]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-server-asifhossain3131.vercel.app/news')
        .then(res=>res.json())
        .then(data=>setNewses(data))
    },[])
    return (
        <div className='my-12'>
           <h1 className='font-bold text-4xl text-center'>Explore Latest News</h1>
           <div className='mt-12 grid grid-cols-1 gap-4'>
            {
                newses?.map(news=><News key={news.newsId} news={news}></News>)
            }
           </div>
        </div>
    );
};

export default Newses;