import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import AnimatedCursor from "react-animated-cursor"
export default function Layout() {
    
    return <>
        <div className="cursor-wrapper">
            <AnimatedCursor color="68, 98, 74" />
         </div>
        <Navbar/>
        <Outlet/>
    </>
    
}