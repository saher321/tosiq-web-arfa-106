import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import TextField from '../../components/TextField'
import ActionButton from '../../components/ActionButton'
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { REGISTER_API } from '../../utils/api.js';
import toast from  'react-hot-toast'

const Signup = () => {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        try {
            const response = await axios.post(REGISTER_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate('/admin/dashboard')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Network error")
            console.log("ERR:", error)
        }
    } 

    return (
        <AuthLayout>
            <div className='font-bold text-4xl'>Welcome to LMS</div>
            <span className='text-gray-700'>Signup for new person</span>

            <div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className='my-3'>
                        <label>Full name</label>
                        <TextField
                        type="text"
                        { ...register("fullname") }
                        classes="block w-full"
                        hint="e.g John Marcos"
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Email</label>
                        <TextField
                        type="email"
                        { ...register("email") }
                        classes="block w-full"
                        hint="e.g example@gmail.com"
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Password</label>
                        <TextField
                        type="password"
                        { ...register("password") }
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