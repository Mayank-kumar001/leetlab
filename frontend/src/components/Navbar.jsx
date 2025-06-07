import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Sticker } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/auth.store";

const navElements = ["Home", "Playlist", "Problems"];

function Navbar({ isScroll }) {
  const { userData, logout } = authStore();
  const navigate = useNavigate();
  const logoutUser = async () =>{
    try {
      await logout();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <motion.nav
      initial={{
        width: "100vw",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#282727",
      }}
      animate={
        isScroll
          ? {
              width: "80vw",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              position: "fixed",
              borderRadius: "47px",
              top: "5px",
              backdropFilter: "blur(10px)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#282727",
              // left: "50%",
              //   transform: "translateX(-50%)",
              transition: { duration: 0.3, ease: "linear" },
            }
          : {}
      }
      className="text-white w-full flex justify-between items-center px-20 py-2 z-10"
    >
      <div className=" w-full flex items-center gap-2">
        <img src="./logo.png" alt="logo" width={"50"} />
        <span className="font-bold">Algohack</span>
      </div>
      {!!userData && <div className="">
        <ul className="flex gap-4 justify-center w-full">

            <li onClick={() => navigate("/home")} className="cursor-pointer hover:text-neutral-300">Home</li>
            <li onClick={() => navigate("/allProblem")} className="cursor-pointer hover:text-neutral-300">playlist</li>
            <li onClick={() => navigate("/playlist")} className="cursor-pointer hover:text-neutral-300">Problems</li>
            <li onClick={() => navigate("/callstack")} className="cursor-pointer hover:text-neutral-300">callStack</li>
          
        </ul>
      </div>}
     {!userData ? (<div className="flex gap-4 justify-end w-full">
        <button onClick={() => navigate("/login")} className="py-1 px-4 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Login</button>
        <button onClick={() => navigate("/signup")} className="py-1 px-4 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Sign up</button>
      </div>) : (<div className="flex gap-4 justify-end w-full">
        <button onClick={logoutUser} className="py-1 px-4 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">Logout</button>
      </div>)}
    </motion.nav>
  );
}

export default Navbar;
