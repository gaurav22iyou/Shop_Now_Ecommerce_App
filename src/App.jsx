
import React, { useEffect } from "react"
import Navbar from "./components/navbar/Navbar"
import DateAndTimer from "./components/dateAndTimer/DateAndTimer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./pages/ShopCategory"
import Card from "./pages/Card"
import LoginSignUp from "./pages/LoginSignUp"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Footer from "./components/Footer/Footer"
import mens_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


function App() {

  return (
    <>
      <div>

        <BrowserRouter>
          <Navbar />
          <DateAndTimer />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/men" element={<ShopCategory  banner={mens_banner} category={"men"}/>}></Route>
            <Route path="/women" element={<ShopCategory banner={women_banner} category={"women"}/>}></Route>
            <Route path="/kid" element={<ShopCategory banner={kids_banner} category={"kid"}/>}></Route>
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}></Route>
            </Route>
            <Route path="/cart" element={<Card />}></Route>
            <Route path="/login" element={<LoginSignUp />}></Route>


          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
