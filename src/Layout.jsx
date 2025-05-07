import React from "react";
import NavMenu from '../src/Navigation/NavMenu'
import NavBar from '../src/Navigation/NavBar'
import { Outlet } from "react-router-dom";


export default function Layout() {
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