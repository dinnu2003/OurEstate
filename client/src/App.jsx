import { useState } from 'react'


import Layout from './Layout/Layout'
import List from "./pages/ListPage/List"
import Home from "./pages/HomePage/Home"
import Product from "./pages/ProductPage/Product"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/:id",
          element:<Product/>
        }
      ]

    }
  ])

  return (

    <RouterProvider router={router} />
  )
}

export default App
