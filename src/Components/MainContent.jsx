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
import BasicInfoTemplate3 from "./Template3/BasicInfoTemplate3";

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
                {templateName === "template3" && (
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
                )}
            </>
        </div>
    );
};

export default MainContent;
