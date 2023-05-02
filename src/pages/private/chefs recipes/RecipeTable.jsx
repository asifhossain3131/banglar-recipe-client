import { Rating, Table } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const RecipeTable = ({recipe}) => {
    const{cookingMethod, ingredients, rating,recipeName}=recipe
    const [filled,setFilled]=useState(false)

    const handlebookmarked=()=>{
setFilled(true)
toast.success('The recipe has been added to your favorite')
    }
    return (
        <>
           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
       {recipeName}
      </Table.Cell>
      <Table.Cell>
        {
            ingredients.map(ingradient=><li>{ingradient}</li>)
        }
      </Table.Cell>
      <Table.Cell>
        {cookingMethod}
      </Table.Cell>
      <Table.Cell>
     {rating}
      </Table.Cell>
      <Table.Cell>
       <button disabled={filled} onClick={handlebookmarked}>
<Rating size='lg'>
<Rating.Star filled={filled} />
</Rating>
       </button>
      </Table.Cell>
    </Table.Row> 
        </>
    );
};

export default RecipeTable;