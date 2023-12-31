import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import RouterMain from "./RouterMain.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterMain />
    </React.StrictMode>
);
