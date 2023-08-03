import React, { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useReactToPrint } from "react-to-print";
import PreviewTemplate1 from "./PreviewTemplate1";

export default function DownloadPreviewTemplate1({
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

    return (
        <div className="download-main-div">
            <div
                ref={componentRef}
                style={{
                    width: "100%",
                    margin: "auto",
                }}
            >
                <PreviewTemplate1
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
                <>
                    <button className="save-btn" onClick={handlePrint}>
                        Download Now
                    </button>
                </>
            </div>
        </div>
    );
}
