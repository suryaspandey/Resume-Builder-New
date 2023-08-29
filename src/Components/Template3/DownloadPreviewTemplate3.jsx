import React, { useRef, useState, useEffect } from "react";
import PreviewTemplate3 from "./PreviewTemplate3";
// import WordTemplate2 from "./WordTemplate2";

// import { saveAs } from "file-saver";

import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { auth } from "../../firebase";
// import { isMobile } from "react-device-detect";

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
    onPhotoSelect,
}) {
    const formData = JSON.parse(localStorage.getItem("basicInfo")) || [];
    // const { name, location, phone, email, linkedin } = formData;

    // const [showWordFile, setShowWordFile] = useState(false);

    const { currentUser } = auth;
    const history = useHistory();

    const componentRef = useRef();
    // let resume_name = "";

    const resume_name = currentUser?.email.split("@")[0];

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${resume_name}_MyResumeTemplate`,
        onAfterPrint: () => {
            history.goBack();
        },
    });

    useEffect(() => {
        if (!currentUser) {
            // Redirect to the login page and remember the current path for later redirection
            history.push(
                `/login?redirect=${encodeURIComponent(
                    history.location.pathname
                )}`
            );
        }
        //else {
        //     const userName = currentUser.email;
        //     const resume_name = userName.split("@")[0];

        //     const handlePrint = useReactToPrint({
        //         content: () => componentRef.current,
        //         documentTitle: `${resume_name}_MyResumeTemplate`,
        //         onAfterPrint: () => {
        //             history.goBack();
        //         },
        //     });
        // }
    }, [currentUser, history]);

    // const userName = currentUser.email;
    // const resume_name = userName.split("@")[0];

    // const handlePrint =
    //     // if (currentUser) {
    //     //     const userName = currentUser.email;
    //     // (resume_name = userName.split("@")[0]);

    //     // const printHandler =
    //     useReactToPrint({
    //         content: () => componentRef.current,
    //         documentTitle: `${resume_name}_MyResumeTemplate`,
    //         onAfterPrint: () => {
    //             history.goBack();
    //         },
    //     });
    // printHandler();
    // } else {
    //     history.push("/login");
    // }

    // useEffect(() => {
    //     if (!currentUser) {
    //         history.push("/login");
    //     }
    // }, [currentUser, history]);

    // const toggleShowWordFile = () => {
    //     setShowWordFile((prevShowWordFile) => !prevShowWordFile);
    // };

    // const docs = [
    //     {
    //         uri: "http://localhost:5173/download-template3",
    //         fileType: "docx",
    //         fineName: "demores.docx",
    //     },

    //     // { uri: require("./example-files/pdf.pdf") }, // Local File
    // ];

    // const userName = auth.currentUser.email;

    // const resume_name = userName.split("@")[0];

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
    console.log(profilePhoto);

    return (
        <div className="download-main-div">
            {console.log(onPhotoSelect)}
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
