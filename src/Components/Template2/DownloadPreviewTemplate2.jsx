import React, { useRef, useState } from "react";
import PreviewTemplate2 from "./PreviewTemplate2";
// import WordTemplate2 from "./WordTemplate2";

// import { saveAs } from "file-saver";

import { useReactToPrint } from "react-to-print";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

// import { renderToDocx, render, Document, Text } from "react-redocx";
// import { Document, Packer } from "docx";

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

                    {/* <div>
                        {showWordFile && (
                            <>
                                <Document>
                                    <WordTemplate2
                                        formData={formData}
                                        themeColor={themeColor}
                                        backgroundColor={backgroundColor}
                                        textColor={textColor}
                                        subheadingColor={subheadingColor}
                                        tempfontSize={tempfontSize}
                                        tempfontStyle={tempfontStyle}
                                    />
                                </Document>

                                <button onClick={saveWordFile}>
                                    Download Word File
                                </button>
                            </>
                        )}
                        <button onClick={handleDownloadWordFile}>
                            Generate Word File
                        </button>
                    </div> */}

                    {/* <button onClick={toggleShowWordFile}>WORDFILE</button> */}
                    {/* {showWordFile && (
                        <div>
                            <DocViewer
                                documents={docs}
                                pluginRenderers={DocViewerRenderers}
                                style={{ height: "1000" }}
                            ></DocViewer>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}
