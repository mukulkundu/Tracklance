import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'
import Dashboard from './Pages/Features/Dashboard'
import Update from './Pages/Features/Update'
import History from './Pages/Features/History'
import Category from './Pages/Features/Category'
import Settings from './Pages/Features/Settings'
import Landing from './Pages/Landing/Landing'
import PublicLayout from './PublicLayout'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'


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
