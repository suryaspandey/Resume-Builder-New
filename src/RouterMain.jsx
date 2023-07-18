import App from "./App";
import MainContent from "./Components/MainContent";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouterMain() {
    const [themeColor, setThemeColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [subheadingColor, setSubheadingColor] = useState("#000000");

    const [tempfontSize, setTempFontSize] = useState(10);
    const [tempfontStyle, setTempFontStyle] = useState("Times New Roman");

    const [displayUserName, setDisplayUserName] = useState("");
    const [emailPDF, setEmailPDF] = useState("");
    const [downloadPDF, setDownloadPDF] = useState("");

    useEffect(() => {
        const storedFontSize = localStorage.getItem("tempfontSize");
        if (storedFontSize) {
            setTempFontSize(Number(storedFontSize));
        }

        const storedFontStyle = localStorage.getItem("tempfontStyle");
        if (storedFontStyle) {
            setTempFontSize(Number(storedFontStyle));
        }
    }, []);

    const handleFontSizeChange = (size) => {
        setTempFontSize(size);
        localStorage.setItem("tempfontSize", size.toString());
    };

    const handleFontStyleChange = (style) => {
        setTempFontStyle(style);
        localStorage.setItem("tempfontStyle", style.toString());
    };

    // --------------------------

    const handleThemeColorChange = (color) => {
        setThemeColor(color);
    };

    const handleBackgroundColorChange = (color) => {
        setBackgroundColor(color);
    };

    const handleTextColorChange = (color) => {
        setTextColor(color);
    };

    const handleSubheadingColorChange = (color) => {
        setSubheadingColor(color);
    };

    //  -----------------------
    const handleEmailPDF = (emailPDF) => {
        setEmailPDF(emailPDF);
    };

    const handleDownloadPDF = (downloadPDF) => {
        setDownloadPDF(downloadPDF);
    };

    const handleDisplayUserName = (displayUserName) => {
        setDisplayUserName(displayUserName);
    };

    return (
        <Router>
            <Switch>
                <Route path="/preview">
                    <MainContent
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        // -------------
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                </Route>
                <Route path="/">
                    <App
                        handleThemeColorChange={handleThemeColorChange}
                        handleBackgroundColorChange={
                            handleBackgroundColorChange
                        }
                        handleTextColorChange={handleTextColorChange}
                        handleSubheadingColorChange={
                            handleSubheadingColorChange
                        }
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        // -----------------
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        handleFontSizeChange={handleFontSizeChange}
                        handleFontStyleChange={handleFontStyleChange}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouterMain;
