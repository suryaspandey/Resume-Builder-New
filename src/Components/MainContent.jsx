// import React, { useState } from "react";
// import BasicInfo from "./BasicInfo";
// import ExperienceDetails from "./ExperienceDetails";
// import EducationDetails from "./EducationDetails";
// import ProjectDetails from "./ProjectDetails";
// // import Skills from "./Skills";
// import { useHistory } from "react-router-dom";

// import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
// import ExperienceDetailsTemplate1 from "./Template1/ExperienceDetailsTemplate1";

// import BasicInfoTemplate2 from "./Template2/BasicInfoTemplate2";

// const MainContent = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     let history = useHistory();

//     const togglePreviewMode = () => {
//         history.push("/preview");
//     };

//     const [showProfilePhoto, setShowProfilePhoto] = useState(true);

//     const handleShowProfilePhotoChange = (value) => {
//         setShowProfilePhoto(value);
//     };

//     return (
//         <div className="all-components">
//             <>
//                 <BasicInfoTemplate2
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                     showProfilePhoto={showProfilePhoto}
//                     onShowProfilePhotoChange={handleShowProfilePhotoChange}
//                 />

//                 <BasicInfoTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                     showProfilePhoto={showProfilePhoto}
//                     onShowProfilePhotoChange={handleShowProfilePhotoChange}
//                 />

//                 {/* ----------- */}
//                 {/* <div className="other-container">
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
//                     {/* <div className="education-container">
//                         <Skills
//                             themeColor={themeColor}
//                             backgroundColor={backgroundColor}
//                             textColor={textColor}
//                         />
//                     </div>
//                 </div> */}
//                 {/* ------------ */}
//                 <button className="save-btn" onClick={togglePreviewMode}>
//                     Toggle Preview Mode
//                 </button>
//             </>
//         </div>
//     );
// };

// export default MainContent;

// ------------- above is a working code ------

import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import ExperienceDetails from "./ExperienceDetails";
import EducationDetails from "./EducationDetails";
import ProjectDetails from "./ProjectDetails";
// import Skills from "./Skills";
import { useHistory } from "react-router-dom";

import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
import ExperienceDetailsTemplate1 from "./Template1/ExperienceDetailsTemplate1";

import BasicInfoTemplate2 from "./Template2/BasicInfoTemplate2";

// import templatePreview1 from "../template_previews/template_preview1.PNG";
// import templatePreview2 from "../template_previews/template_preview2.PNG";
// Import other template preview images as needed

const MainContent = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    // ----------
    tempfontSize,
    tempfontStyle,
}) => {
    let history = useHistory();

    const togglePreviewMode = () => {
        history.push("/preview");
    };

    const [showProfilePhoto, setShowProfilePhoto] = useState(true);

    const handleShowProfilePhotoChange = (value) => {
        setShowProfilePhoto(value);
    };

    // const templatePreview1 =
    //     require("../template_previews/template_preview1.PNG").default;

    // const templatePreviews = [
    //     { image: templatePreview1, component: BasicInfoTemplate1 },
    //     { image: templatePreview2, component: BasicInfoTemplate2 },
    //     // Add more objects for additional templates
    // ];

    return (
        <div className="all-components">
            <>
                <BasicInfoTemplate2
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    showProfilePhoto={showProfilePhoto}
                    onShowProfilePhotoChange={handleShowProfilePhotoChange}
                    // ---------
                    tempfontSize={tempfontSize}
                    tempfontStyle={tempfontStyle}
                />

                <BasicInfoTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    showProfilePhoto={showProfilePhoto}
                    onShowProfilePhotoChange={handleShowProfilePhotoChange}
                    // --------------
                    tempfontSize={tempfontSize}
                    tempfontStyle={tempfontStyle}
                />

                <button className="save-btn" onClick={togglePreviewMode}>
                    Toggle Preview Mode
                </button>
            </>
        </div>
    );

    // return (
    //     <div className="all-components">
    //         {templatePreviews.map((preview, index) => (
    //             <div
    //                 key={index}
    //                 className="component-preview"
    //                 onClick={() => setSelectedComponent(preview.component)}
    //             >
    //                 <img
    //                     src={preview.image}
    //                     alt={`Template Preview ${index + 1}`}
    //                 />
    //             </div>
    //         ))}

    //         {selectedComponent && (
    //             <div className="selected-component">
    //                 {React.createElement(selectedComponent, {
    //                     themeColor,
    //                     backgroundColor,
    //                     textColor,
    //                     subheadingColor,
    //                     showProfilePhoto,
    //                     onShowProfilePhotoChange: handleShowProfilePhotoChange,
    //                 })}
    //             </div>
    //         )}

    //         <button className="save-btn" onClick={togglePreviewMode}>
    //             Toggle Preview Mode
    //         </button>
    //     </div>
    // );
};

export default MainContent;

// -----------------------

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
// import BasicInfoTemplate2 from "./Template2/BasicInfoTemplate2";
// import templatePreview1 from "template_previews/template_preview1.PNG";
// import templatePreview2 from "template_previews/template_preview2.PNG";

// const MainContent = () => {
//     const [selectedComponent, setSelectedComponent] = useState(null);
//     let history = useHistory();

//     const togglePreviewMode = () => {
//         history.push("/preview");
//     };

//     const components = [
//         {
//             name: "BasicInfoTemplate1",
//             image: templatePreview1,
//         },
//         {
//             name: "BasicInfoTemplate2",
//             image: templatePreview2,
//         },
//         // Add more components with their respective images
//     ];

//     const handleComponentSelect = (component) => {
//         setSelectedComponent(component);
//     };

//     return (
//         <div className="all-components">
//             {components.map((component) => (
//                 <div
//                     key={component.name}
//                     className={`component-preview ${
//                         selectedComponent === component.name ? "selected" : ""
//                     }`}
//                     onClick={() => handleComponentSelect(component.name)}
//                 >
//                     <img src={component.image} alt={component.name} />
//                 </div>
//             ))}

//             {selectedComponent && (
//                 <div className="selected-component">
//                     {selectedComponent === "BasicInfoTemplate1" && (
//                         <BasicInfoTemplate1 />
//                     )}
//                     {selectedComponent === "BasicInfoTemplate2" && (
//                         <BasicInfoTemplate2 />
//                     )}
//                     {/* Render more components based on the selectedComponent value */}
//                 </div>
//             )}

//             <button className="save-btn" onClick={togglePreviewMode}>
//                 Toggle Preview Mode
//             </button>
//         </div>
//     );
// };

// export default MainContent;
