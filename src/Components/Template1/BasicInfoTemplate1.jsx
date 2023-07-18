import React, { useState, useEffect } from "react";
import ProfilePhoto from "../ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./BasicInfoTemplate1.css"; // Import the CSS file for styling

import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";
import TextArea from "antd/es/input/TextArea";

const BasicInfoTemplate1 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
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
    const [showButtons, setShowButtons] = useState(false); // new

    const [isUploaded, setIsUploaded] = useState(false); //

    useEffect(() => {
        const storedData = localStorage.getItem("basicInfo");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setProfilePhoto(storedPhoto);
        }
    }, []);

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
        setShowButtons(true); // new
    };

    const handlePhotoSelect = (photoUrl) => {
        if (photoUrl) {
            setProfilePhoto(photoUrl);
            setIsUploaded(true); // true when a photo is selected
        } else {
            setIsUploaded(false); // Set isUploaded to false when the photo is removed
        }
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
            setShowButtons(false); // new
        }
    };
    const summaryTextareaClass = isTyping
        ? "summary-textarea active"
        : "summary-textarea";

    return (
        <div className="top">
            <div id="cv">
                <form onSubmit={handleSubmit}>
                    <div
                        className="mainDetails"
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                    >
                        <div id="headshot">
                            <ProfilePhoto
                                onPhotoSelect={handlePhotoSelect}
                                isUploaded={isUploaded} // Pass isUploaded as a prop to the ProfilePhoto component
                            />
                        </div>

                        <div id="name" className="usr--name">
                            <input
                                className="user-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                style={{
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: textColor,
                                }}
                            />
                        </div>

                        <div id="contactDetails">
                            <ul>
                                <li>
                                    <span className="info-icon">
                                        <FaLocationArrow
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <BsFillTelephoneFill
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <FaEnvelope
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <FaLinkedin
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="LinkedIn"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div id="mainArea">
                        <section
                            style={{
                                backgroundColor: backgroundColor,
                            }}
                        >
                            <article>
                                <div className="sectionTitle">
                                    <h1>Personal Profile</h1>
                                </div>
                                <div className="sectionContent">
                                    <TextArea
                                        autoSize
                                        maxLength={300}
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                        }}
                                        className=" summaryTextareaClass"
                                        name="summary"
                                        value={formData.summary}
                                        onChange={handleChange}
                                        placeholder="What's the one thing that makes you the best candidate for this job?"
                                    />
                                </div>
                            </article>
                            <div className="clear"></div>
                        </section>
                    </div>
                    {showButtons && (
                        <button className="save-btn" type="submit">
                            Save
                        </button>
                    )}

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
                />
                <br />
                <ProjectDetailsTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                />
                <SkillsDetailsTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                />
            </div>
        </div>
    );
};

export default BasicInfoTemplate1;
