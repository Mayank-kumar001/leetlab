import React, { useEffect } from 'react'
import axios from "axios"
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast"
import { data, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'


function OAuthCallbackPage() {
    const navigate = useNavigate();


    useEffect( () => {
      const fetchTokens = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");
            const state = JSON.parse(atob(urlParams.get("state")));
            const csrfTokenFromSession = sessionStorage.getItem("oauth_csrf_token")

            if(csrfTokenFromSession !== state.csrfToken){
                console.error("state doesn't match");
                toast.error("signup Failed. Try after few seconds");
                navigate("/signup");
                return;
            }

            if (!code) {
                console.error("No code found in URL");
                toast.error("signup Failed. Try after few seconds");
                navigate("/signup");
                return;
            }

            try {
                
                const res = await axiosInstance.post(
                    `auth/${state.status}-googleOAuth`,
                    { code },
                    { withCredentials: true }
                );
                console.log("Token exchange successful:", res.data);
                toast.success("Signup successfull");
                navigate("/home");
                const stringifiedData = JSON.stringify(res.data.data)
                const userData = {state:{userData:res.data.data}}
                localStorage.setItem("auth-storage", JSON.stringify(userData));

            } catch (error) {
                console.error("Failed to exchange code for token:", error);
                toast.error(`${error.response.data.message}`)
                navigate("/signup")
            }
        };

        fetchTokens();
    },[])

   
  return (
    <div className='flex text-4xl font-medium text-gray-700 items-center'>Authenticating <Loader2 className='animate-spin' size={48} /></div>
  )
}

export default OAuthCallbackPage