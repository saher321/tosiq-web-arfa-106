import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link } from 'react-router';

const ResetPassword = () => {
  return (
    <AuthLayout>
        <div className='font-bold text-4xl'>Reset your password</div>
        <span className='text-gray-700'>Reset it now and get back in</span>

        <div>
            <form>

                <div className='my-3'>
                    <label>OTP</label>
                    <TextField
                    classes="block w-full"
                    hint="e.g 123456"
                    />
                </div>

                <div className='mb-3'>
                    <label>New password</label>
                    <TextField
                    type="password"
                    classes="block w-full"
                    hint="*****"
                    />
                </div>

                <div className='flex items-center gap-3'>
                  <ActionButton text="Verify & Reset" />
                  <Link className='hover:text-blue-600' to={'/auth/login'}>Already have an account? Login</Link>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}

export default ResetPassword