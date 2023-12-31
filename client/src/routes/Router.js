import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
import ProductsView from "../pages/ProductsView.js"

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
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/view" element={<ProductsView />}></Route> {/* FOR REGULAR USER VIEW */}
                </Route>
            </Routes>
            </BrowserRouter>
        )
    }

    return( 
        <BrowserRoutes /> 
    )
}