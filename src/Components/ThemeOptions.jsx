// import React from "react";

// const ThemeOptions = ({
//     onThemeColorChange,
//     onBackgroundColorChange,
//     onTextColorChange,
//     onSubHeadingColorChange,
// }) => {
//     const handleThemeColorChange = (e) => {
//         const color = e.target.value;
//         onThemeColorChange(color);
//     };

//     const handleBackgroundColorChange = (e) => {
//         const color = e.target.value;
//         onBackgroundColorChange(color);
//     };

//     const handleTextColorChange = (e) => {
//         const color = e.target.value;
//         onTextColorChange(color);
//     };
//     const handleSubheadingColorChange = (e) => {
//         const color = e.target.value;
//         onSubHeadingColorChange(color);
//     };

//     const handleCustomIconColorChange = (e) => {
//         const iconcolor = "rgb(212,180,17)";
//         const backgroundColor = "rgb(214,241,255)";
//         const textColor = "rgb(212,180,17)";
//     };

//     return (
//         <div className="theme-options-container">
//             {/* <h2>Theme Options</h2> */}
//             <div className="color-picker">
//                 <label htmlFor="theme-color">Select Icon Color:</label>
//                 <br />
//                 <input
//                     className="theme-input"
//                     type="color"
//                     id="theme-color"
//                     name="theme-color"
//                     onChange={handleThemeColorChange}
//                 />
//             </div>
//             <div className="color-picker">
//                 <label htmlFor="background-color">
//                     Select Background Color:
//                 </label>
//                 <br />
//                 <input
//                     className="theme-input"
//                     type="color"
//                     id="background-color"
//                     name="background-color"
//                     onChange={handleBackgroundColorChange}
//                 />
//             </div>
//             <div className="color-picker">
//                 <label htmlFor="text-color">Select Text Color:</label>
//                 <br />
//                 <input
//                     className="theme-input"
//                     type="color"
//                     id="text-color"
//                     name="text-color"
//                     onChange={handleTextColorChange}
//                 />
//             </div>
//             <div className="color-picker">
//                 <label htmlFor="text-color">
//                     Select Subheading Text Color:
//                 </label>
//                 <br />
//                 <input
//                     className="theme-input"
//                     type="color"
//                     id="text-color"
//                     name="text-color"
//                     onChange={handleSubheadingColorChange}
//                 />
//                 <label htmlFor="text-color">Select Custom Color:</label>
//                 <input
//                     className="theme-input"
//                     type="color"
//                     id="text-color"
//                     name="text-color"
//                     onChange={handleCustomIconColorChange}
//                 />
//             </div>
//         </div>
//     );
// };

// export default ThemeOptions;

// -- new code for custom options --

import React, { useState } from "react";

const ThemeOptions = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubHeadingColorChange,
}) => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleThemeColorChange = (e) => {
        const color = e.target.value;
        onThemeColorChange(color);
    };

    const handleBackgroundColorChange = (e) => {
        const color = e.target.value;
        onBackgroundColorChange(color);
    };

    const handleTextColorChange = (e) => {
        const color = e.target.value;
        onTextColorChange(color);
    };

    const handleSubheadingColorChange = (e) => {
        const color = e.target.value;
        onSubHeadingColorChange(color);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value === "option1") {
            // Set the preset colors for Option 1
            onBackgroundColorChange("#FFFFFF");
            onThemeColorChange("#8d8fa6");
            onTextColorChange("#000000");
        } else if (e.target.value === "option2") {
            // Set the preset colors for Option 2
            onBackgroundColorChange("#F8F6F4");
            onThemeColorChange("#108fe2");
            onTextColorChange("#99a1b1");
        } else if (e.target.value === "option3") {
            // Set the preset colors for Option 3
            onBackgroundColorChange("#f6fcff");
            onThemeColorChange("#BF9742");
            onTextColorChange("#0786D5");
        }
    };

    const renderColorPreview = () => {
        if (selectedOption === "option1") {
            return (
                <div className="color-preview">
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#FFFFFF" }} //  background color value for Option 1
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#8d8fa6" }} //  icon color value for Option 1
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#000000" }} //  text color value for Option 1
                    ></div>
                </div>
            );
        } else if (selectedOption === "option2") {
            return (
                <div className="color-preview">
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#F8F6F4" }} //  background color value for Option 2
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#108fe2" }} //  icon color value for Option 2
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "##99a1b1" }} //  text color value for Option 2
                    ></div>
                </div>
            );
        } else if (selectedOption === "option3") {
            return (
                <div className="color-preview">
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#f6fcff" }} //  background color value for Option 3
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#BF9742" }} //  icon color value for Option 2
                    ></div>
                    <div
                        className="color-box"
                        style={{ backgroundColor: "#0786D5" }} //  text color value for Option 3
                    ></div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="theme-options-container">
            <div className="option-bar">
                <label>
                    <input
                        type="radio"
                        name="options"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                    />
                    Option 1
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="options"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                    />
                    Option 2
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="options"
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleOptionChange}
                    />
                    Option 3
                </label>
            </div>
            {renderColorPreview()}
        </div>
    );
};

export default ThemeOptions;
