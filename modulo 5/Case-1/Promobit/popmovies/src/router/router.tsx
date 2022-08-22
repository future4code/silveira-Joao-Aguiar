import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { MovieDetails } from "../pages/MovieDetails";



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="/details/:id" element={<MovieDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;