import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextField from "../../components/TextField";
import ActionButton from "../../components/ActionButton";
import { Link, useNavigate } from "react-router";
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { FORGOT_PASSWORD_API } from "../../utils/api";
import toast from 'react-hot-toast'

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleForgotPassword = async (data) => {
    try {
      const response = await axios.post(FORGOT_PASSWORD_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)

        localStorage.setItem("forgotEmail", data.email)

        navigate('/auth/reset-password')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR:", error)
    }
  }

  return (
    <AuthLayout>
      <div className="font-bold text-4xl">Forgot your password</div>
      <span className="text-gray-700">Enter email to recieve your OTP</span>

      <div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="my-3">
            <label>Email</label>
            <TextField 
            type="email"
            { ...register('email') }
            classes="block w-full" 
            hint="e.g example@gmail.com" 
            />
          </div>

          <div className="flex items-center gap-3">
            <ActionButton text="Send otp" />
            <Link className="hover:text-blue-600" to={"/auth/login"}>
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
