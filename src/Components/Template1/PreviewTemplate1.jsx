import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import ProfilePhoto from "../ProfilePhoto";
import PreviewSummaryTemplate2 from "../Template2/PreviewSummaryTemplate2";
import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";
import PreviewExperienceTemplate2 from "./PreviewExperienceTemplate1";
import PreviewExperienceTemplate1 from "./PreviewExperienceTemplate1";
import PreviewProjectDetailsTemplate1 from "./PreviewProjectDetailsTemplate1";
import PreviewSkillsDetailsTemplate1 from "./PreviewSkillsDetailsTemplate1";

const PreviewTemplate1 = ({
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
    const { name, location, phone, email, linkedin, summary } = formData;
    return (
        <>
            <div className="top">
                <div id="cv" style={{ margin: "0px auto" }}>
                    <form>
                        <div
                            className="mainDetails"
                            style={{
                                backgroundColor: backgroundColor,
                            }}
                        >
                            {showProfilePhoto && (
                                <div id="headshot">
                                    <ProfilePhoto
                                        onPhotoSelect={onPhotoSelect}
                                        // isUploaded={isUploaded} // Pass isUploaded as a prop to the ProfilePhoto component
                                    />
                                </div>
                            )}

                            <div id="name" className="usr--name">
                                <div
                                    // className="user-name prev-tem1-usrname"
                                    className="user-name"
                                    style={{
                                        textAlign: "center",
                                        textTransform: "uppercase",
                                        color: textColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        width: "100%",
                                    }}
                                >
                                    {name}
                                </div>
                            </div>

                            <div id="contactDetails">
                                <ul>
                                    {/* <li className="preview1-contactDetails-li"> */}
                                    <li>
                                        <span className="info-icon">
                                            <FaLocationArrow
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
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
                                            {location}
                                        </div>
                                    </li>
                                    {/* <li className="preview1-contactDetails-li"> */}
                                    <li>
                                        <span className="info-icon">
                                            <BsFillTelephoneFill
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
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
                                    {/* <li className="preview1-contactDetails-li"> */}
                                    <li>
                                        <span className="info-icon">
                                            <FaEnvelope
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
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
                                            {email}
                                        </div>
                                    </li>
                                    <li className="preview1-contactDetails-li">
                                        <span className="info-icon">
                                            <FaLinkedin
                                                className="linkedin"
                                                style={{
                                                    color: themeColor,
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
                                            {linkedin}
                                        </div>
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
                    <PreviewExperienceTemplate1
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                    {/* <br /> */}
                    <PreviewProjectDetailsTemplate1
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        openTitleUrl={true}
                    />
                    <PreviewSkillsDetailsTemplate1
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
};

export default PreviewTemplate1;
