import { Header } from "../Header/Header";
import { Products } from "../Products/Products";
import { Footer } from "../Footer/Footer";
import "./app.scss";

export const App: React.FC = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                {/* <Products items={products} /> */}
                <Products 
                />
                <Footer />
            </div>
        </div>
    );
};
