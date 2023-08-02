import React from "react";
import {
    Page,
    Document,
    Font,
    Image,
    View,
    Text,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import PreviewTemplate2 from "./PreviewTemplate2";

const PdfPreviewTemplate2 = ({
    formData,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    showProfilePhoto,
    tempfontSize,
    tempfontStyle,
}) => {
    // Extract data from formData
    const { name, location, phone, email, linkedin } = formData;

    return (
        <PDFDownloadLink
            document={
                <Document>
                    <Page size="A4">
                        <PreviewTemplate2
                            formData={formData}
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            showProfilePhoto={showProfilePhoto}
                            // onShowProfilePhotoChange={onShowProfilePhotoChange}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                            // onPhotoSelect={handlePhotoSelect}
                        />
                    </Page>
                </Document>
            }
            fileName="resume.pdf"
        >
            {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
            }
        </PDFDownloadLink>
    );
};

export default PdfPreviewTemplate2;
