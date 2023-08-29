import React, { useEffect, useRef, useState } from "react";
import PreviewTemplate2 from "./PreviewTemplate2";
import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

import { auth } from "../../firebase";

// import { isMobile } from "react-device-detect";

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
    // const { name, location, phone, email, linkedin } = formData;

    // const [showWordFile, setShowWordFile] = useState(false);

    // const toggleShowWordFile = () => {
    //     setShowWordFile((prevShowWordFile) => !prevShowWordFile);
    // };

    // const [isProfilePic, setIsProfilePic] = useState(false);

    const { currentUser } = auth;
    const history = useHistory();

    // const userName = auth.currentUser.email;

    const resume_name = currentUser?.email.split("@")[0];

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${resume_name}_MyResumeTemplate`,
        onAfterPrint: () => {
            history.goBack();
        },
    });

    useEffect(() => {
        if (!currentUser) {
            history.push("/login");
        }
    }, [currentUser, history]);

    // if (isMobile) {
    //     alert("Download from our desktop view");
    // } else {
    //     handlePrint();
    // }

    const handleDownload = () => {
        if (currentUser) {
            handlePrint();
        } else {
            history.push("/login");
        }
    };

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
                    <button className="save-btn" onClick={handleDownload}>
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
