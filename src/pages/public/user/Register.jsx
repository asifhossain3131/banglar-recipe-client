import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    return (
        <div className='my-20 w-[400px] mx-auto border p-8'>
            <h1 className='my-8 font-bold text-4xl'>Register here</h1>
            <form className="flex flex-col gap-4">
            <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Your name"
      />
    </div>
    <TextInput
      id="name"
      type="text"
      placeholder="Your name"
      required={true}
      name='name'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="photo"
        value="Your photo"
      />
    </div>
    <TextInput
      id="photo"
      type="text"
      placeholder="Your photo"
      required={true}
      name='photo'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="Your email"
      required={true}
      name='email'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      placeholder="Your password"
      required={true}
      name='password'
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the 
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
<span>{error}</span>
<span>{success}</span>
  <Button type="submit">
    Create an account
  </Button>
</form>
<div className='my-4 text-center'>
    <p>Already have an account?  <Link to='/login' className='text-blue-700 underline'>Login</Link></p> 
</div>
<hr />
<div className='mt-4 flex flex-col gap-4'>
<Button
      color="success"
      pill={true}
      className='mx-auto'
    >
   Continue with Google
    </Button>
<Button
      color="success"
      pill={true}
      className='mx-auto'
    >
   Continue with GitHub
    </Button>
</div>
        </div>
    );
};

export default Register;