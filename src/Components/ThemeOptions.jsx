import React from "react";

const ThemeOptions = ({
    onThemeColorChange,
    onBackgroundColorChange,
    onTextColorChange,
    onSubHeadingColorChange,
}) => {
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

    return (
        <div className="theme-options-container">
            {/* <h2>Theme Options</h2> */}
            <div className="color-picker">
                <label htmlFor="theme-color">Select Icon Color:</label>
                <br />
                <input
                    className="theme-input"
                    type="color"
                    id="theme-color"
                    name="theme-color"
                    onChange={handleThemeColorChange}
                />
            </div>
            <div className="color-picker">
                <label htmlFor="background-color">
                    Select Background Color:
                </label>
                <br />
                <input
                    className="theme-input"
                    type="color"
                    id="background-color"
                    name="background-color"
                    onChange={handleBackgroundColorChange}
                />
            </div>
            <div className="color-picker">
                <label htmlFor="text-color">Select Text Color:</label>
                <br />
                <input
                    className="theme-input"
                    type="color"
                    id="text-color"
                    name="text-color"
                    onChange={handleTextColorChange}
                />
            </div>
            <div className="color-picker">
                <label htmlFor="text-color">
                    Select Subheading Text Color:
                </label>
                <br />
                <input
                    className="theme-input"
                    type="color"
                    id="text-color"
                    name="text-color"
                    onChange={handleSubheadingColorChange}
                />
            </div>
        </div>
    );
};

export default ThemeOptions;

// import React, { useContext } from "react";
// import { AppContext } from "../AppContext";

// const ThemeOptions = () => {
//     const { setBackgroundColor } = useContext(AppContext);

//     const handleBackgroundColorChange = (e) => {
//         const color = e.target.value;
//         setBackgroundColor(color);
//     };

//     return (
//         <div className="theme-options-container">
//             <h2>Theme Options</h2>
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
//         </div>
//     );
// };

// export default ThemeOptions;
