import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useNavigation } from 'react-router-dom';
import { Accordion, Button } from 'flowbite-react';
import { FaFileDownload, FaRegFilePdf } from 'react-icons/fa';


const Blog = () => {
 const navigation=useNavigation()
 if(navigation.state==='loading'){
    <Loading></Loading>
 }
    
    return (
        <>
            <div className='bg-black text-white p-16 text-center'>
        <h1 className='font-bold text-2xl '>Most Frequantly Asked Questions</h1>
        <Button className='mx-auto mt-4' gradientMonochrome="info">
      <FaRegFilePdf></FaRegFilePdf>
      <span className='mx-2'>Download All Questions</span>
      <FaFileDownload></FaFileDownload>
    </Button>
</div>

        <div className='my-12'>
    <Accordion collapseAll={true}>
  <Accordion.Panel>
    <Accordion.Title>
    1. The differences between uncontrolled and controlled components.
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to 
        <a
          href="https://flowbite.com/docs/getting-started/introduction/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
        and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     2. How to validate React props using PropTypes?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to 
        <a
          href="https://flowbite.com/docs/getting-started/introduction/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
        and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    3.The difference between nodejs and express js.
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out the
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Figma design system
        </a>
        based on the utility classes from Tailwind CSS and components from Flowbite.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
  4. What is a custom hook, and why will you create a custom hook?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
        <li>
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Flowbite Pro
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
    </div>
        </>
    );
};

export default Blog;