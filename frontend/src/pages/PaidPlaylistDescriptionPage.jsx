import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../lib/axios';
import { useForm } from 'react-hook-form';
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import toast from "react-hot-toast"


const paymentDetailSchema = z.object({
    name: z.string().min(3, "minimum 3 character"),
    email: z.string().email()
})
function PaidPlaylistDescriptionPage() {
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:zodResolver(paymentDetailSchema)})
    const { playlistId } = useParams();
    const navigate = useNavigate()
    console.log(playlistId)
    const [details, setDetails] = useState();
    const user = JSON.parse(localStorage.getItem("auth-storage")).state.userData
    useEffect(() => {
        console.log("hanjii chai pee lo..")
        axiosInstance.get(`/playlist/paid/${playlistId}/`).then((res) => {
            console.log("thisisres",res)
            setDetails(res.data.data)
        })
    },[])

    const createPaymentLink = async (data) => {
        try {
            data.amount = details.basePrice
            data.playlistId = playlistId
            data.playlistName = details.name
            const res = await axiosInstance.post("/payment/create-payment-link", data);
            console.log("hello hello",res.data.data)
            window.location.href = res.data.data.paymentLink;
        } catch (error) {
            if(error.status === 405){
                toast.error("Already Purchased");
                navigate("/playlist")
            }
        }

        
    }
  return (
    (details && <div className='w-full min-h-screen px-4 py-2 text-white flex gap-4'>
        {console.log(details)}
        <div className='w-[70%] h-full flex flex-col gap-2'>
            <div className='text-white text-2xl font-bold'>{details.name}</div>
            <div className='mt-4 w-[90%] text-neutral-300'>{details.description}</div>
            <form onSubmit={handleSubmit(createPaymentLink)} className='self-center mt-10 flex flex-col gap-6 bg-[#191919] px-8 py-20 rounded-lg'>
                <div>
                    <label className='block'>Name</label>
                    <input value={user.name ? user.name : ""} className='bg-[#242424] px-2 py-1 rounded-lg mt-1 w-72'  type="text" placeholder='Enter you Name' {...register("name")} />
                </div>
                <div>
                    <label className='block'>Email</label>
                    <input value={user.email ? user.email : ""} className='bg-[#242424] px-2 py-1 rounded-lg mt-1 w-72'  type="text" placeholder='Enter you Email'{...register("email")} />
                </div>
                <button type='submit' className='bg-orange-500 px-2 py-1 text-white cursor-pointer rounded-lg w-full'>But Now</button>
            </form>
        </div>
        <div className='w-[30%] bg-[#242424] flex flex-col justify-between py-4 px-2 rounded-lg'>
            <img src={`${details.coverImage}`} alt="coverImage" />
            <div>
            <div className='flex justify-between mb-8'>
                <span className='text-lg font-bold'>Total Price</span>
                <span className='text-lg font-bold'>{details.basePrice}</span>
            </div>
            
            </div>
        </div>

    </div>)
    
  )
}

export default PaidPlaylistDescriptionPage


















// import React from 'react'
// import { useEffect } from 'react'
// import { axiosInstance } from '../lib/axios'
// import { useParams } from 'react-router-dom'
// import { useState } from 'react';

// function PaidPlaylistDescriptionPage() {
//     const { playlistId } = useParams();
//     console.log(playlistId)
//     const [details, setDetails] = useState();
//     console.log(`/playlist/paid/${playlistId}/`)
//     useEffect(() => {
//         console.log("hanjii chai pee lo..")
//         axiosInstance.get(`/playlist/paid/${playlistId}/`).then((res) => {
//             console.log("thisisres",res)
//             setDetails(res.data.data)
//         })
//     } ,[playlistId])
//   return (
    // <div className='w-full min-h-screen px-4 py-2 text-white flex gap-4'>
    //     {console.log(details)}
    //     <div className='w-[70%] h-full bg-[#242424]'>
    //         <div className='text-white text-2xl font-bold'>{details.name}</div>
    //         <div className='mt-2 text-neutral-300'>{details.description}</div>
    //     </div>
    //     <div className='w-[30%] bg-[#242424] flex flex-col justify-between py-4 px-2'>
    //         <img src={`${details.coverImage}`} alt="coverImage" />
    //         <button className='bg-orange-500 px-2 py-1 text-white'>But Now</button>
    //     </div>

    // </div>
//   )
// }

// export default PaidPlaylistDescriptionPage