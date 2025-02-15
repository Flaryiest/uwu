import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './style/index.css'
import Router from './router'


createRoot(document.getElementById('root')).render(
     <StrictMode>
          <RouterProvider router={Router}></RouterProvider>
     </StrictMode>
)