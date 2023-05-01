import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    return (
        <div className='my-20 w-[400px] mx-auto border p-8'>
            <h1 className='my-8 font-bold text-4xl'>Login here</h1>
            <form className="flex flex-col gap-4">
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
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
<span>{error}</span>
<span>{success}</span>
  <Button type="submit">
    Login
  </Button>
</form>
<div className='my-4 text-center'>
    <p>Don't have an account?  <Link to='/register' className='text-blue-700 underline'>Create an account</Link></p> 
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

export default Login;