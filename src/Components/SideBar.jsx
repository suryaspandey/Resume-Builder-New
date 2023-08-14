import React, { useState } from "react";
import ThemeOptions from "./ThemeOptions";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const SideBar = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubheadingColorChange,
    onFontSizeChange,
    onFontStyleChange,
    onTemplateSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // <button onClick={toggleCollapse}>{isOpen ? "Collapse" : "Expand"}</button>;

    return (
        <div className="side-bar">
            {/* <button className="hamburger-button" onClick={toggleCollapse}>
                <FiMenu />
            </button> */}

            {/* {isOpen ? ( */}
            <>
                {/* <MdClose style={{ width: "32px", height: "32px" }} /> */}
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
            </>
            {/* ) : null} */}
        </div>
    );
};

export default SideBar;
