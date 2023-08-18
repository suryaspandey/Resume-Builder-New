import React from "react";
import { useHistory } from "react-router-dom";

export default function ComingSoon() {
    const history = useHistory();

    const handleHomePage = () => {
        history.push("/choose-template");
    };
    return (
        <div className="coming-soon-pg">
            <img
                src="/template_previews/comingSoon2.gif"
                // src="/template_previews/comingSoon.gif"
                alt="coming-soon"
                className="coming-soon-background-img"
            />

            <div className="content-overlay">
                {/* <img
                    src="/template_previews/owl_giffy1.gif"
                    height={200}
                    alt="owl"
                    className="owl-image"
                /> */}

                <button
                    onClick={() => handleHomePage()}
                    style={{ marginBottom: "40px" }}
                    className="save-btn"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
