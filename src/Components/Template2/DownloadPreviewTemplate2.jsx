import React, { useRef, useState } from "react";
import PreviewTemplate2 from "./PreviewTemplate2";
// import WordTemplate2 from "./WordTemplate2";

// import { saveAs } from "file-saver";

import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

import { auth } from "../../firebase";

import { isMobile } from "react-device-detect";

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DownloadPreviewTemplate2({
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

    // const handleDownloadWordFile = () => {
    //     setShowWordFile(true);
    // };

    // const saveWordFile = () => {
    //     const doc = new Document();

    //     doc.addSection({
    //         children: [
    //             <WordTemplate2
    //                 formData={formData}
    //                 themeColor={themeColor}
    //                 backgroundColor={backgroundColor}
    //                 textColor={textColor}
    //                 subheadingColor={subheadingColor}
    //                 tempfontSize={tempfontSize}
    //                 tempfontStyle={tempfontStyle}
    //             />,
    //         ],
    //     });

    //     // Generate the Word document as a Blob
    //     Packer.toBlob(doc).then((blob) => {
    //         // Save the Blob as a file
    //         saveAs(blob, "resume.docx");
    //     });
    // };

    // const [isProfilePic, setIsProfilePic] = useState(false);

    const docs = [
        {
            uri: "http://localhost:5173/download-template2",
            fileType: "docx",
            fineName: "demores.docx",
        },

        // { uri: require("./example-files/pdf.pdf") }, // Local File
    ];

    const history = useHistory();

    const userName = auth.currentUser.email;

    const resume_name = userName.split("@")[0];

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${resume_name}_MyResumeTemplate`,
        onAfterPrint: () => {
            history.goBack();
        },
    });

    if (isMobile) {
        alert("Download from our desktop view");
    } else {
        handlePrint();
    }

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
                <PreviewTemplate2
                    formData={formData}
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    // showProfilePhoto={!!profilePhoto}
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
