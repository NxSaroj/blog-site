import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Blog_page from './pages/users/blog-page.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        path: 'blog/:id', 
        element: <Blog_page />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
