import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import { Table } from 'flowbite-react';
import RecipeTable from './RecipeTable';

const ChefRecipes = () => {
    const chef=useLoaderData()
    const{chefImage,chefName,likes,recipes,yearOfExperience,shortBio}=chef
    return (
        <>
           <ChefBanner chef={chef}></ChefBanner> 
           <div className='mt-12'>
            <h1 className='font-bold text-4xl text-center'>Chef's Recipes</h1>
            <Table className='mt-8' striped={true}>
  <Table.Head>
    <Table.HeadCell>
      Recipe name
    </Table.HeadCell>
    <Table.HeadCell>
      Ingradients
    </Table.HeadCell>
    <Table.HeadCell>
      Cooking method
    </Table.HeadCell>
    <Table.HeadCell>
      Rating
    </Table.HeadCell>
    <Table.HeadCell>
      Add To Favorite
    </Table.HeadCell>
  </Table.Head>

  <Table.Body className="divide-y">
    {
        recipes.map((recipe, i)=><RecipeTable key={i} recipe={recipe}></RecipeTable>)
        }
   
  </Table.Body>
</Table>
           </div>
        </>
    );
};

export default ChefRecipes;