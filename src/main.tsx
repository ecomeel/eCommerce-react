import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import './firebase/firebase.ts'
import { store } from "./store/store.ts";
import { App } from "./components/App/App.tsx";

import "./common-styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
