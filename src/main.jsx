import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './Components/Dashboard'
import Update from './Components/Update'
import History from './Components/History'
import Category from './Components/Category'
import Settings from './Components/Settings'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
