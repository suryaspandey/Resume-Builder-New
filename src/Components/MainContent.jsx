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

const MainContent = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    let history = useHistory();
    const togglePreviewMode = () => {
        history.push("/preview");
    };

    return (
        <div className="all-components">
            <>
                <BasicInfoTemplate2
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                />

                {/* ----------- */}
                {/* <div className="other-container">
                    <ExperienceDetails
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                    />
                    <div className="education-container">
                        <EducationDetails
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                        />
                    </div>
                    <div className="education-container">
                        <ProjectDetails
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                        />
                    </div>
                    {/* <div className="education-container">
                        <Skills
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                        />
                    </div> 
                </div> */}
                {/* ------------ */}
                <button className="save-btn" onClick={togglePreviewMode}>
                    Toggle Preview Mode
                </button>
            </>
        </div>
    );
};

export default MainContent;

/// ----------------------------- -------------------- --------------------

// import React, { useState } from "react";
// import BasicInfo from "./BasicInfo";
// import ExperienceDetails from "./ExperienceDetails";
// import EducationDetails from "./EducationDetails";
// import ProjectDetails from "./ProjectDetails";
// // import Skills from "./Skills";
// import { useHistory } from "react-router-dom";

// import { PDFDownloadLink } from "@react-pdf/renderer";
// import RenderPdfContentTemplate1 from "./RenderPdfContentTemplate1";

// import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
// import ExperienceDetailsTemplate1 from "./Template1/ExperienceDetailsTemplate1";

// const MainContent = () => {
//     let history = useHistory();
//     const togglePreviewMode = () => {
//         history.push("/preview");
//     };

//     const isPreviewMode = window.location.pathname === "/preview";

//     return (
//         <div>
//             {isPreviewMode ? (
//                 <PDFDownloadLink
//                     document={<RenderPdfContentTemplate1 />}
//                     fileName="resume.pdf"
//                 >
//                     {({ blob, url, loading, error }) =>
//                         loading ? (
//                             "Generating PDF..."
//                         ) : (
//                             <a href={url}>Download PDF</a>
//                         )
//                     }
//                 </PDFDownloadLink>
//             ) : (
//                 <>
//                     <RenderPdfContentTemplate1 />
//                     <button className="save-btn" onClick={togglePreviewMode}>
//                         Toggle Preview Mode
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default MainContent;
