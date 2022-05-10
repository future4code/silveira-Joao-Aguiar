import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/LogIn"
import { SignUp } from "../pages/SignUp"
import { MainPage } from "../pages/MainPage"

export function Router() {

    return (      
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='mainPage' element={<MainPage />} />
                </Routes>
            </BrowserRouter>
    )
}