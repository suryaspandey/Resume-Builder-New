//
import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import HeaderComp from "./Components/HeaderComp";

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
    return (
        <>
            <HeaderComp />
            <div className="main-container">
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
