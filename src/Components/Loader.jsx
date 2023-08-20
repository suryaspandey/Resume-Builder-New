import React from "react";

import "./loader.css";

export default function () {
    return (
        <div className="loader">
            {/* <img src="./template_previews/loader.gif" alt="Loading" /> */}
            <img
                src="./template_previews/loader2.gif"
                alt="Loading"
                style={{ borderRadius: "50%" }}
            />
        </div>
    );
}
