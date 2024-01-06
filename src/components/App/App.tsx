import { Routes, Route } from "react-router-dom";

import { Products } from "../../pages/Products/Products";
// import { Cart } from "../Cart/Cart";
import { Layout } from "../commons/Layout/Layout";
import "./app.scss";

export const App: React.FC = () => {
    return (
        <div className="app">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Products />} />
                        <Route path="/products" element={<Products />} />
                        {/* <Route path="/cart" element={<Cart />} /> */}
                    </Route>
                </Routes>
            </div>
        </div>
    );
};
