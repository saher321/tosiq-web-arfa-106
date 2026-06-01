import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextField from "../../components/TextField";
import ActionButton from "../../components/ActionButton";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LOGIN_API } from "../../utils/api";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(LOGIN_API, data);
      console.log(response.data);
      if (response.data.status == true) {
        toast.success(response.data.message);
        localStorage.setItem("lms_token", response.data.token);
        localStorage.setItem("lms_user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("ERR:", error);
    }
  };

  return (
    <AuthLayout>
      <div className="font-bold text-4xl">Welcome back</div>
      <span className="text-gray-700">Login to continue</span>

      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="my-3">
            <label>Email</label>
            <TextField
              type="email"
              {...register("email")}
              classes="block w-full"
              hint="e.g example@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <TextField
              type="password"
              {...register("password")}
              classes="block w-full"
              hint="*****"
            />
          </div>

          <div className="flex items-center gap-3">
            <ActionButton text="Login" />
            <Link className="hover:text-blue-600" to={"/auth/signup"}>
              Don't have an account? Signup
            </Link>
          </div>
          <div className="my-3 italic font-bold">
            <Link to={"/auth/forgot-password"}>
              Forgot your password? click here
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
