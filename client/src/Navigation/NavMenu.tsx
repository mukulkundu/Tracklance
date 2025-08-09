

import { useNavigate, Link } from "react-router-dom";





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
            <div className="px-4 text-3xl h-[9dvh] flex items-center"><Link to='/'><img className="w-40" src="Logo.png" alt="Logo" /></Link></div>
            <ul className=" text-lg">
                {items.map((item) => (
                    <li key={item.name} className=" py-5 px-6 text-xl hover:bg-[#047050] cursor-pointer duration-75" onClick={() => navigate(item.slug)}>
                        <button className="cursor-pointer">{item.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}