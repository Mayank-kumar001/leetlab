import React from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Loader2, MoveRight } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import authStore from '../store/auth.store'
import { useNavigate } from 'react-router-dom'

function ForgotPasswordPage() {
    const ForgotPasswordSchema = z.object({
        email: z.string().email(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(ForgotPasswordSchema) })
    const { isSending, forgotPassword } = authStore()
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            sessionStorage.setItem("emailForPasswordChange", data.email);
            await forgotPassword(data);
            navigate("/reset-password")
        } catch (error) {
            console.log("Error while sending verification code", error);
        }
    }


    return (
        <div className='flex flex-col justify-center items-center gap-y-15'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl font-bold'>Forgot Password</div>
                <div className='text-sm text-white text-justify w-[304px] mt-2'>We will send an email with verification code. If you don’t see it, please check your spam folder.</div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#191919] text-white flex flex-col space-y-8 border w-[400px] rounded-xl border-neutral-600 px-5 py-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                <div>
                    <label className="block">Email</label>
                    <input type='email' className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 focus:text-black" name="Email" placeholder='you@gmail.com' {...register("email")} required />
                </div>
                <button type='submit' className=' bg-orange-500 w-full flex justify-center items-center gap-3 cursor-pointer  text-white px-10 py-2 mb-4 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]' disabled={isSending}>Next {isSending ? (<Loader2 className='animate-spin' />) : <ArrowRight />}</button>
            </form>
        </div>
    )
}

export default ForgotPasswordPage