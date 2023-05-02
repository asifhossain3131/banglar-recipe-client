import React from 'react';
import Banner from '../Banner';
import Chefs from './chefs section/Chefs';
import CategoriesFoods from './category section/CategoriesFoods';
import Newses from './news section/Newses';

const Home = () => {
    return (
        <>
    <Banner></Banner>
    <Chefs></Chefs>
    <CategoriesFoods></CategoriesFoods>
    <Newses></Newses>
        </>
    );
};

export default Home;