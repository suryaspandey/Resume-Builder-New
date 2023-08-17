import React from "react";
import ProfilePhoto from "../ProfilePhoto";
import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import SkillsDetailsTemplate2 from "./SkillsDetailsTemplate2";
import ExperienceDetailsTemplate2 from "./ExperienceDetailsTemplate2";
import PreviewSkillsTemplate2 from "./PreviewSkillsTemplate2";
import PreviewExperienceDetailsTemplate2 from "./PreviewExperienceDetailsTemplate2";

import { BsFillTelephoneFill } from "react-icons/bs";

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
    onPhotoSelect,
}) => {
    const { name, location, phone, email, linkedin } = formData;
    return (
        <>
            <div className="resume" style={{ margin: "auto" }}>
                <form>
                    <div
                        className="resume_left"
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                    >
                        {showProfilePhoto && (
                            <div className="resume_profile">
                                <ProfilePhoto onPhotoSelect={onPhotoSelect} />
                            </div>
                        )}

                        <div className="resume_content">
                            <div className="resume_item resume_info">
                                <div className="title">
                                    <div
                                        className="bold basic-info"
                                        placeholder="Name"
                                        style={{
                                            textTransform: "uppercase",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {name}
                                    </div>
                                    {/* <div
                                        className="regular basic-info"
                                        placeholder="Current Role"
                                        style={{
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {name}
                                    </div> */}
                                </div>
                                <ul className="prevTemp2_basic_details">
                                    <li>
                                        <div className="icon ">
                                            {/* <i
                                                class="fas fa-map-signs"
                                                style={{ color: themeColor }}
                                            ></i> */}
                                            <FaLocationArrow
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
                                                }}
                                            />
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
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
                                            {/* <i
                                                class="fas fa-mobile-alt"
                                                style={{ color: themeColor }}
                                            ></i> */}
                                            <BsFillTelephoneFill
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
                                                }}
                                            />
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
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
                                            {/* <i
                                                className="fas fa-envelope"
                                                style={{ color: themeColor }}
                                            ></i> */}
                                            <FaEnvelope
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
                                                }}
                                            />
                                        </div>
                                        <div className="data">
                                            <div
                                                className="basic-info"
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
                                        <div
                                            className="icon"
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "42px 1fr",
                                                paddingBottom: "8px",
                                                alignContent: "space-evenly",
                                            }}
                                        >
                                            <FaLinkedin
                                                className="linkedin"
                                                style={{ color: themeColor }}
                                            />
                                        </div>
                                        <div className="data">
                                            <div
                                                style={{
                                                    border: "none",
                                                    backgroundColor:
                                                        "transparent",
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                                className="basic-info"
                                                // className="basic-info linkedIn-text"
                                            >
                                                {linkedin}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="resume resume_item"
                            style={{
                                borderBottom: `2px solid ${themeColor}`,
                                width: "90%",
                            }}
                        ></div>

                        <PreviewSkillsTemplate2
                            themeColor={themeColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            subheadingColor={subheadingColor}
                            tempfontSize={tempfontSize}
                            tempfontStyle={tempfontStyle}
                            // selectedSkills={selectedSkills}
                        />
                    </div>
                </form>

                <PreviewExperienceDetailsTemplate2
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
