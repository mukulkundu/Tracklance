import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'
import Dashboard from './Pages/Dashboard'
import Update from './Pages/Update'
import History from './Pages/History'
import Category from './Pages/Category'
import Settings from './Pages/Settings'
import Landing from './Pages/Landing'
import PublicLayout from './PublicLayout'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     {/* Public Layout: No NavBar/NavMenu */}
     <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Protected Layout: With NavBar/NavMenu */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update" element={<Update />} />
        <Route path="/history" element={<History />} />
        <Route path="/category" element={<Category />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
