import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Menu from './Menu';
import Loading from '../../../components/Loading';

const Menus = () => {
    const data=useLoaderData()
    const menus=data.meals
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    return (
        <div className='mt-12'>
            <h1 className='font-bold text-2xl text-center'>Available Menus: {menus?.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-12 gap-4 mt-8'>
                {
                    menus?.map(menu=><Menu key={menu.idMeal} menu={menu}></Menu>)
                }
            </div>
        </div>
    );
};

export default Menus;