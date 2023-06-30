import { Outlet } from "react-router-dom"
import Navbar from "../blocks/Navbar.jsx"
import Footer from "../blocks/Footer.jsx"

function Master() {
    return (
        <main className={'container mx-auto'}>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Master
