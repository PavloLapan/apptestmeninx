import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListIndexAnimans from "./components/productList/productListindex";
import ProductDetails from "./components/productList/components/productDetails";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListIndexAnimans/>}/>
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
