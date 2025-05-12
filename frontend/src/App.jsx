import React from 'react'

const getCodeFromGoogle = async (status) => {
  const csrfToken = crypto.randomUUID();
  sessionStorage.setItem("oauth_csrf_token", csrfToken);
  const state = btoa(JSON.stringify({
    csrfToken,
    status
  }))

  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: "http://localhost:5173/oauth",  
    response_type: "code",
    scope: "openid email profile",
    state: state,
  })
  console.log(params)

  window.location.href=`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

function App() {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <button onClick={() => getCodeFromGoogle("register")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer mr-4'> signup with google</button>
        <button onClick={() => getCodeFromGoogle("login")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer'> login with google</button>
        <button onClick={() => getCodeFromGoogle("login")} className='bg-neutral-200 px-4 py-2 rounded-xl hover:bg-neutral-300 cursor-pointer'> login with google</button>
      </div>
    </>
  )
}

export default App