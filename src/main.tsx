import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import "./firebase/firebase.ts";
import { store } from "./store/store.ts";
import { App } from "./components/App/App.tsx";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    // </React.StrictMode>
);
