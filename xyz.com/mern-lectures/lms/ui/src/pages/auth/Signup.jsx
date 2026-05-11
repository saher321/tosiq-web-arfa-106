import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link } from 'react-router';

const Signup = () => {
  return (
    <AuthLayout>
        <div className='font-bold text-4xl'>Welcome to LMS</div>
        <span className='text-gray-700'>Signup for new person</span>

        <div>
            <form>
                <div className='my-3'>
                    <label>Full name</label>
                    <TextField
                    classes="block w-full"
                    hint="e.g John Marcos"
                    />
                </div>

                <div className='mb-3'>
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
                  <ActionButton text="Create an account" />
                  <Link className='hover:text-blue-600' to={'/auth/login'}>Already have an account? Login</Link>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}

export default Signup