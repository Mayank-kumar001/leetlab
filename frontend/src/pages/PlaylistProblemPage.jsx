import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'

import TagComponent from '../components/TagComponent'
import {Trash} from "lucide-react"
import axios from 'axios'
import toast from  "react-hot-toast"
import Navbar from '../components/Navbar'
import { useMotionValueEvent, useScroll } from 'motion/react'

function PlaylistProblemPage() {
    const navigate = useNavigate();
    const {playlistId} = useParams()
    const [problemInPlaylist, setProblemInPlaylist] = useState(null)
    
    useEffect(() => {
        axiosInstance.get(`/playlist/${playlistId}`).then((res) => {
            setProblemInPlaylist(res.data.data)
            console.log("hello hello", res.data.data)
        })
        
    }, [])

    const deletePlaylist = async () => {
        try {
            const res = await axiosInstance.delete(`/playlist/${playlistId}`)
            toast.success("Playlist deleted succesfully")
            navigate("/playlist")
        } catch (error) {
            console.log(error)
        }
    }

    const removeProblem = async (problemId) => {
        const data = {
            problemId
        }
        try {
            const res = await axiosInstance.delete(`/playlist/remove-problem/${playlistId}`, {data})
            toast.success("Problem removed succesfully")
            console.log(problemInPlaylist)
                location.reload();
                
        
            
        } catch (error) {
            console.log(error)
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
    (problemInPlaylist && <div className='w-full min-h-screen text-white flex flex-col items-center'>
        <Navbar isScroll={scroll}></Navbar>
        <div className='w-full h-full flex flex-col gap-3 mt-4 px-4'>
            {!problemInPlaylist.isPaid ? (<button onClick={deletePlaylist} className='bg-orange-400 p-1 px-2 rounded-2xl cursor-pointer flex self-end'>Delete Playlist <Trash size={20} stroke='white' fill='white' /></button>) : ""}
            {console.log("me1", problemInPlaylist)}
            {console.log("me2", problemInPlaylist.problems)}
            {(problemInPlaylist.problems).map((elem) => (
                
                <div onClick={() => navigate(`/code-execute/${elem.problemId}`)} key={elem.id} className='bg-[#242424] w-full flex justify-between items-center px-4 py-2 rounded-lg' >
                    {console.log("hello hiii ",elem)}
                    <span className='w-[50%]'>{elem.problem.title}</span>
                    <span className='w-[50%] flex justify-end items-center gap-2'>
                        <span><TagComponent>{elem.problem.tags[0]}</TagComponent></span>
                        {!problemInPlaylist.isPaid ? (<span onClick={(e) => {
                            e.stopPropagation();
                            removeProblem(elem.problemId)
                        }} className='bg-orange-400 p-1 rounded-2xl cursor-pointer'><Trash stroke='white' fill='white' /></span>) : ""}
                    </span>
                </div>
            ))}
        </div>

    </div>)
  )
}

export default PlaylistProblemPage