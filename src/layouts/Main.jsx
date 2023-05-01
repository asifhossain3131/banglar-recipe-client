import React from 'react';
import Header from '../pages/shared/Header';
import FooterPart from '../pages/shared/FooterPart';
import { Outlet } from 'react-router-dom';



const Main = () => {
    return (
        <>
        <Header></Header>
        <div className='min-h-[calc(100vh-400px)]'>
            <Outlet></Outlet>
        </div>
        <FooterPart></FooterPart>
        </>
    );
};

export default Main;