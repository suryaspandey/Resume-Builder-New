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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import TemplateSelection from "./TemplateSelection";

import { Select, Popover, Button, Collapse } from "antd";
// import BasicInfoTemplate3 from "./Template3/BasicInfoTemplate3";

const { Option } = Select;
const { Panel } = Collapse;

// import SideBar from "./SideBar";

const MainContent = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    // ----------
    tempfontSize,
    tempfontStyle,
    // selectedTemplate,
}) => {
    let history = useHistory();

    const { templateName } = useParams();

    const togglePreviewMode = () => {
        history.push("/preview");
        // setIsPreviewMode((prevState) => !prevState);
    };

    const [selectedImage, setSelectedImage] = useState();

    const [showProfilePhoto, setShowProfilePhoto] = useState(true);

    const handleShowProfilePhotoChange = (value) => {
        setShowProfilePhoto(value);
    };

    return (
        <div className="all-components">
            <>
                {templateName === "template2" && (
                    <>
                        {/* <SideBar /> */}
                        <BasicInfoTemplate2
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            showProfilePhoto={showProfilePhoto}
                            onShowProfilePhotoChange={
                                handleShowProfilePhotoChange
                            }
                            // ---------
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                    </>
                )}
                {templateName === "template1" && (
                    <>
                        {/* <SideBar /> */}
                        <BasicInfoTemplate1
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            showProfilePhoto={showProfilePhoto}
                            onShowProfilePhotoChange={
                                handleShowProfilePhotoChange
                            }
                            // --------------
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                    </>
                )}
                {/* {templateName === "template3" && (
                    <>
                    
                        <BasicInfoTemplate3
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            showProfilePhoto={showProfilePhoto}
                            onShowProfilePhotoChange={
                                handleShowProfilePhotoChange
                            }
                            // ---------
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                    </>
                )} */}
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
