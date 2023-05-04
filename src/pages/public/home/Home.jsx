import React from 'react';
import Banner from '../Banner';
import Chefs from './chefs section/Chefs';
import CategoriesFoods from './category section/CategoriesFoods';
import Newses from './news section/Newses';
import { useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading';

const Home = () => {
    // showing loader while loading 
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
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