import React from "react";
import ThemeOptions from "./ThemeOptions";

const SideBar = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubheadingColorChange,
    onFontSizeChange,
    onFontStyleChange,
    onTemplateSelect,
}) => {
    return (
        <div className="side-bar">
            <h1>Options Bar</h1>
            <ThemeOptions
                onThemeColorChange={onThemeColorChange}
                onBackgroundColorChange={onBackgroundColorChange}
                onTextColorChange={onTextColorChange}
                onSubheadingColorChange={onSubheadingColorChange}
                // -----------------------------
                onFontSizeChange={onFontSizeChange}
                onFontStyleChange={onFontStyleChange}
                onTemplateSelect={onTemplateSelect}
            />
        </div>
    );
};

export default SideBar;
