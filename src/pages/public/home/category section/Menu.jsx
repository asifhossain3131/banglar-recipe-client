import { Card } from 'flowbite-react';
import React from 'react';

const Menu = ({menu}) => {
    const {strMeal,strMealThumb}=menu
    return (
        <div className="max-w-sm">
        <Card>
            <img src={strMealThumb} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {strMeal}
          </h5>
        </Card>
      </div>
    );
};

export default Menu;