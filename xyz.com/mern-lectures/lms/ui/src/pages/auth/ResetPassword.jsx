import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { RESET_PASSWORD_API } from '../../utils/api.js';
import toast from 'react-hot-toast'

const ResetPassword = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const handleResetPassword = async (data) => {
        try {
            data.email = localStorage.getItem('forgotEmail')
            const response = await axios.post(RESET_PASSWORD_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                localStorage.removeItem('forgotEmail')
                navigate('/auth/login')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("ERR:", error)
        }
    }

    return (
        <AuthLayout>
            <div className='font-bold text-4xl'>Reset your password</div>
            <span className='text-gray-700'>Reset it now and get back in</span>
            <div>
                <form onSubmit={handleSubmit(handleResetPassword)}>
                    <div className='my-3'>
                        <label>OTP</label>
                        <TextField
                        type="text"
                        { ...register("otp") }
                        classes="block w-full"
                        hint="e.g 123456"
                        />
                    </div>

                    <div className='mb-3'>
                        <label>New password</label>
                        <TextField
                        type="password"
                        { ...register("newPassword") }
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