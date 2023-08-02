import React, { useState, useEffect } from "react";
import ProfilePhoto from "../ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./BasicInfoTemplate1.css"; // Import the CSS file for styling

import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";
import TextArea from "antd/es/input/TextArea";
import HeaderComp from "../HeaderComp";
import PreviewTemplate1 from "./PreviewTemplate1";
import SummaryTemplate2 from "../Template2/SummaryTemplate2";
import PreviewExperienceTemplate1 from "./PreviewExperienceTemplate1";

const BasicInfoTemplate1 = ({
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
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [summaryError, setSummaryError] = useState("");

    const [profilePhoto, setProfilePhoto] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const [isUploaded, setIsUploaded] = useState(false); //
    const [showPhoto, setShowPhoto] = useState(false);
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showProfileCheckbox, setShowProfileCheckbox] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("basicInfo");
        if (storedData) {
            setFormData(JSON.parse(storedData));
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
        setShowProfileCheckbox(showProfilePhoto || isUploaded); // Show the checkbox if profile photo is already selected
    }, []);

    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setProfilePhoto(storedPhoto);
        }

        const storedShowPhoto = localStorage.getItem("showProfilePhoto");
        if (storedPhoto) {
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
        // setShowProfileCheckbox(true);
        setIsEditing(true);
    };

    const handlePhotoSelect = (photoUrl) => {
        if (photoUrl) {
            setProfilePhoto(photoUrl);
            setIsUploaded(true); // true when a photo is selected
            setShowProfileCheckbox(true);
        } else {
            setIsUploaded(false); // Set isUploaded to false when the photo is removed
            setShowProfileCheckbox(true);
        }
        // setShowProfileCheckbox(isEditing || isUploaded);
        localStorage.setItem("profilePhoto", photoUrl);
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
        setSummaryError("");

        if (formData.name.trim() === "") {
            setNameError("Name cannot be empty");
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
        if (formData.summary.trim() === "") {
            setSummaryError("Summary cannot be empty");
            isValid = false;
        }

        if (isValid) {
            // Save data to local storage or perform any desired action
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            setIsEditing(false);
        }
    };

    const handleToggleMode = () => {
        setIsPreviewMode((prevMode) => !prevMode);
    };

    const handleCheckboxChange = (e) => {
        const showPhoto = e.target.checked;
        setShowPhoto(showPhoto);
        onShowProfilePhotoChange(showPhoto);
        setShowProfileCheckbox(showPhoto);
    };

    const handleDownloadResume = () => {
        const pdfBlobPromise = pdf(
            <Document>
                <Page size="A4" wrap>
                    <PreviewTemplate1
                    // formData={formData}
                    // themeColor={themeColor}
                    // backgroundColor={backgroundColor}
                    // textColor={textColor}
                    // subheadingColor={subheadingColor}
                    // showProfilePhoto={showProfilePhoto}
                    // tempfontSize={tempfontSize}
                    // tempfontStyle={tempfontStyle}
                    />
                </Page>
            </Document>
        ).toBlob();
        pdfBlobPromise.then((blob) => {
            const url = URL.createObjectURL(blob);

            // Create a temporary anchor element and trigger the download
            const a = document.createElement("a");
            a.href = url;
            a.download = "resume.pdf";
            a.click();

            // Clean up the temporary URL
            URL.revokeObjectURL(url);
        });
    };
    const summaryTextareaClass = isTyping
        ? "summary-textarea active"
        : "summary-textarea";

    return (
        <>
            {isPreviewMode ? (
                <PreviewTemplate1
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
                <div className="top">
                    <div id="cv">
                        <form onSubmit={handleSubmit}>
                            <div
                                className="mainDetails"
                                style={{
                                    backgroundColor: backgroundColor,
                                }}
                            >
                                {isEditing ? (
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
                                ) : null}
                                {showProfilePhoto && (
                                    <div id="headshot">
                                        <ProfilePhoto
                                            onPhotoSelect={handlePhotoSelect}
                                            isUploaded={isUploaded} // Pass isUploaded as a prop to the ProfilePhoto component
                                        />
                                    </div>
                                )}

                                <div id="name" className="usr--name">
                                    <input
                                        className="user-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="Name"
                                        style={{
                                            textAlign: "center",
                                            textTransform: "uppercase",
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                </div>

                                <div id="contactDetails">
                                    <ul>
                                        <li>
                                            <span className="info-icon">
                                                <FaLocationArrow
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </span>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Location"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <span className="info-icon">
                                                <BsFillTelephoneFill
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </span>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Phone"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <span className="info-icon">
                                                <FaEnvelope
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                        // height: "38px",
                                                        // width: "25px",
                                                        // paddingLeft: "7px",
                                                    }}
                                                />
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="Email"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <span className="info-icon">
                                                <FaLinkedin
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                    }}
                                                />
                                            </span>
                                            <input
                                                type="text"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setIsEditing(true)
                                                }
                                                placeholder="LinkedIn"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </div>

                            <div id="mainArea">
                                <section
                                    style={{
                                        borderTop: `2px solid ${backgroundColor}`,
                                    }}
                                >
                                    <article>
                                        <div className="sectionTitle">
                                            <h1
                                                style={{
                                                    color: backgroundColor,
                                                    fontFamily: tempfontStyle,
                                                }}
                                            >
                                                Personal Profile
                                            </h1>
                                        </div>
                                        <div className="sectionContent">
                                            {/* <TextArea
                                                autoSize
                                                maxLength={300}
                                                style={{
                                                    backgroundColor:
                                                        "transparent",
                                                    border: "none",
                                                }}
                                                className=" summaryTextareaClass"
                                                name="summary"
                                                value={formData.summary}
                                                onChange={handleChange}
                                                placeholder="What's the one thing that makes you the best candidate for this job?"
                                            /> */}
                                            <SummaryTemplate2
                                                tempfontSize={tempfontSize}
                                                tempfontStyle={tempfontStyle}
                                            />
                                        </div>
                                    </article>
                                    <div className="clear"></div>
                                </section>
                            </div>
                            {isEditing ? (
                                <button className="save-btn" type="submit">
                                    Save
                                </button>
                            ) : null}

                            {nameError && <p>{nameError}</p>}
                            {phoneError && <p>{phoneError}</p>}
                            {emailError && <p>{emailError}</p>}
                            {linkedinError && <p>{linkedinError}</p>}
                            {summaryError && <p>{summaryError}</p>}
                        </form>
                        <br />
                        <ExperienceDetailsTemplate1
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                        <br />
                        <ProjectDetailsTemplate1
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                        <SkillsDetailsTemplate1
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                        />
                    </div>
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
                {isPreviewMode ? (
                    <>
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

export default BasicInfoTemplate1;
