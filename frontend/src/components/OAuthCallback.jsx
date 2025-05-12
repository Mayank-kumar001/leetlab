import React, { useEffect } from 'react'
import axios from "axios"


function OAuthCallback() {
    useEffect( () => {
      const fetchTokens = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");
            const state = JSON.parse(atob(urlParams.get("state")));
            const csrfTokenFromSession = sessionStorage.getItem("oauth_csrf_token")

            if(csrfTokenFromSession !== state.csrfToken){
                console.error("state doesn't match");
                return;
            }

            if (!code) {
                console.error("No code found in URL");
                return;
            }

            try {
                // const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/login-googleOAuth` 
                const { data } = await axios.post(
                    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/${state.status}-googleOAuth`,
                    { code },
                    { withCredentials: true }
                );
                console.log("Token exchange successful:", data);

            } catch (err) {
                console.error("Failed to exchange code for token:", err.response?.data || err.message);
            }
        };

        fetchTokens();
    },[])

   
  return (
    <div>Authenticating.....</div>
  )
}

export default OAuthCallback