import React from 'react';
import Lottie from "lottie-react";
import chef from './../../../assets/animations/19705-chef.json'

const About = () => {
    return (
        <>
        <h1 className='my-4 font-bold text-center text-4xl bg-black text-white p-8 bg-opacity-75'>About us</h1>
         <div className=' text-white flex flex-col-reverse lg:flex-row items-center justify-around'>
      <div className=' w-[300px] p-8 bg-black bg-opacity-50 flex flex-col gap-2'>
      <h1 className='text-4xl font-bold text-center'>Nice to meet you!</h1>
      <p className='font-semibold text-xl text-center'>Let Us Tell You About Us</p>
      <p><small>
      Our mission at Cookpad is to make everyday cooking fun, because we believe that cooking is key to a happier and healthier life for people, communities and the planet. We empower homecooks all over the world to help each other by sharing recipes and cooking tips.
        </small></p>
      </div>
          <div>
            <Lottie animationData={chef} loop={true}/>
          </div>
         </div>    
<section>
  <h1 className='mt-4 mb-16 font-bold text-center text-4xl'>Our Services</h1>
    <div className='flex flex-col lg:flex-row justify-around mb-8'>
    <img src="https://i.ytimg.com/vi/WX1sjky1u6Y/maxresdefault.jpg" alt="" className='w-[400px]'/>
    <div className='w-[400px] lg:w-[600px]'>
      <h3 className='font-semibold text-2xl mb-2'>World Classified Chefs</h3>
      <p className='text-gray-700'>
      Bangladeshi chefs, with their best possible efforts and dedication, are gaining international recognition as the top Asian Chefs. Kishwar Chowdhury's triumph at the Masterchef Australia made headlines last year. But there are many more top names we might not have heard about. While Kishwar took our country's name on the international stage recently, there are many remarkable names who have done tremendously in terms of enriching Bengali culinary and food traditions.
      </p>
    </div>
    </div>

    <div className='flex flex-col-reverse lg:flex-row justify-around mb-8'>
    <div className='w-[400px] lg:w-[600px]'>
      <h3 className='font-semibold text-2xl mb-2'>Popular Banladeshi cuisines</h3>
      <p className='text-gray-700'>
      Bangladeshi cuisine refers to the food and culinary traditions prevalent in Bangladesh. Dating far in the past, the cuisine emphasizes fish, vegetables and lentils served with rice. Because of differences in history and Bangladeshi geography, the cuisine is rich in regional variations. While having unique traits, Bangladeshi cuisine is closely related to that of surrounding Bengali and North-East Indian, with rice and fish as traditional favorites. Bangladesh also developed the only multi-course tradition in South Asia. It is known as Bangaliketa styled cuisine. Bangladeshi food is served by course rather than all at once.
      </p>
    </div>
    <img src="https://www.chefspencil.com/wp-content/uploads/Top-25-most-popular-foods-in-Bangladesh.jpg" alt="" className='w-[400px]'/>
    </div>

    <div className='flex flex-col lg:flex-row justify-around mb-8'>
    <img src="https://thumbs.dreamstime.com/b/culinary-classes-course-tv-show-masterclass-vector-master-class-workshop-chef-students-training-teaching-new-skills-191676919.jpg" alt="" className='w-[400px]'/>
    <div className='w-[400px] lg:w-[600px]'>
      <h3 className='font-semibold text-2xl mb-2'>Professional Training course</h3>
      <p className='text-gray-700'>
      Our flagship professional diplomas, TVET programs that impart ought-to-know knowledge, skills, and industry best practices to aspiring chefs, and entrepreneurs, enabling them to seamlessly integrate, effectively deliver and excel in the hospitality industry globally. The hotel management and tourism industry in Bangladesh is booming and this is the right time to get yourself engaged in activities that you like most. However, if you love cooking, apart from the usual kind that everyone does at their home, having the best chef course in Dhaka can increase your chances of getting an amazing job in this industry. The best part of this course is that you get a chance to work in Bangladesh or abroad.
      </p>
    </div>
    </div>
</section>
        </>
    );
};

export default About;