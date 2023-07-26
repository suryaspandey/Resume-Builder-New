import React from "react";
import ProfilePhoto from "../ProfilePhoto";
import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import SkillsDetailsTemplate2 from "./SkillsDetailsTemplate2";
import ExperienceDetailsTemplate2 from "./ExperienceDetailsTemplate2";

const PreviewTemplate2 = ({
    formData,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    showProfilePhoto,
    onShowProfilePhotoChange,
    tempfontSize,
    tempfontStyle,
}) => {
    const { name, location, phone, email, linkedin } = formData;
    return (
        <>
            <div className="resume">
                <form>
                    <div
                        className="resume_left"
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                    >
                        {showProfilePhoto && formData.profilePhoto && (
                            <div className="resume_profile">
                                <ProfilePhoto
                                    onPhotoSelect={handlePhotoSelect}
                                />
                            </div>
                        )}

                        <div className="resume_content">
                            <div className="resume_item resume_info">
                                <div className="title">
                                    <div
                                        className="bold basic-info"
                                        // type="text"
                                        // name="name"
                                        // value={formData.name}
                                        // onChange={handleChange}
                                        // onFocus={() => setIsEditing(true)}
                                        placeholder="Name"
                                        style={{
                                            textTransform: "uppercase",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {name}
                                    </div>
                                    <div
                                        className="regular basic-info"
                                        // type="text"
                                        // name="name"
                                        // value={formData.name}
                                        // onChange={handleChange}
                                        // onFocus={() => setIsEditing(true)}
                                        placeholder="Current Role"
                                        style={{
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {name}
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="icon ">
                                            <i
                                                class="fas fa-map-signs"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
                                                // type="text"
                                                // name="location"
                                                // value={formData.location}
                                                // onChange={handleChange}
                                                // onFocus={() =>
                                                //     setIsEditing(true)
                                                // }
                                                placeholder="Location"
                                                style={{
                                                    // color: themeColor,
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {location}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i
                                                class="fas fa-mobile-alt"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
                                                // type="text"
                                                // name="phone"
                                                // value={formData.phone}
                                                // onChange={handleChange}
                                                // onFocus={() =>
                                                //     setIsEditing(true)
                                                // }
                                                placeholder="Phone"
                                                style={{
                                                    // color: themeColor,
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {phone}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i
                                                className="fas fa-envelope"
                                                style={{ color: themeColor }}
                                            ></i>
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
                                                // type="email"
                                                // name="email"
                                                // value={formData.email}
                                                // onChange={handleChange}
                                                // onFocus={() =>
                                                //     setIsEditing(true)
                                                // }
                                                placeholder="Email"
                                                style={{
                                                    // color: themeColor,
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {email}
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <FaLinkedin
                                                className="linkedin"
                                                style={{ color: themeColor }}
                                            />
                                        </div>
                                        <div className="data">
                                            <div
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 5,
                                                }}
                                                style={{
                                                    border: "none",
                                                    backgroundColor:
                                                        "transparent",
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                                className="basic-info"
                                                // type="text"
                                                // name="linkedin"
                                                // value={formData.linkedin}
                                                // onChange={handleChange}
                                                // onFocus={() =>
                                                //     setIsEditing(true)
                                                // }
                                                placeholder="LinkedIn"
                                            >
                                                {linkedin}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* {isEditing ? (
                                <button className="save-btn" type="submit">
                                    Save
                                </button>
                            ) : null}

                          
                            {nameError && <p>{nameError}</p>}
                            {phoneError && <p>{phoneError}</p>}
                            {emailError && <p>{emailError}</p>}
                            {linkedinError && <p>{linkedinError}</p>}
                            {summaryError && <p>{summaryError}</p>} */}
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
        </>
    );
};

export default PreviewTemplate2;
