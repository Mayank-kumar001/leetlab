import React from "react";
import { motion } from "motion/react";
import { Sticker } from "lucide-react";

const navElements = ["Home", "Playlist", "Problems"];

function Navbar({ isScroll }) {
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
      <div className=" w-full">
        <img src="./public/logo.png" alt="logo" width={"50"} />
      </div>
      <div className="">
        <ul className="flex gap-4 justify-center w-full">
          {navElements.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 justify-end w-full">
        <button className="py-1 px-4 bg-blue-500 rounded-lg">Login</button>
        <button className="py-1 px-4 bg-blue-500 rounded-lg">Sign up</button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
