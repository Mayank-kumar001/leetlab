import React from 'react'
import authStore from '../store/auth.store'
import { easeInOut, motion } from "motion/react"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Loader, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';






function VerifyPage() {
  const { userData, isverifying, verify, resendCode, isSending } = authStore();

  const verificationSchema = z.object({
    verificationCode: z.string()
  })
  const navigate = useNavigate()
  // console.log(localStorage.getItem("auth-storage"))

  const userEmail = JSON.parse(localStorage.getItem("auth-storage")).state.userData.email

  const onSubmit = async (data) => {
    data.email = userEmail
    console.log(data)
    try {
      console.log(typeof data)
      await verify(data);
      navigate("/home");
    } catch (error) {
      console.log("Error in verification", error);
    }
  }

  const resendVerificationCode = async () => {
    try {
      const data = { email: userData.email }
      console.log(typeof data)
      await resendCode(data);
    } catch (error) {
      console.log("Error in resending code", error);
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(verificationSchema) })


  console.log(userData);
  return (
    <div className='flex flex-col justify-center items-center gap-16'>
      <div>
        <span className='text-2xl font-medium mr-3 text-white'>Verification code sent successfully on</span>
        <span className='text-2xl font-medium text-white bg-orange-500 px-6 py-1 rounded-lg'>{userEmail}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-[#191919] text-white flex flex-col border w-[400px] rounded-xl border-neutral-600 px-5 py-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        <div className='text-sm font-medium'>verification code</div>
        <div className='flex flex-col'>
          <input type="text" className="text-sm font-medium px-2 py-1 w-full mt-2 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" placeholder='6x3abc' {...register("verificationCode")} />
          <button onClick={(e) => {
            e.preventDefault();
            resendVerificationCode()
          }} className=' flex self-end text-sm font-medium cursor-pointer' disabled={isSending}>Resend code {isSending ? (<Loader2 className='animate-spin h-5' />) : ""}</button>
        </div>
        <button type='submit' className='flex justify-center items-center self-center gap-4 cursor-pointer bg-white text-black font-medium px-10 py-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-8 w-fit' disabled={isverifying}>Verify and continue {isverifying ? (<Loader2 className='animate-spin' />) : ""}</button>
      </form>

    </div>
  )
}

export default VerifyPage