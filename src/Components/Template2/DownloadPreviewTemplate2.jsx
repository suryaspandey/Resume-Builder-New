import React, { useRef, useState } from "react";
import PreviewTemplate2 from "./PreviewTemplate2";

import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

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

    // const [isProfilePic, setIsProfilePic] = useState(false);

    const history = useHistory();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Resume",
        onAfterPrint: () => {
            history.goBack();
        },
    });

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
                style={{ paddingBottom: "10px" }}
            >
                <button className="save-btn" onClick={handlePrint}>
                    Download Now
                </button>
            </div>
        </div>
    );
}
