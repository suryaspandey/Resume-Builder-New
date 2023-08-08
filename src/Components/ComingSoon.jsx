import React from "react";
import { useHistory } from "react-router-dom";

export default function ComingSoon() {
    const history = useHistory();

    const handleHomePage = () => {
        history.push("/choose-template");
    };
    return (
        <div>
            <div className="coming-soon-pg">
                <img
                    src="/template_previews/owl_giffy1.gif"
                    height={200}
                    style={{ paddingLeft: "45%" }}
                />
                <br />
                <button
                    // onClick={handleHomePage}
                    onClick={() => handleHomePage()}
                    style={{ marginTop: "450px", marginLeft: "50%" }}
                    className="save-btn"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
