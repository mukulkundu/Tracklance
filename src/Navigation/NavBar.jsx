import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){


    return(
        <div className="text-2xl py-2 flex justify-center items-center border-b-1 border-gray-500">
            <Link to='/'>Tracklance</Link>
        </div>
    )
    
}