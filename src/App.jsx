import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Master from "./layouts/Master.jsx"


function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Master/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/services",
                    element: <Services/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                }
            ]
        }

    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App
