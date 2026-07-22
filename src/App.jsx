import {

BrowserRouter,

Routes,

Route

} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";

import TripDetails from "./pages/TripDetails/TripDetails";

export default function App(){

return(

<BrowserRouter>

<MainLayout>

<Routes>

<Route

path="/"

element={<Dashboard/>}

/>

<Route

path="/trip/:id"

element={<TripDetails/>}

/>

</Routes>

</MainLayout>

</BrowserRouter>

);

}