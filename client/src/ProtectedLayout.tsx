

import NavMenu from './Components/Navigation/NavMenu'
import NavBar from './Components/Navigation/NavBar'
import { Outlet } from "react-router-dom";


export default function ProtectedLayout() {
    return (

        <div className="flex h-screen">
            <div className="w-[15dvw] border-r-1 bg-[#04844c] text-white">
                <NavMenu/>
            </div>
            <div className="w-[85dvw]">
                <NavBar/>
                <Outlet/>
            </div>
        </div>
    );
}