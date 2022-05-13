import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/LogIn"
import { SignUp } from "../pages/SignUp"
import { MainPage } from "../pages/MainPage"
import { CommentPage } from "../pages/CommentPage"

export function Router() {

    return (      
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='mainPage' element={<MainPage />} />
                    <Route path='commentPage/:id/:user/:comments/:voteSum/:userVote/:title/:body' element={<CommentPage />} />
                </Routes>
            </BrowserRouter>
    )
}