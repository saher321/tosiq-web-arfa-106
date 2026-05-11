import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link } from 'react-router';

const ForgotPassword = () => {
  return (
    <AuthLayout>
        <div className='font-bold text-4xl'>Forgot your password</div>
        <span className='text-gray-700'>Enter email to recieve your OTP</span>

        <div>
            <form>

                <div className='my-3'>
                    <label>Email</label>
                    <TextField
                    classes="block w-full"
                    hint="e.g example@gmail.com"
                    />
                </div>

                <div className='flex items-center gap-3'>
                  <ActionButton text="Send otp" />
                  <Link className='hover:text-blue-600' to={'/auth/login'}>Already have an account? Signup</Link>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}

export default ForgotPassword