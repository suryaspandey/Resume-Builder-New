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
            <h4>Settings</h4>
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
