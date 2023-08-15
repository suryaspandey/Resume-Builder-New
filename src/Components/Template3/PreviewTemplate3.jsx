import React from "react";
import ExperienceDetailsTemplate3 from "./EXperienceDetailsTemplate3";
import ProjectDetailsTemplate3 from "./ProjectDetailsTemplate3";
import SkillsDetailsTemplate3 from "./SkillsDetailsTemplate3";
import ProfilePhotoTemplate3 from "./ProfilePhotoTemplate3";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";
import PreviewSummaryTemplate2 from "../Template2/PreviewSummaryTemplate2";
import PreviewExperienceDetailsTemplate from "./PreviewExperienceDetailsTemplate3";
import PreviewExperienceDetailsTemplate2 from "../Template2/PreviewExperienceDetailsTemplate2";
import PreviewExperienceDetailsTemplate3 from "./PreviewExperienceDetailsTemplate3";
import PreviewProjectDetailsTemplate3 from "./PreviewProjectDetailsTemplate3";

export default function PreviewTemplate3({
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
}) {
    const { name, location, phone, email, linkedin, summary } = formData;

    return (
        <>
            <div className="top">
                <div id="cv">
                    <form style={{ padding: "15px" }}>
                        <div
                            className="top-color"
                            style={{ background: backgroundColor }}
                        >
                            &nbsp;&nbsp;
                        </div>
                        <div
                            className="mainDetails"
                            // style={{
                            //     backgroundColor: backgroundColor,
                            // }}
                        >
                            {/* {isEditing ? (
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
                                    ) : null} */}
                            {showProfilePhoto && (
                                <>
                                    <div id="headshot">
                                        <ProfilePhotoTemplate3
                                            background={backgroundColor}
                                            // onPhotoSelect={handlePhotoSelect}
                                            onPhotoSelect={onPhotoSelect}
                                            // isUploaded={isUploaded} // Pass isUploaded as a prop to the ProfilePhoto component
                                        />
                                    </div>
                                    {console.log(showProfilePhoto)}
                                </>
                            )}

                            <div
                                id="name"
                                // className="usr--name"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <div
                                    // className="user-name"

                                    style={{
                                        textAlign: "center",
                                        textTransform: "uppercase",
                                        color: textColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: "25px",
                                        // fontSize: tempfontSize,
                                        //
                                        width: "100%",
                                        // marginBottom: "1px",
                                    }}
                                >
                                    {name}
                                </div>
                                <div id="contactDetails">
                                    <ul style={{ display: "flex" }}>
                                        <li>
                                            <span className="info-icon">
                                                <MdOutlineAlternateEmail
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                        // marginBottom:
                                                        //     "-1px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                {/* <FaEnvelope
                                                            className="linkedin"
                                                            style={{
                                                                color: themeColor,
                                                                // marginBottom:
                                                                //     "-1px",
                                                                marginRight: "10px",
                                                            }}
                                                        /> */}
                                            </span>
                                            <div
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {email}
                                            </div>
                                        </li>

                                        <li>
                                            <span className="info-icon">
                                                <BsFillPinMapFill
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                        marginBottom: "-1px",
                                                    }}
                                                />
                                                {/* <FaLocationArrow
                                                            className="linkedin"
                                                            style={{
                                                                color: themeColor,
                                                                marginBottom:
                                                                    "-1px",
                                                            }}
                                                        /> */}
                                            </span>
                                            <div
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {location}
                                            </div>
                                        </li>
                                        <li>
                                            <span className="info-icon">
                                                <BsFillTelephoneFill
                                                    className="linkedin"
                                                    style={{
                                                        color: themeColor,
                                                        // marginBottom:
                                                        //     "-1px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            </span>
                                            <div
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {phone}
                                            </div>
                                        </li>
                                        {/* <li>
                                                    <span className="info-icon">
                                                        <FaLinkedin
                                                            className="linkedin"
                                                            style={{
                                                                color: themeColor,
                                                                // marginBottom:
                                                                //     "-1px",
                                                                // marginRight: "10px",
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
                                                            fontFamily:
                                                                tempfontStyle,
                                                            fontSize: tempfontSize,
                                                            // width: "132%",
                                                        }}
                                                    />
                                                </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                        <div
                            id="mainArea"
                            // style={{ padding: "0px 15px !important" }}
                        >
                            <section>
                                <article>
                                    {/* <div className="sectionTitle"> */}
                                    <div>
                                        <h1
                                            style={{
                                                color: "white",
                                                fontFamily: tempfontStyle,
                                                backgroundColor:
                                                    backgroundColor,
                                                fontStyle: "italic",
                                                fontSize: "1.2em",
                                                margin: "0 8px",
                                            }}
                                        >
                                            Personal Profile
                                        </h1>
                                    </div>
                                    <div
                                        // className="sectionContent"
                                        style={{
                                            display: "flex",
                                            margin: "0 20px",
                                            width: "750px",
                                        }}
                                    >
                                        <PreviewSummaryTemplate2
                                            tempfontSize={tempfontSize}
                                            tempfontStyle={tempfontStyle}
                                        />
                                    </div>
                                </article>
                                <div className="clear"></div>
                            </section>
                        </div>
                    </form>
                    {/* <br /> */}
                    <PreviewExperienceDetailsTemplate3
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                    {/* <br /> */}
                    <PreviewProjectDetailsTemplate3
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                    <SkillsDetailsTemplate3
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                </div>
            </div>
        </>
    );
}
