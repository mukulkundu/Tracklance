import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    
    const navigate = useNavigate();

    useEffect(()=> {
        //on load, it just navigates to the dashboard page i.e. now the dashboard is the first one to show
        navigate('/dashboard');
    },[])


    return(<></>)
    

}