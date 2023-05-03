import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useNavigation } from 'react-router-dom';
import { Accordion, Button } from 'flowbite-react';
import { FaFileDownload, FaRegFilePdf } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from '../components/PdfFile';


const Blog = () => {
 const navigation=useNavigation()
 if(navigation.state==='loading'){
    <Loading></Loading>
 }
    
    return (
        <>
            <div className='bg-black text-white p-16 text-center'>
        <h1 className='font-bold text-2xl '>Most Frequantly Asked Questions</h1>
<PDFDownloadLink className='mx-auto mt-4' document={<PdfFile/>} fileName='Interview questions'>
{({loading}) => (loading ?    <Button className='mx-auto mt-4' gradientMonochrome="info">
      <FaRegFilePdf></FaRegFilePdf>
      <span className='mx-2'>Loading document....</span>
    </Button> : <Button className='mx-auto mt-4' gradientMonochrome="info">
      <FaRegFilePdf></FaRegFilePdf>
      <span className='mx-2'>Download All Questions</span>
      <FaFileDownload></FaFileDownload>
    </Button> )}
</PDFDownloadLink>

     
</div>

        <div className='my-12'>
    <Accordion collapseAll={true}>
  <Accordion.Panel>
    <Accordion.Title>
    1. The differences between uncontrolled and controlled components.
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       <b>Controlled components:-</b> Usually react controls its components and programmer doesn't need to control DOM as react does itself. Whenever a change is made, react components stores it in state and renders accordinly. As react components manage states and behavior itself, thus it is called controlled component.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       <b>Uncontrolled components:-</b> When we handle DOM by ourselves, react components don't control its behavior, meaning that it doesn't stores any changes or data in state. Instead, programmer has to do it manually. This kinds of components are called uncontrolled components.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     2. How to validate React props using PropTypes?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       We use props in react to pass data between components. If the components recieves wrong type of props data, then it causes bugs and unexpected errors in the app. To fix this, we can tell data type while passing props. Though javascript does not have its built in data type check method, but react has a package called <b>React Proptypes</b> that checks data type. While passing props, we can tell its data type. For exmaple, <b>PropTypes.array</b> that checks whether it is array or not. In this way, we can validate props.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    3.The difference between nodejs and express js.
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
  <b>Node.js:-</b> A javascript runtime environment as well as an open souce that is being designed to build scalable network app. It is built on google's V8 engine that makes its performance higher. As a server side technologyo for modern website like SPA, node.js plays an important role to render server side template.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
    <b>Express.js:-</b> A node.js framework that makes it easy to build the server side faster and it's the major differnce between node.js and express.js. If we would write codes in node.js, it would take much time whereas express.js optimizes codes and makes it shorter. 
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
  4. What is a custom hook, and why will you create a custom hook?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      <b>Custom hook:-</b> Hooks are nothing, but javascript functions that can be reused over time. React has some built in hooks. But if we have a logic that might be used for multiple components, we can make our own hook and can use it. It's called custom hook. In custom hooks, we can keep multiple logics and nested functionality if we need. Custom hooks and built in hooks start with <b>use</b>. For example- useRender().
      So, we will use custom hooks whenever we have our own logic that can't be worked with built in hooks.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
    </div>
        </>
    );
};

export default Blog;