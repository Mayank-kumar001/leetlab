import { Github, Linkedin } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="text-white w-screen flex justify-between items-center px-4 py-2">
      <div className=" w-full flex items-center gap-2">
        <img src="./public/logo.png" alt="logo" width={"50"} />
        <span className="font-bold">Algohack</span>
      </div>
      <div className="flex gap-2 justify-end w-full">
        <button className="py-1 px-2  rounded-lg"><Github /></button>
        <button className="py-1 px-2  rounded-lg"><Linkedin /></button>
      </div>
    </footer>
  )
}

export default Footer