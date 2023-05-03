import { Button, Card } from 'flowbite-react';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const CategoryFood = ({category}) => {
    const{strCategory,strCategoryThumb}=category
    return (
        <div className="max-w-sm">
        <Card>
        <LazyLoad><img src={strCategoryThumb} alt="" /></LazyLoad>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {strCategory}
          </h5>
   <Link to={`/menus/${strCategory}`}>
   <Button color="purple">
      See All Menus
    </Button>
   </Link>
        </Card>
      </div>
    );
};

export default CategoryFood;