import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
    const {resetPassword}=useContext(AuthContext)

    // reset password functionality 
    const handleReset=e=>{
        e.preventDefault()
        const form=e.target 
        const email=form.email.value

        resetPassword(email)
        .then(res=>{
toast.success('Please check your email')
form.reset()
        })
        .catch(error=>{
toast.error(error.message)
        })
    }
    return (
        <div className="max-w-sm mx-auto my-16">
            <h1 className='my-4 text-2xl font-semibold'>Reset your password</h1>
        <Card>
          <form onSubmit={handleReset} className="flex flex-col gap-4">
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
                placeholder="name@example.com"
                required={true}
                name='email'
              />
            </div>
            <Button type="submit">
              Reset
            </Button>
          </form>
        </Card>
     <Link to='/login'>
     <Button className='mx-auto my-4' gradientMonochrome="success">
      Go Back To Login
    </Button>
     </Link>
      </div>
    );
};

export default ForgetPassword;