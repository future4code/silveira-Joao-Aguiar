import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { OrderPage } from "../pages/OrderPage";




function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="/order" element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;