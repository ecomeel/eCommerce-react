import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
