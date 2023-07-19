// -- new code for custom options --

// import React, { useState } from "react";
// import { ColorPicker } from "antd";

// const ThemeOptions = ({
//     onThemeColorChange,
//     onBackgroundColorChange,
//     onTextColorChange,
//     onSubHeadingColorChange,
//     // onShowProfilePhotoChange,
// }) => {
//     const [selectedOption, setSelectedOption] = useState("option1");
//     // const [showProfilePhoto, setShowProfilePhoto] = useState(false);

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

//     const hanldeFontSize = (e) => {
//         // options for font size
//         // small
//         // medium
//         // large
//     };

//     const handlefontStyle = (e) => {
//         // options for font style
//     };

//     const handleUserName = (e) => {
//         //
//     };

//     const handleemail = (e) => {
//         // email the pdf to user
//     };
//     const handledownload = (e) => {
//         // download the pdf
//     };

//     const handleSpellcheck = (e) => {
//         // spell check
//     };

//     const handleOptionChange = (e) => {
//         setSelectedOption(e.target.value);
//         if (e.target.value === "option1") {
//             // Set the preset colors for Option 1
//             onBackgroundColorChange("#FFFFFF");
//             onThemeColorChange("#8d8fa6");
//             onTextColorChange("#000000");
//         } else if (e.target.value === "option2") {
//             // Set the preset colors for Option 2
//             onBackgroundColorChange("#F8F6F4");
//             onThemeColorChange("#108fe2");
//             onTextColorChange("#99a1b1");
//         } else if (e.target.value === "option3") {
//             // Set the preset colors for Option 3
//             onBackgroundColorChange("#f6fcff");
//             onThemeColorChange("#BF9742");
//             onTextColorChange("#0786D5");
//         }
//     };

//     const renderColorPreview = () => {
//         if (selectedOption === "option1") {
//             return (
//                 <div className="color-preview">
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#FFFFFF" }} //  background color value for Option 1
//                     ></div>
//                     {/* <ColorPicker defaultValue="red" />; */}
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#8d8fa6" }} //  icon color value for Option 1
//                     ></div>
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#000000" }} //  text color value for Option 1
//                     ></div>
//                 </div>
//             );
//         } else if (selectedOption === "option2") {
//             return (
//                 <div className="color-preview">
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#F8F6F4" }} //  background color value for Option 2
//                     ></div>
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#108fe2" }} //  icon color value for Option 2
//                     ></div>
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "##99a1b1" }} //  text color value for Option 2
//                     ></div>
//                 </div>
//             );
//         } else if (selectedOption === "option3") {
//             return (
//                 <div className="color-preview">
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#f6fcff" }} //  background color value for Option 3
//                     ></div>
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#BF9742" }} //  icon color value for Option 2
//                     ></div>
//                     <div
//                         className="color-box"
//                         style={{ backgroundColor: "#0786D5" }} //  text color value for Option 3
//                     ></div>
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div className="theme-options-container">
//             <div className="option-bar">
//                 <label>
//                     <input
//                         type="radio"
//                         name="options"
//                         value="option1"
//                         checked={selectedOption === "option1"}
//                         onChange={handleOptionChange}
//                     />
//                     Option 1
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="options"
//                         value="option2"
//                         checked={selectedOption === "option2"}
//                         onChange={handleOptionChange}
//                     />
//                     Option 2
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="options"
//                         value="option3"
//                         checked={selectedOption === "option3"}
//                         onChange={handleOptionChange}
//                     />
//                     Option 3
//                 </label>
//             </div>
//             {renderColorPreview()}

//             {/* <div className="show-photo-checkbox">
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={showProfilePhoto}
//                         onChange={handleShowProfilePhotoChange}
//                     />
//                     Show Profile Photo
//                 </label>
//             </div> */}
//         </div>
//     );
// };

// export default ThemeOptions;

// -- trying new with colorPicker librray
// import React, { useState } from "react";
// import { Radio, ColorPicker } from "antd";
// import "antd/dist/antd.css";

// const ThemeOptions = ({
//     onThemeColorChange,
//     onBackgroundColorChange,
//     onTextColorChange,
//     onSubHeadingColorChange,
// }) => {
//     const predefinedColors = {
//         option1: {
//             backgroundColor: "#FFFFFF",
//             themeColor: "#8d8fa6",
//             textColor: "#000000",
//             subheadingColor: "#000000",
//         },
//         option2: {
//             backgroundColor: "#F8F6F4",
//             themeColor: "#108fe2",
//             textColor: "#99a1b1",
//             subheadingColor: "#000000",
//         },
//         option3: {
//             backgroundColor: "#f6fcff",
//             themeColor: "#BF9742",
//             textColor: "#0786D5",
//             subheadingColor: "#000000",
//         },
//         // Add more options if needed
//     };

//     const [selectedOption, setSelectedOption] = useState("option1");
//     const [selectedColors, setSelectedColors] = useState(
//         predefinedColors.option1
//     );

//     const handleOptionChange = (e) => {
//         const option = e.target.value;
//         setSelectedOption(option);
//         setSelectedColors(predefinedColors[option]);
//     };

//     const handleColorChange = (color, type) => {
//         setSelectedColors((prevColors) => ({
//             ...prevColors,
//             [type]: color,
//         }));
//     };

//     const renderColorPicker = () => {
//         const { backgroundColor, themeColor, textColor, subheadingColor } =
//             selectedColors;

//         return (
//             <div className="color-picker-container">
//                 <div className="color-picker-item">
//                     <span>Background Color:</span>
//                     <ColorPicker
//                         color={backgroundColor}
//                         onChange={(color) =>
//                             handleColorChange(color, "backgroundColor")
//                         }
//                     />
//                 </div>
//                 <div className="color-picker-item">
//                     <span>Theme Color:</span>
//                     <ColorPicker
//                         color={themeColor}
//                         onChange={(color) =>
//                             handleColorChange(color, "themeColor")
//                         }
//                     />
//                 </div>
//                 <div className="color-picker-item">
//                     <span>Text Color:</span>
//                     <ColorPicker
//                         color={textColor}
//                         onChange={(color) =>
//                             handleColorChange(color, "textColor")
//                         }
//                     />
//                 </div>
//                 <div className="color-picker-item">
//                     <span>Subheading Color:</span>
//                     <ColorPicker
//                         color={subheadingColor}
//                         onChange={(color) =>
//                             handleColorChange(color, "subheadingColor")
//                         }
//                     />
//                 </div>
//             </div>
//         );
//     };

//     const renderColorPreview = () => {
//         const { backgroundColor, themeColor, textColor, subheadingColor } =
//             selectedColors;

//         return (
//             <div className="color-preview">
//                 <div
//                     className="color-box"
//                     style={{ backgroundColor }} // Background color value
//                 ></div>
//                 <div
//                     className="color-box"
//                     style={{ backgroundColor: themeColor }} // Theme color value
//                 ></div>
//                 <div
//                     className="color-box"
//                     style={{ backgroundColor: textColor }} // Text color value
//                 ></div>
//                 <div
//                     className="color-box"
//                     style={{ backgroundColor: subheadingColor }} // Subheading color value
//                 ></div>
//             </div>
//         );
//     };
//     return (
//         <div className="theme-options-container">
//             <div className="option-bar">
//                 <Radio.Group
//                     onChange={handleOptionChange}
//                     value={selectedOption}
//                     optionType="button"
//                 >
//                     <Radio.Button value="option1">Option 1</Radio.Button>
//                     <Radio.Button value="option2">Option 2</Radio.Button>
//                     <Radio.Button value="option3">Option 3</Radio.Button>
//                 </Radio.Group>
//             </div>
//             {renderColorPicker()}
//             {renderColorPreview()}
//         </div>
//     );
// };

// export default ThemeOptions;

import React, { useState } from "react";
import { Radio, ColorPicker, Select } from "antd";

const ThemeOptions = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubHeadingColorChange,
    // ------------
    onFontSizeChange,
    onFontStyleChange,
}) => {
    const predefinedColors = {
        default: {
            backgroundColor: "#0bb5f4",
            themeColor: "black",
            textColor: "#0786d5",
            subheadingColor: "black",
        },

        option1: {
            backgroundColor: "#D0C7C5  ",
            themeColor: "#8d8fa6",
            textColor: "#7f706bde",
            subheadingColor: "red",
        },
        option2: {
            backgroundColor: "#2E70CE",
            themeColor: "#6fa2eb",
            textColor: "#8e95a2",
            subheadingColor: "#000000",
        },
        option3: {
            backgroundColor: "#88BAFF",
            // themeColor: "#BF9742",
            themeColor: "#dca261",
            textColor: "#0786D5",
            subheadingColor: "#000000",
        },
        option4: {
            backgroundColor: "#5bbca8",
            // themeColor: "#BF9742",
            themeColor: "#8d99968c",
            textColor: "#2c806f",
            subheadingColor: "#000000",
        },
        // Add more options if needed
    };

    const [fontSize, setFontSize] = useState("small");
    const [fontStyle, setFontStyle] = useState("Arial");

    // const [selectedOption, setSelectedOption] = useState("default");
    const [selectedOption, setSelectedOption] = useState(() => {
        const storedOption = localStorage.getItem("selectedOption");
        return storedOption ? storedOption : "default";
    });
    const [selectedColors, setSelectedColors] = useState(
        predefinedColors.default
    );

    const handleOptionChange = (e) => {
        const option = e.target.value;
        setSelectedOption(option);

        setSelectedColors(predefinedColors[option]);
        const colors = predefinedColors[option];
        onBackgroundColorChange(colors.backgroundColor);
        onThemeColorChange(colors.themeColor);
        onTextColorChange(colors.textColor);
        // onSubHeadingColorChange(colors.subheadingColor);

        console.log("Before setting local storage");
        localStorage.setItem("selectedOption", option);
        console.log("After setting local storage");
    };

    const handleColorChange = (color, type) => {
        setSelectedColors((prevColors) => ({
            ...prevColors,
            [type]: color,
        }));

        switch (type) {
            case "backgroundColor":
                onBackgroundColorChange(color);
                break;
            case "themeColor":
                onThemeColorChange(color);
                break;
            case "textColor":
                onTextColorChange(color);
                break;
            case "subheadingColor":
                onSubHeadingColorChange(color);
                break;
            default:
                break;
        }
    };

    const handleFontStyleChange = (value) => {
        setFontStyle(value);
        onFontStyleChange(value);
    };

    const handleFontSizeChange = (e) => {
        let fontSizeInPixel;
        const value = e.target.value;

        if (value === "small") {
            fontSizeInPixel = 12;
        } else if (value === "medium") {
            fontSizeInPixel = 14;
        } else if (value === "large") {
            fontSizeInPixel = 15;
        }

        setFontSize(value);
        onFontSizeChange(fontSizeInPixel);
    };

    const renderColorPicker = () => {
        const { backgroundColor, themeColor, textColor, subheadingColor } =
            selectedColors;

        return (
            <>
                <div className="color-picker-container">
                    <div className="color-picker-item">
                        <span>Background Color:</span>
                        <ColorPicker
                            defaultValue={backgroundColor}
                            onChange={(color) =>
                                handleColorChange(color, "backgroundColor")
                            }
                        />
                    </div>
                    <div className="color-picker-item">
                        <span>Theme Color:</span>
                        <ColorPicker
                            defaultValue={themeColor}
                            onChange={(color) =>
                                handleColorChange(color, "themeColor")
                            }
                        />
                    </div>
                    <div className="color-picker-item">
                        <span>Text Color:</span>
                        <ColorPicker
                            defaultValue={textColor}
                            onChange={(color) =>
                                handleColorChange(color, "textColor")
                            }
                        />
                    </div>
                    <div className="color-picker-item">
                        <span>Subheading Color:</span>
                        <ColorPicker
                            defaultValue={subheadingColor}
                            onChange={(color) =>
                                handleColorChange(color, "subheadingColor")
                            }
                        />
                    </div>
                </div>
            </>
        );
    };

    const renderColorPreview = () => {
        const { backgroundColor, themeColor, textColor, subheadingColor } =
            selectedColors;

        return (
            <div className="color-preview">
                <div
                    className="color-box"
                    style={{ backgroundColor }} // Background color value
                ></div>
                <div
                    className="color-box"
                    style={{ backgroundColor: themeColor }} // Theme color value
                ></div>
                <div
                    className="color-box"
                    style={{ backgroundColor: textColor }} // Text color value
                ></div>
                {/* <div
                    className="color-box"
                    style={{ backgroundColor: subheadingColor }} // Subheading color value
                ></div> */}
            </div>
        );
    };

    const renderFontStyleSelector = () => {
        return (
            <div className="font-style-selector">
                <span>Font Style:</span>
                <Select
                    defaultValue={fontStyle}
                    style={{ width: 120 }}
                    onChange={handleFontStyleChange}
                >
                    <Option value="Arial">Arial</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Trebuchet MS">Trebuchet MS</Option>
                    <Option value="Verdana">Verdana</Option>
                    <Option value="Fira Sans">Fira Sans</Option>
                    <Option value="Bodoni MT">Bodoni MT</Option>
                    <Option value="Century Gothic">Century Gothic</Option>
                    <Option value="Courier New">Courier New</Option>
                    <Option value="Georgia">Georgia</Option>
                    <Option value="Tahoma">Tahoma</Option>
                </Select>
            </div>
        );
    };

    const renderFontSizeSelector = () => {
        return (
            <div className="font-size-selector">
                <span>Font Size: </span>
                <Radio.Group
                    defaultValue={fontSize}
                    // style={{ width: "120px" }}
                    onChange={handleFontSizeChange}
                >
                    <Radio value="small">S</Radio>
                    <Radio value="medium">M</Radio>
                    <Radio value="large">L</Radio>
                </Radio.Group>
            </div>
        );
    };

    return (
        <div className="theme-options-container">
            <div className="option-bar">
                <Radio.Group
                    onChange={handleOptionChange}
                    value={selectedOption}
                    optionType="button"
                >
                    <Radio style={{ width: 85 }} value="default">
                        Default
                    </Radio>
                    <br />
                    <Radio value="option1">Option 1</Radio>
                    <br />
                    <Radio value="option2">Option 2</Radio>
                    <br />
                    <Radio value="option3">Option 3</Radio>
                    <br />
                    <Radio value="option4">Option 4</Radio>
                </Radio.Group>
            </div>
            {/* {renderColorPicker()} */}
            {renderColorPreview()}
            {renderFontStyleSelector()}
            {renderFontSizeSelector()}
        </div>
    );
};

export default ThemeOptions;
