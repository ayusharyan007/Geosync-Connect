import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Whyus from './Whyus.jsx'
import Rules from './Rules.jsx'
import Landingpage from './Landingpage.jsx'
import Login from './Login.jsx'

/*const router = createBrowserRouter (
  [
    {
    path: '/',
    element :<Layout/>,
    children :[
      {
        path:"",
        element:<Landingpage />
      },
      {
        path:"Whyus",
        element :<Whyus />
      },
      {
        path:"Rules",
        element :<Rules />
      }

    ]
    }
  ]
)*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Landingpage />} />
      <Route path='whyus' element={<Whyus />} />
      <Route path='rules' element={<Rules />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
  </React.StrictMode>,
)
