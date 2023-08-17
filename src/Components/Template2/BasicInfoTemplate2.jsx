import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
    PDFViewer,
    Document,
    Page,
    PDFDownloadLink,
    pdf,
} from "@react-pdf/renderer";

import ProfilePhoto from "../ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./template2.css"; // Import the CSS file for styling
// import "./BasicInfotemplate1.css";

import SkillsDetailsTemplate2 from "./SkillsDetailsTemplate2";
import ExperienceDetailsTemplate2 from "./ExperienceDetailsTemplate2";
import PreviewTemplate2 from "./PreviewTemplate2";
// import TextArea from "antd/es/input/TextArea";

import { Input } from "antd";
import PdfPreviewTemplate2 from "./PdfPreviewTemplate2";
import TemplateSelection from "../TemplateSelection";
import DownloadPreviewTemplate2 from "./DownloadPreviewTemplate2";
const { TextArea } = Input;

const BasicInfoTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    showProfilePhoto,
    onShowProfilePhotoChange,
    tempfontSize,
    tempfontStyle,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone: "",
        email: "",
        linkedin: "",
        summary: "",
    });
    const [showPhoto, setShowPhoto] = useState(false);

    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [summaryError, setSummaryError] = useState("");

    const [isTyping, setIsTyping] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [isPreviewMode, setIsPreviewMode] = useState(false);

    const [pdfPreviewContainer, setPdfPreviewContainer] = useState(null);
    const [isDownloadClicked, setIsDownloadClicked] = useState(true);

    const history = useHistory();

    const handleToggleMode = () => {
        setIsPreviewMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        const storedData = localStorage.getItem("basicInfo");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setShowPhoto(storedPhoto);
        }
        const storedShowPhoto = localStorage.getItem("showProfilePhoto");
        if (storedShowPhoto) {
            // setShowPhoto(storedPhoto);
            setShowPhoto(JSON.parse(storedShowPhoto));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("showProfilePhoto", JSON.stringify(showPhoto));
    }, [showPhoto]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "summary") {
            const wordCount = value.trim().split(" ").length;
            // no of characters to 150 chars: if (value.length <= 150) {
            if (wordCount <= 60) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setIsTyping(true);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        setIsEditing(true);
    };

    const handlePhotoSelect = (photoUrl) => {
        // setProfilePhoto(photoUrl);
        localStorage.setItem("profilePhoto", photoUrl);
    };

    const handleCheckboxChange = (e) => {
        const showPhoto = e.target.checked;
        setShowPhoto(showPhoto);
        onShowProfilePhotoChange(showPhoto);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        let isValid = true;
        setNameError("");
        setLocationError("");
        setPhoneError("");
        setEmailError("");
        setLinkedinError("");
        // setSummaryError("");

        if (formData.name.trim() === "") {
            setNameError("Name cannot be empty");
            isValid = false;
        }

        if (formData.location.trim() === "") {
            setLocationError("Location cannot be empty");
            isValid = false;
        }

        if (formData.linkedin.trim() === "") {
            setLinkedinError("LinkedIn cannot be empty");
            isValid = false;
        }

        if (formData.phone.trim() === "") {
            setPhoneError("Phone number cannot be empty");
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            setPhoneError("Phone number should be 10 digits");
            isValid = false;
        }

        if (formData.email.trim() === "") {
            setEmailError("Email cannot be empty");
            isValid = false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                formData.email.trim()
            )
        ) {
            setEmailError("Invalid email format");
            isValid = false;
        }

        if (formData.linkedin.trim() !== "") {
            if (
                !/^https?:\/\/(?:www\.)?linkedin\.com\/\S+$/.test(
                    formData.linkedin.trim()
                )
            ) {
                setLinkedinError("Invalid LinkedIn URL");
                isValid = false;
            }
        }
        // if (formData.summary.trim() === "") {
        //     setSummaryError("Summary cannot be empty");
        //     isValid = false;
        // }

        if (isValid) {
            // Save data to local storage or perform any desired action
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            setIsEditing(false);
        }
    };

    const togglePreviewMode = () => {
        setIsPreviewMode((prevMode) => !prevMode);
    };

    const handlebackBtn = () => {
        history.push("/choose-template");
    };

    const handleDownloadResume = () => {
        {
            isDownloadClicked ? history.push("/download-template2") : null;
        }
        setIsDownloadClicked(true);
        // const pdfBlobPromise = pdf(
        //     <Document>
        //         <Page size="A4" wrap>
        //             <PreviewTemplate2
        //                 formData={formData}
        //                 themeColor={themeColor}
        //                 backgroundColor={backgroundColor}
        //                 textColor={textColor}
        //                 subheadingColor={subheadingColor}
        //                 showProfilePhoto={showProfilePhoto}
        //                 tempfontSize={tempfontSize}
        //                 tempfontStyle={tempfontStyle}
        //             />
        //         </Page>
        //     </Document>
        // ).toBlob();
        // pdfBlobPromise.then((blob) => {
        //     const url = URL.createObjectURL(blob);

        //     // Create a temporary anchor element and trigger the download
        //     const a = document.createElement("a");
        //     a.href = url;
        //     a.download = "resume.pdf";
        //     a.click();

        //     // Clean up the temporary URL
        //     URL.revokeObjectURL(url);
        // });
    };

    return (
        <>
            {isPreviewMode ? (
                <PreviewTemplate2
                    formData={formData}
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                    showProfilePhoto={showProfilePhoto}
                    onShowProfilePhotoChange={onShowProfilePhotoChange}
                    tempfontSize={tempfontSize}
                    tempfontStyle={tempfontStyle}
                    onPhotoSelect={handlePhotoSelect}
                />
            ) : (
                <div className="resume">
                    <form onSubmit={handleSubmit}>
                        <div
                            className="resume_left"
                            style={{
                                backgroundColor: backgroundColor,
                            }}
                        >
                            {isEditing ? (
                                <>
                                    <div className="profile_photo_container">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={showProfilePhoto}
                                                onChange={handleCheckboxChange}
                                            />
                                            Show Profile Photo
                                        </label>
                                    </div>
                                </>
                            ) : null}
                            {showProfilePhoto && (
                                <div className="resume_profile">
                                    <ProfilePhoto
                                        onPhotoSelect={handlePhotoSelect}
                                    />
                                </div>
                            )}

                            <div className="resume_content">
                                <div className="resume_item resume_info">
                                    <div className="title">
                                        <input
                                            className="bold basic-info"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setIsEditing(true)}
                                            placeholder="Name"
                                            style={{
                                                textTransform: "uppercase",
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        />
                                        {/* <input
                                            className="regular basic-info"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setIsEditing(true)}
                                            placeholder="Current Role"
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        /> */}
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon ">
                                                {/* <i
                                                    class="fas fa-map-signs"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                ></i> */}
                                                <FaLocationArrow
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </div>
                                            <div className="data">
                                                <input
                                                    className="basic-info"
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    onFocus={() =>
                                                        setIsEditing(true)
                                                    }
                                                    placeholder="Location"
                                                    style={{
                                                        // color: themeColor,
                                                        fontFamily:
                                                            tempfontStyle,
                                                        fontSize: tempfontSize,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                {/* <i
                                                    class="fas fa-mobile-alt"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                ></i> */}
                                                <BsFillTelephoneFill
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </div>
                                            <div className="data">
                                                <input
                                                    className="basic-info"
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() =>
                                                        setIsEditing(true)
                                                    }
                                                    placeholder="Phone"
                                                    style={{
                                                        // color: themeColor,
                                                        fontFamily:
                                                            tempfontStyle,
                                                        fontSize: tempfontSize,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                {/* <i
                                                    className="fas fa-envelope"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                ></i> */}
                                                <FaEnvelope
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </div>
                                            <div className="data">
                                                <input
                                                    className="basic-info"
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() =>
                                                        setIsEditing(true)
                                                    }
                                                    placeholder="Email"
                                                    style={{
                                                        // color: themeColor,
                                                        fontFamily:
                                                            tempfontStyle,
                                                        fontSize: tempfontSize,
                                                    }}
                                                />
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FaLinkedin
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </div>
                                            <div className="data">
                                                <TextArea
                                                    autoSize={{
                                                        minRows: 3,
                                                        maxRows: 5,
                                                    }}
                                                    style={{
                                                        border: "none",
                                                        backgroundColor:
                                                            "transparent",
                                                        fontFamily:
                                                            tempfontStyle,
                                                        fontSize: tempfontSize,
                                                        maxWidth: "126%",
                                                        maxHeight: "",
                                                    }}
                                                    className="basic-info"
                                                    type="text"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleChange}
                                                    onFocus={() =>
                                                        setIsEditing(true)
                                                    }
                                                    placeholder="LinkedIn"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {isEditing ? (
                                    <button className="save-btn" type="submit">
                                        Save
                                    </button>
                                ) : null}

                                {/* <br /> */}
                                {nameError && <p>{nameError}</p>}
                                {phoneError && <p>{phoneError}</p>}
                                {emailError && <p>{emailError}</p>}
                                {linkedinError && <p>{linkedinError}</p>}
                                {/* {summaryError && <p>{summaryError}</p>} */}

                                {isPreviewMode ? (
                                    <PreviewTemplate2
                                        formData={formData} // Pass the formData to PreviewTemplate2
                                        showProfilePhoto={showProfilePhoto}
                                        themeColor={themeColor}
                                        backgroundColor={backgroundColor}
                                        textColor={textColor}
                                        subheadingColor={subheadingColor}
                                        tempfontSize={tempfontSize}
                                        tempfontStyle={tempfontStyle}
                                        onShowProfilePhotoChange={
                                            onShowProfilePhotoChange
                                        }
                                        onPhotoSelect={handlePhotoSelect}
                                    />
                                ) : null}
                            </div>

                            <div
                                className="resume resume_item"
                                style={{
                                    borderBottom: `2px solid ${themeColor}`,
                                    width: "90%",
                                }}
                            ></div>

                            <SkillsDetailsTemplate2
                                themeColor={themeColor}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                                tempfontSize={tempfontSize}
                                tempfontStyle={tempfontStyle}
                            />
                            {/* </div> */}
                        </div>
                    </form>

                    <ExperienceDetailsTemplate2
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                </div>
            )}
            <div className="save-download-btns">
                <button
                    className="save-btn preview-btn"
                    onClick={handleToggleMode}
                >
                    {isPreviewMode
                        ? "Switch to Edit Mode"
                        : "Switch to Preview Mode"}
                </button>
                {!isPreviewMode && (
                    <button
                        className="template-back-btn save-btn"
                        onClick={handlebackBtn}
                    >
                        Go Back
                    </button>
                )}

                {isPreviewMode ? (
                    <>
                        {/* <PDFViewer width="1000" height="600">
                        <PdfPreviewTemplate2
                            formData={formData}
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            showProfilePhoto={showProfilePhoto}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                    </PDFViewer> */}

                        {/* <PDFDownloadLink
                        document={
                            <PdfPreviewTemplate2
                                formData={formData}
                                themeColor={themeColor}
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                                subheadingColor={subheadingColor}
                                showProfilePhoto={showProfilePhoto}
                                tempfontSize={tempfontSize}
                                tempfontStyle={tempfontStyle}
                            />
                        }
                        fileName="resume.pdf"
                    >
                        {({ loading }) =>
                            loading
                                ? "Loading document..."
                                : "Download Download Download PDF"
                        }
                    </PDFDownloadLink> */}

                        <button
                            className="save-btn download-btn"
                            onClick={handleDownloadResume}
                        >
                            Download PDF
                        </button>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default BasicInfoTemplate2;
