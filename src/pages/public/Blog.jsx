import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useNavigation } from 'react-router-dom';


const Blog = () => {
 const navigation=useNavigation()
 if(navigation.state==='loading'){
    <Loading></Loading>
 }
    
    return (
        <>
   
        </>
    );
};

export default Blog;