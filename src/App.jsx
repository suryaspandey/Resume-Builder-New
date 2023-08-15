//
import React, { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import HeaderComp from "./Components/HeaderComp";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const App = ({
    handleThemeColorChange,
    handleBackgroundColorChange,
    handleTextColorChange,
    handleSubheadingColorChange,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    // ----------
    tempfontSize,
    tempfontStyle,
    handleFontSizeChange,
    handleFontStyleChange,
    handleTemplateSelect,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <HeaderComp /> */}
            <div className="main-container">
                <button className="hamburger-button" onClick={toggleCollapse}>
                    <FiMenu
                        style={{
                            fontSize: "22px",
                            backgroundColor: "#006370",
                            borderRadius: "50%",
                            padding: "4px",
                        }}
                    />
                </button>
                {/* <h6 onClick={toggleCollapse} style={{ cursor: "pointer" }}>
                    Open Settings
                </h6> */}

                {isOpen ? (
                    <SideBar
                        onThemeColorChange={handleThemeColorChange}
                        onBackgroundColorChange={handleBackgroundColorChange}
                        onTextColorChange={handleTextColorChange}
                        onSubheadingColorChange={handleSubheadingColorChange}
                        // ------------------------
                        onFontSizeChange={handleFontSizeChange}
                        onFontStyleChange={handleFontStyleChange}
                        onTemplateSelect={handleTemplateSelect}
                    />
                ) : null}

                <MainContent
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    // ----------------------------
                    tempfontSize={tempfontSize}
                    tempfontStyle={tempfontStyle}
                />
            </div>
        </>
    );
};

export default App;
