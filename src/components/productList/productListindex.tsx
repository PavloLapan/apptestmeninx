import {Route, Routes} from "react-router-dom";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails";
import React from "react";

const ProductListIndex =() => {
    return (
        <Routes>
            <Route index element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    );
}

export default ProductListIndex