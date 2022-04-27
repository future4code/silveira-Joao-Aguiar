import HomePage from '../pages/HomePage'
import Trips from '../pages/ListTripsPage'
import AdminHome from '../pages/AdminHomePage'
import AppForm from '../pages/ApplicationFormPage'
import CreateTrip from '../pages/CreateTripPage'
import LoginPage from '../pages/LoginPage'
import TripDetail from '../pages/TripDetailsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<HomePage/>} />
      <Route path='Trips' element={<Trips/>} />
      <Route path='AdminHome' element={<AdminHome />}/>
      <Route path='AppForm' element={<AppForm/>} />
      <Route path='CreateTrip' element={<CreateTrip />}/>
      <Route path='LoginPage' element={<LoginPage/>} />
      <Route path='TripDetail' element={<TripDetail/>} />
    </Routes>
  </BrowserRouter>
  )
}