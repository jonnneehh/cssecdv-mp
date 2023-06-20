import Header from "./Header.js"
import Footer from "./Footer.js"
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

export default function Router(){
    const Layout = () => {
        return(
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        )
    }

    return(
        <BrowserRoutes />
    )
}