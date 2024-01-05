import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./app.scss";

export const App: React.FC = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Footer />
            </div>
        </div>
    );
};
