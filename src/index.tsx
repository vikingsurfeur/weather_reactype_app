/* Import React Components */
import React from "react";
import ReactDOM from "react-dom";

/* Import Redux Stack */
import { Provider } from "react-redux";

/* Import Component */
import App from "./App";

/* Import Store */
import store from "./redux/store";

/* Import ReportWebVitals for Google Analytics */
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
