import React from "react";
import NavMenu from '../src/Navigation/NavMenu'
import NavBar from '../src/Navigation/NavBar'
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <div className="flex flex-grow">
                <div className="w-[15dvw] border-r-1 border-gray-500">
                    <NavMenu />
                </div>
                <div className="w-[85dvw] flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}