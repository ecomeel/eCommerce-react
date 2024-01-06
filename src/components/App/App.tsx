import { Routes, Route } from "react-router-dom";

import { Products } from "../../pages/Products/Products";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { TakeOrderPage } from "../../pages/TakeOrderPage/TakeOrderPage";
import { FeedbackPage } from "../../pages/FeedbackPage/FeedbackPage";
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
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/feedback" element={<FeedbackPage />} />
                        <Route path="/takeorder" element={<TakeOrderPage />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
};
