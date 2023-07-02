import App from "./App";
import MainContent from "./Components/MainContent";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouterMain() {
    const [themeColor, setThemeColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [subheadingColor, setSubheadingColor] = useState("#000000");

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
    return (
        <Router>
            <Switch>
                <Route path="/preview">
                    <MainContent
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
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
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouterMain;
