// import React from 'react'

// const getCodeFromGoogle = async (status) => {
//   const csrfToken = crypto.randomUUID();
//   sessionStorage.setItem("oauth_csrf_token", csrfToken);
//   const state = btoa(JSON.stringify({
//     csrfToken,
//     status
//   }))

//   const params = new URLSearchParams({
//     client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
//     redirect_uri: "http://localhost:5173/oauth",  
//     response_type: "code",
//     scope: "openid email profile",
//     state: state,
//   })
//   console.log(params)

//   window.location.href=`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
// }

// function App() {
//   return (
//     <>
//       <div className='h-screen flex justify-center items-center'>
//         <button onClick={() => getCodeFromGoogle("register")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer mr-4'> signup with google</button>
//         <button onClick={() => getCodeFromGoogle("login")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer'> login with google</button>
//         <button onClick={() => getCodeFromGoogle("login")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer'> login with google</button>
//       </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Toaster } from "react-hot-toast"
import VerifyPage from './pages/VerifyPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import OAuthCallbackPage from './pages/OAuthCallbackPage'
import AddProblemPage from './pages/AddProblemPage'
import CodeExecutionPage from './pages/CodeExecutionPage'

function App() {
  return (<div className='min-h-screen w-[100vw] m-auto flex justify-center items-center bg-neutral-950'>
    
      <div><Toaster/></div>
      <Routes>
      <Route element={<LandingPage />} path='/'></Route>
      <Route element={<HomePage />} path='/home'></Route>
      <Route element={<LoginPage />} path='/login'></Route>
      <Route element={<SignupPage />} path='/signup'></Route>
      <Route element={<VerifyPage />} path='/verify'></Route>
      <Route element={<ForgotPasswordPage />} path='/forgot-password'></Route>
      <Route element={<ResetPasswordPage />} path='/reset-password'></Route>
      <Route element={<OAuthCallbackPage />} path='/oauth'></Route>
      <Route element={<AddProblemPage />} path='/add-problem'></Route>
      <Route element={<CodeExecutionPage />} path='/code-execute/:problemId'></Route>
    </Routes>
    </div>
  )
}

export default App
























