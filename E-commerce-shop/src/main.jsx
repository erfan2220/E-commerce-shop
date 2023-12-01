import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Pages/Home.jsx";
import Products from "./Component/Products.jsx";
import Product from "./Component/Product.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from  "react-redux";
import store from "./redux/store.jsx";
import Cart from "./Pages/cart";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About-us";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Provider store={store}>
          <Header/>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Products" element={<Products />}></Route>
          <Route exact path="/Products/:id" element={<Product/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/about-us" element={<About/>}></Route>
      </Routes>
          <Footer/>
      </Provider>
  </Router>
)
