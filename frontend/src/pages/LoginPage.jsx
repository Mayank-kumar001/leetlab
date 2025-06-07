import React, { useState } from 'react'
import { Eye, EyeClosed, Loader, Loader2 } from "lucide-react"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { axiosInstance } from '../lib/axios';
import  authStore  from '../store/auth.store';
import { data, useNavigate } from 'react-router-dom';
import getCodeFromGoogle from '../lib/googleOAuth';

function LoginPage() {

  const loginSchema = z.object({
    email: z.string().email("Enter a valid Email"),
    password: z.string().min(8, "Password Should be atleast 8 characters")
  })

  const { register, handleSubmit, formState:{errors}} = useForm( {resolver: zodResolver(loginSchema)} )
  const { isLoggingIn, login, } = authStore();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/home")
    } catch (error) {
      console.log("Error while login", error);
    }
  }





  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#191919] text-white flex flex-col space-y-8 border w-[400px] rounded-xl border-neutral-600 px-5 py-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <div className="text-lg font-bold text-center">Login to your account</div>
        
        <div>
          <label className="block">Email</label>
          <input type='email' className=" text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" name="Email" placeholder='you@gmail.com' {...register("email")} required />

        </div>
        <div>
          <label className="block">Password</label>

          <div className='flex gap-2'>
            <input type={showPassword ? `password` : `text`} className=" text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:text-black focus:border-blue-200 focus:shadow-sm focus:bg-blue-100" name="Password" placeholder='At least 8 characters.' {...register("password")} required />

          <button onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword)
            }} className='cursor-pointer'> {showPassword ? <EyeClosed color="#1e86ff" /> : <Eye color="#1e86ff"/>} </button>
          </div>
        </div>

        <div>
          <button type='submit' className=' w-full flex justify-center items-center gap-4 cursor-pointer bg-orange-500 text-white px-10 py-2 mb-4 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]' disabled={isLoggingIn}>Login {isLoggingIn ? (<Loader2 className='animate-spin' />) : ""}</button>

          <div className='w-full text-center text-sm font-medium text-neutral-300'><button onClick={() => (navigate("/forgot-password"))}className='cursor-pointer hover:text-neutral-400'>Forgot Password?</button></div>
        </div>

        

        <div className='w-full flex items-center justify-center gap-2'>
          <span className="h-0 w-[25%] border border-gray-200"></span>
          <span className="text-sm text-neutral-300 font-medium">or continue  with email</span>
          <span className="h-0 w-[25%] border border-gray-200"></span>
        </div>

        <button onClick={(e) => {
          e.preventDefault();
          getCodeFromGoogle("login")
          }} className='cursor-pointer bg-white px-10 py-2 rounded-lg flex items-center justify-center border-gray-200 border-2 hover:shadow-[0_2px_25px_rgb(0,0,0,0.1)]'>
          <img className='bg-clip-content' src="./public/google.png" alt="google logo" width={"20px"} />
          <span className='text-sm font-medium text-black'>Continue with Google</span>
        </button>
        
      </form>
    </div>
  )
}

export default LoginPage