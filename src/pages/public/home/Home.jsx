import React from 'react';
import Banner from '../Banner';
import Chefs from './chefs section/Chefs';
import CategoriesFoods from './category section/CategoriesFoods';

const Home = () => {
    return (
        <>
    <Banner></Banner>
    <Chefs></Chefs>
    <CategoriesFoods></CategoriesFoods>
        </>
    );
};

export default Home;