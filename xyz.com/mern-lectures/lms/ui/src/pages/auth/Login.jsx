import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link } from 'react-router';

const Login = () => {
  return (
    <AuthLayout>
        <div className='font-bold text-4xl'>Welcome to back</div>
        <span className='text-gray-700'>Login to continue</span>

        <div>
            <form>

                <div className='my-3'>
                    <label>Email</label>
                    <TextField
                    classes="block w-full"
                    hint="e.g example@gmail.com"
                    />
                </div>

                <div className='mb-3'>
                    <label>Password</label>
                    <TextField
                    type="password"
                    classes="block w-full"
                    hint="*****"
                    />
                </div>

                <div className='flex items-center gap-3'>
                  <ActionButton text="Login" />
                  <Link className='hover:text-blue-600' to={'/auth/signup'}>Don't have an account? Signup</Link>
                </div>
                <div className='my-3 italic font-bold'>
                    <Link to={'/auth/forgot-password'}>Forgot your password? click here</Link>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}

export default Login