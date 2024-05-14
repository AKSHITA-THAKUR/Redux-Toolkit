import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./component/Dashboard";
import Cart from "./component/Cart";

import Product from "./component/Product"
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider } from "react-router-dom";

import RootLayout from "./component/RootLayout";
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
  <Route index element = {<Dashboard/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  </Route>
))
  return (
    <React.Fragment>
   <RouterProvider router={router}/>
    </React.Fragment>
  )
}
export default App
