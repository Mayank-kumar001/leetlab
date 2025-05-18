import React from 'react'
import authStore from '../store/auth.store'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const {logout} = authStore(); 

  return (<>
    <div>HomePage</div>
    <button onClick={async () => {
      await logout();
      navigate("/login")
    }} className='bg-neutral-400 p-2 rounded-lg ml-4 cursor-pointer'>Logout</button>
  </>
  )
}

export default HomePage