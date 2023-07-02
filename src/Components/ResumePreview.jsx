import React, { useState } from "react";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import BasicInfo from "./BasicInfo";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";

const ResumePreview = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    const togglePreviewMode = () => {
        setIsPreviewMode(!isPreviewMode);
    };

    return (
        <>
            <h2>PDF Preview</h2>
            {isPreviewMode ? (
                <PDFViewer width="1000" height="600">
                    <Document>
                        <Page size="A4">
                            <BasicInfo
                                themeColor={themeColor}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                            />
                            <ExperienceDetails
                                themeColor={themeColor}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                                subheadingColor={subheadingColor}
                            />
                            <EducationDetails
                                themeColor={themeColor}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                                subheadingColor={subheadingColor}
                            />
                        </Page>
                    </Document>
                </PDFViewer>
            ) : (
                <div>Click the button to toggle preview mode</div>
            )}
            <button onClick={togglePreviewMode}>Toggle Preview Mode</button>
        </>
    );
};

export default ResumePreview;
