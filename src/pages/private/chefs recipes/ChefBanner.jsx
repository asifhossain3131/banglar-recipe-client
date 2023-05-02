import { Card } from 'flowbite-react';
import React from 'react';

const ChefBanner = ({chef}) => {
    const{chefImage,chefName,likes,recipes,yearOfExperience,shortBio}=chef
    return (
        <div className='chefBanner text-white'>
<h1 className='mb-8 text-center font-bold text-2xl'>Introduction Of The Chef</h1>
        <div className='flex flex-col lg:flex-row justify-around gap-4 items-center'>

        <div>
         <img src={chefImage} alt="" className='w-[500px]'/>
         </div>

         <div className="max-w-sm">
         <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {chefName}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
  <b> Short Description:</b> {shortBio}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
  <b>Likes:</b> {likes}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
  <b> Year Of Experience:</b> {yearOfExperience}
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
  <b>Number Of Recipes:</b> {recipes?.length}
    </p>
  </Card>
         </div>
        </div>

        </div>
    );
};

export default ChefBanner;