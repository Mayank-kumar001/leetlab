import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'


const playlistSchema = z.object({
    name: z.string().min(3, "Min 3 character"),
    description: z.string().optional()
})



function CreatePlaylistPage() {
    const userRole = JSON.parse(localStorage.getItem("auth-storage")).state.userData.role
    // console.log(userDataRole)
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:zodResolver(playlistSchema)});
    const onSubmit = async (data) => {
    try {
        console.log(data)
        const res = await axiosInstance.post("/playlist/create-playlist", data);
        toast.success("Playlist created")
        navigate(-1)
    } catch (error) {
        toast.error("Error in creating Playlist")
        console.log(error);
    }
}
const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest);
        if (latest > 10) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

  return (
    <div className='text-white w-full min-h-screen flex flex-col item-center'>
        <Navbar isScroll={scroll}></Navbar>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-48 bg-[#373535] flex flex-col gap-4 px-2 py-3 w-96 rounded-md self-center'>

            <input className='bg-[#3d3d3d] px-4 py-1 text-sm rounded-md' type="text" placeholder='Name of playlist ' {...register("name")}/>

            <textarea className='bg-[#3d3d3d] text-sm px-4 py-1' placeholder='Description' {...register("description")}></textarea>
            <button type='submit'  className='bg-orange-500 rounded-lg cursor-pointer'>Create playlist</button>
        </form>
    </div>
  )
}

export default CreatePlaylistPage