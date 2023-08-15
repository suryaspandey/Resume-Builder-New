import React, { useRef, useState } from "react";
import PreviewTemplate3 from "./PreviewTemplate3";
// import WordTemplate2 from "./WordTemplate2";

// import { saveAs } from "file-saver";

import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import ProfilePhotoTemplate3 from "./ProfilePhotoTemplate3";

export default function DownloadPreviewTemplate3({
    // formData,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    showProfilePhoto,
    onShowProfilePhotoChange,
    tempfontSize,
    tempfontStyle,
    // onPhotoSelect,
}) {
    const formData = JSON.parse(localStorage.getItem("basicInfo")) || [];
    const { name, location, phone, email, linkedin } = formData;

    const [showWordFile, setShowWordFile] = useState(false);

    const toggleShowWordFile = () => {
        setShowWordFile((prevShowWordFile) => !prevShowWordFile);
    };

    const docs = [
        {
            uri: "http://localhost:5173/download-template3",
            fileType: "docx",
            fineName: "demores.docx",
        },

        // { uri: require("./example-files/pdf.pdf") }, // Local File
    ];

    const history = useHistory();

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Resume",
        onAfterPrint: () => {
            history.goBack();
        },
    });

    const handlePrevPage = () => {
        history.goBack();
    };

    const profilePhoto = localStorage.getItem("profilePhoto");
    // console.log(profilePhoto);

    return (
        <div className="download-main-div">
            {/* {console.log(onPhotoSelect)} */}
            <div
                ref={componentRef}
                style={{
                    width: "100%",
                    // height: window.innerHeight,
                    margin: "auto",
                }}
            >
                <PreviewTemplate3
                    formData={formData}
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    showProfilePhoto={showProfilePhoto}
                    tempfontSize={tempfontSize}
                    tempfontStyle={tempfontStyle}
                    // onPhotoSelect={onPhotoSelect}
                />
            </div>
            <div
                className="download-prev-btn"
                style={{ paddingBottom: "10px", width: "100%" }}
            >
                <div className="download-prev-btn-container">
                    <button className="save-btn" onClick={handlePrint}>
                        Download Now
                    </button>

                    <button className="save-btn" onClick={handlePrevPage}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
