import React, { useEffect, useState } from 'react';
import CategoryFood from './CategoryFood';

const CategoriesFoods = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-server-asifhossain3131.vercel.app/foods')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='mb-12'>
            <h1 className='font-bold text-4xl text-center'>Discover Your Favorite Category</h1>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 mx-12 gap-4'>
                {
                    categories?.map(category=><CategoryFood key={category.idCategory} category={category}></CategoryFood>)
                }
            </div>
        </div>
    );
};

export default CategoriesFoods;