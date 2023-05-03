import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const{chefId,chefName,chefImage,yearOfExperience,likes,recipes}=chef
    const [isLoaded, setIsLoaded]=useState(true)
    return (
        <div className="max-w-sm">
  <Card>
   <LazyLoad className={({isLoaded})=>isLoaded?
  'is-visible' : 'LazyLoad'
  } height={300} offset={200} onContentVisible={() => {setIsLoaded(false)}}> 
   <img src={chefImage} alt="" className='h-[250px]' loading='lazy'/>
   </LazyLoad>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {chefName}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Years of experience: {yearOfExperience}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Number of recipes: {recipes.length}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Likes: {likes}
    </p>

<Link to={`/chefRecipe/${chefId}`}>
<Button color="purple">
      View All Recipes
      <FaAngleDoubleRight className='ms-4'></FaAngleDoubleRight>
    </Button>
</Link>
 
  </Card>
</div>
    );
};

export default Chef;