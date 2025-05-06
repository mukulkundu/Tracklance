import React from "react";
import { useNavigate } from "react-router-dom";





export default function NavMenu(){

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard'
        },
        {
            name: 'Update',
            slug: 'update'
        },
        {
            name: 'History',
            slug: 'history'
        },
        {
            name: 'Category',
            slug: 'category'
        },
        {
            name: 'Settings',
            slug: 'settings'
        }
    ]


    const navigate = useNavigate();

    return(
        <div>
            <ul className="text-xl">
                {items.map((item) => (
                    <li key={item.name} className=" py-5 px-5 hover:bg-gray-300 duration-75 cursor-pointer">
                        <button className="cursor-pointer" onClick={() => navigate(item.slug)}>{item.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}