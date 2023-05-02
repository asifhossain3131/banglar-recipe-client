import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
  const {createUser, profileUpdate,googleLogin}=useContext(AuthContext)
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    const [accepted,setAccepted]=useState(false)
    
    const handleAccepted=e=>{
      setAccepted(e.target.checked)
    }

    const [modal,setModal]=useState(false)
    const [close,setClose]=useState(false)

    const handlemodal=()=>{
        setModal(true)
    }

    const handleClose=()=>{
        setModal(false)
    }

    const handleRegister=e=>{
      e.preventDefault()
      const form=e.target 
      const name=form.name.value 
      const photo=form.photo.value 
      const email=form.email.value 
      const password=form.password.value 

       setSuccess('')
       setError('')


      createUser(email,password)
      .then(res=>{
        profileUpdate(res.user,name,photo)
        setSuccess('Registration has been successful')
        form.reset()
       
      })
      .catch(error=>{
        setError(error.message)
  
      })
    }

    const handleGoogleLogin=()=>{
      googleLogin()
    }
    return (
        <div className='my-20 w-[400px] mx-auto border p-8'>
            <h1 className='my-8 font-bold text-4xl'>Register here</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
    <Checkbox id="agree"
    name='checkbox'
    onClick={handleAccepted}
    />
    <Label htmlFor="agree">
      I agree with the 
      <React.Fragment>
  <Link className='ms-2 text-blue-700 underline' onClick={handlemodal}>
 Terms and conditions
  </Link>
  <Modal
    show={modal}
    onClose={handleClose}
  >
    <Modal.Header>
      Terms of Service
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The just-food.com website is an online information, communication, advertising and sales service provided by Aroq Limited (hereafter Aroq). Your access and use of the Website is subject to you accepting the terms and conditions shown below. Please read this information carefully before accessing or using the Website. By accessing or using the Website, you agree to be legally bound by these terms and conditions. You may not access or use the Website should you not want to be bound by these terms and conditions.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This Agreement may be modified at any time, and any such modification shall be effective immediately upon posting of the modified agreement. By your access and use of the Website you agree to periodically review this Agreement and shall be conclusively bound by any such future modifications.
        </p>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
    </Label>
  </div>
<span className='text-red-500'>{error}</span>
<span className='text-green-500'>{success}</span>
  <Button type="submit" disabled={!accepted}>
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
      onClick={handleGoogleLogin}
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