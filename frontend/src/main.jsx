import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from './Layout.jsx'
import ImageUpload from './ImageUpload.jsx'





createRoot(document.getElementById('root')).render(

  // <StrictMode>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/oauth" element={<OAuthCallback />} />
  //     <Route path="/lay" element={<Layout />} />
  //     <Route path="/image" element={<ImageUpload />} />
  //   </Routes>
  // </BrowserRouter>
  // </StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>



)
