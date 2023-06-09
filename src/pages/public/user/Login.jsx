import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Loading from '../../components/Loading';

const Login = () => {
  // all hooks are here 
  const {user, login, googleLogin,githubLogin,}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    const[show, setShow]=useState(false)
    let target=location?.state?.from?.pathname||'/'

 
    // user login related all functionalities
    const handleGoogleLogin=()=>{
      googleLogin()
      .then(res=>{
        navigate(target)
     setSuccess('Login with Google successful')
     setError('')
      })
      .catch(error=>{
        setError(error.message)
        setSuccess('')
      })
    }
    const handleGithubLogin=()=>{
      githubLogin()
      .then(res=>{
        navigate(target)
        setSuccess('Login with Github successful')
        setError('')
         })
         .catch(error=>{
           setError(error.message)
           setSuccess('')
         })
    }

    const handleLogin=e=>{
      e.preventDefault()
      const form=e.target 
      const email=form.email.value 
      const password=form.password.value 
      
      setError('')
      setSuccess('')

      login(email,password)
      .then(res=>{
        navigate(target)
        setSuccess('Login successful')
        form.reset()
      })
      .catch(error=>{
        setError('Please check your email and password')
      })
    }
    
        // showing loader while loading 
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
  
    return (
        <div className='my-20 w-[400px] mx-auto border p-8'>
            <h1 className='my-8 font-bold text-4xl'>Login here</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
      type={show? "text" : 'password'}
      placeholder="Your password"
      required={true}
      name='password'
    />
  </div>
<div className='flex justify-between'>
<div className="flex items-center gap-2">
    <Checkbox id="remember"
    onClick={showPassword=>setShow(!show)}
    />
    <Label htmlFor="remember">
      Show password
    </Label>
  </div>
  <Link className='text-blue-700' to='/forgetPassword'>Forget passsword?</Link>
</div>
<span className='text-red-500'>{error}</span>
<span className='text-green-500'>{success}</span>
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
      onClick={handleGoogleLogin}
    >
   Continue with Google
    </Button>
<Button
      color="success"
      pill={true}
      className='mx-auto'
      onClick={handleGithubLogin}
    >
   Continue with GitHub
    </Button>
</div>
        </div>
    );
};

export default Login;