import React, { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useReactToPrint } from "react-to-print";
import PreviewTemplate1 from "./PreviewTemplate1";

import { auth } from "../../firebase";

// import { Packer, Document } from "docxtemplater";
import { Docxtemplater } from "docxtemplater";

import { convertToWord } from "../ilovepdf";
import { isMobile } from "react-device-detect";

// import axios from "axios";

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

    const userName = auth.currentUser.email;
    // console.log(userName);
    const resume_name = userName.split("@")[0];
    // console.log(resume_name);

    const history = useHistory();

    const componentRef = useRef();

    // const handlePrintDoc = () => {
    //     // const doc = new Document();
    //     const template = componentRef.current.innerHTML;
    //     const doc = new Docxtemplater();

    //     // Load the template into the Word document
    //     doc.loadZip(template);

    //     // Create a blob from the document and save it as a Word file
    //     const blob = doc.toBlob();
    //     saveAs(blob, "resume.docx");
    // };

    const handlePrintDoc1 = async () => {
        // const pdfUrl = "C:Users/mishr/Downloads";
        const pdfUrl =
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

        // const corsProxyUrl = `https://crossorigin.me/${pdfUrl}`;
        // const docxUrl = await convertToWord(pdfUrl); // Convert PDF to Word using ilovepdf API

        try {
            // const response = await axios.get(corsProxyUrl);
            const docxUrl = await convertToWord(pdfUrl); // Convert PDF to Word using ilovepdf API

            // Trigger download of the converted Word document
            const link = document.createElement("a");
            link.href = docxUrl;
            link.download = "resume.docx";
            // link.download = `${userName}`
            link.click();
        } catch (err) {
            console.log("Error converting PDF to Word:", err);
        }
    };

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
                style={{ paddingBottom: "10px", width: "100%" }}
            >
                <div className="download-prev-btn-container">
                    {/* <button className="save-btn" onClick={handlePrintDoc1}>
                        Download as Word
                    </button> */}

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
