import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';

const ChefRecipes = () => {
    const chef=useLoaderData()
    const{chefImage,chefName,likes,recipes,yearOfExperience,shortBio}=chef
    console.log(chef)
    return (
        <>
           <ChefBanner chef={chef}></ChefBanner> 
        </>
    );
};

export default ChefRecipes;