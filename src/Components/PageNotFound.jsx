import React from "react";
const PageNotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h3 style={{ fontFamily: "Oswald", color: "orange" }}>
                Oops!! The page you are looking for does not exist!!
            </h3>

            <img src="./template_previews/pageNotFoundOwl.gif" />
            <div>
                <a href="/">Home</a>
            </div>
        </div>
    );
};

export default PageNotFound;
