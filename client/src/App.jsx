import { useState } from 'react'


import Layout from './Layout/Layout'
import List from "./pages/ListPage/List"
import Home from "./pages/HomePage/Home"
import Product from "./pages/ProductPage/Product"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from './pages/Register/Register'
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import NotFound from './pages/NotFoundPage/NotFound'

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
          path: "/list",
          element: <List />
        },
        {
          path: "/:id(\\d+)",
          element: <Product />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        

      ]

    },
    {
      path:"*",
      element:<NotFound/>

    }
  ])

  return (

    <RouterProvider router={router} />
  )
}

export default App
