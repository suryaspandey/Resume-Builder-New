import React from "react";
import ThemeOptions from "./ThemeOptions";

const SideBar = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubheadingColorChange,
}) => {
    return (
        <div className="side-bar">
            <h1>Options Bar</h1>
            <ThemeOptions
                onThemeColorChange={onThemeColorChange}
                onBackgroundColorChange={onBackgroundColorChange}
                onTextColorChange={onTextColorChange}
                onSubheadingColorChange={onSubheadingColorChange}
            />
        </div>
    );
};

export default SideBar;
