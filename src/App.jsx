// import { useState } from "react";
// // import { PDFViewer, Document, Page } from "react-pdf";

// import "./App.css";
// import BasicInfo from "./Components/BasicInfo";
// import ExperienceDetails from "./Components/ExperienceDetails";
// import ThemeOptions from "./Components/ThemeOptions";
// import EducationDetails from "./Components/EducationDetails";
// import ProjectDetails from "./Components/ProjectDetails";
// import Skills from "./Components/Skills";

// const App = () => {
//     const [themeColor, setThemeColor] = useState("black");
//     const [backgroundColor, setBackgroundColor] = useState("");
//     const [textColor, setTextColor] = useState("#000000");
//     const [subheadingColor, setSubheadingColor] = useState("#000000");

//     const [isPreviewMode, setIsPreviewMode] = useState(false);

//     const togglePreviewMode = () => {};

//     const handleThemeColorChange = (color) => {
//         setThemeColor(color);
//     };

//     const handleBackgroundColorChange = (color) => {
//         setBackgroundColor(color);
//     };

//     const handleTextColorChange = (color) => {
//         setTextColor(color);
//     };

//     const handleSubheadingColor = (color) => {
//         setSubheadingColor(color);
//     };

//     return (
//         <div className="main-container">
//             <div className="side-bar">
//                 <h1>options bar</h1>
//                 <ThemeOptions
//                     onThemeColorChange={handleThemeColorChange}
//                     onBackgroundColorChange={handleBackgroundColorChange}
//                     onTextColorChange={handleTextColorChange}
//                     onSubHeadingColorChange={handleSubheadingColor}
//                 />
//             </div>
//             <div
//                 className="all-components"
//                 style={{
//                     backgroundColor: backgroundColor, // Use the backgroundColor state variable
//                 }}
//             >
//                 <BasicInfo
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                 />
//                 <div className="other-container">
//                     <ExperienceDetails
//                         themeColor={themeColor}
//                         backgroundColor={backgroundColor}
//                         textColor={textColor}
//                         subheadingColor={subheadingColor}
//                     />

//                     <div className="education-container">
//                         <EducationDetails
//                             themeColor={themeColor}
//                             backgroundColor={backgroundColor}
//                             textColor={textColor}
//                             subheadingColor={subheadingColor}
//                         />
//                     </div>
//                     <div className="education-container">
//                         <ProjectDetails
//                             themeColor={themeColor}
//                             backgroundColor={backgroundColor}
//                             textColor={textColor}
//                             subheadingColor={subheadingColor}
//                         />
//                     </div>
//                     <div className="education-container">
//                         <Skills
//                             themeColor={themeColor}
//                             backgroundColor={backgroundColor}
//                             textColor={textColor}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;

//  ----------- PDF PREVEW APPROACH-- didnt work

// import { useState } from "react";
// // import { PDFViewer, Document, Page } from "react-pdf";

// import "./App.css";
// // import BasicInfo from "./Components/BasicInfo";
// // import ExperienceDetails from "./Components/ExperienceDetails";
// import ThemeOptions from "./Components/ThemeOptions";
// // import EducationDetails from "./Components/EducationDetails";
// // import ProjectDetails from "./Components/ProjectDetails";
// // import Skills from "./Components/Skills";
// import ResumePDF from "./ResumePDF";
// import { PDFViewer } from "@react-pdf/renderer";

// const App = () => {
//     const [theme, setTheme] = useState({
//         themeColor: "black",
//         backgroundColor: "pink",
//         textColor: "#000000",
//         subheadingColor: "#000000",
//     });
//     // const [themeColor, setThemeColor] = useState("black");
//     // const [backgroundColor, setBackgroundColor] = useState("pink");
//     // const [textColor, setTextColor] = useState("#000000");
//     // const [subheadingColor, setSubheadingColor] = useState("#000000");

//     const [isPreviewMode, setIsPreviewMode] = useState(false);

//     const togglePreviewMode = () => {};

//     // const handleThemeColorChange = (color) => {
//     //     setThemeColor(color);
//     // };

//     // const handleBackgroundColorChange = (color) => {
//     //     setBackgroundColor(color);
//     // };

//     // const handleTextColorChange = (color) => {
//     //     setTextColor(color);
//     // };

//     // const handleSubheadingColor = (color) => {
//     //     setSubheadingColor(color);
//     // };

//     const handleThemeChange = (updatedTheme) => {
//         setTheme(updatedTheme);
//     };

//     return (
//         <div className="main-container">
//             <div className="side-bar">
//                 <h1>Options Bar</h1>
//                 <ThemeOptions onThemeChange={handleThemeChange} />
//             </div>
//             <div className="all-components">
//                 <PDFViewer width="1000" height="600">
//                     <ResumePDF theme={theme} />
//                 </PDFViewer>
//             </div>
//         </div>
//     );
// };

// export default App;

// APP Context API

// import React, { useContext } from "react";
// import "./App.css";
// import BasicInfo from "./Components/BasicInfo";
// import ExperienceDetails from "./Components/ExperienceDetails";
// import ThemeOptions from "./Components/ThemeOptions";
// import EducationDetails from "./Components/EducationDetails";
// import ProjectDetails from "./Components/ProjectDetails";
// import Skills from "./Components/Skills";
// import { AppContext } from "./AppContext";

// const App = () => {
//     const { backgroundColor } = useContext(AppContext);

//     return (
//         <div className="main-container">
//             <div className="side-bar">
//                 <h1>options bar</h1>
//                 <ThemeOptions />
//             </div>
//             <div className="all-components" style={{ backgroundColor }}>
//                 <BasicInfo />
//                 <div className="other-container">
//                     <ExperienceDetails />
//                     <div className="education-container">
//                         <EducationDetails />
//                     </div>
//                     <div className="education-container">
//                         <ProjectDetails />
//                     </div>
//                     <div className="education-container">
//                         <Skills />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;

//
import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";

const App = ({
    handleThemeColorChange,
    handleBackgroundColorChange,
    handleTextColorChange,
    handleSubheadingColorChange,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    return (
        <div className="main-container">
            <SideBar
                onThemeColorChange={handleThemeColorChange}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onSubheadingColorChange={handleSubheadingColorChange}
            />
            <MainContent
                themeColor={themeColor}
                backgroundColor={backgroundColor}
                textColor={textColor}
                subheadingColor={subheadingColor}
            />
        </div>
    );
};

export default App;
