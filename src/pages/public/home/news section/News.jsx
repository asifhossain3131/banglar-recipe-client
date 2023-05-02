import { Card } from 'flowbite-react';
import React from 'react';

const News = ({news}) => {
    const {title, image, authorName,comments,publishedIn,shortDescription}=news
    return (
        <div className="mx-auto">
  <Card
    horizontal={true}
    imgSrc={image}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <small>{shortDescription}</small>
    </p>
    <div>
        <p><span className='font-semibold'>Author Name:</span> {authorName}</p>
        <p><span className='font-semibold'>Published In:</span> {publishedIn}</p>
        <p><span className='font-semibold'>Comments:</span> {comments}</p>
    </div>
  </Card>
</div>
    );
};

export default News;