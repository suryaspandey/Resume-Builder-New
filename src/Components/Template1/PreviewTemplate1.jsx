import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import ProfilePhoto from "../ProfilePhoto";
import PreviewSummaryTemplate2 from "../Template2/PreviewSummaryTemplate2";
import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";
import PreviewExperienceTemplate2 from "./PreviewExperienceTemplate1";
import PreviewExperienceTemplate1 from "./PreviewExperienceTemplate1";

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
            <h1>Preview Template 1 compoenent</h1>
            <div className="top">
                <div id="cv">
                    <form>
                        <div
                            className="mainDetails"
                            style={{
                                backgroundColor: backgroundColor,
                            }}
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
                                <div id="headshot">
                                    <ProfilePhoto
                                        onPhotoSelect={onPhotoSelect}
                                        // isUploaded={isUploaded} // Pass isUploaded as a prop to the ProfilePhoto component
                                    />
                                </div>
                            )}

                            <div id="name" className="usr--name">
                                <div
                                    className="user-name prev-tem1-usrname"
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
                                    <li className="preview1-contactDetails-li">
                                        <span className="info-icon">
                                            <FaLocationArrow
                                                style={{
                                                    color: themeColor,
                                                    marginRight: "10px",
                                                }}
                                            />
                                        </span>
                                        <div
                                            // type="text"
                                            // name="location"
                                            // value={formData.location}
                                            // onChange={handleChange}
                                            // onFocus={() => setIsEditing(true)}
                                            // placeholder="Location"
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {location}
                                        </div>
                                    </li>
                                    <li className="preview1-contactDetails-li">
                                        <span className="info-icon">
                                            <BsFillTelephoneFill
                                                style={{
                                                    color: themeColor,
                                                    marginRight: "10px",
                                                }}
                                            />
                                        </span>
                                        <div
                                            // type="text"
                                            // name="phone"
                                            // value={formData.phone}
                                            // onChange={handleChange}
                                            // onFocus={() => setIsEditing(true)}
                                            // placeholder="Phone"
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {phone}
                                        </div>
                                    </li>
                                    <li className="preview1-contactDetails-li">
                                        <span className="info-icon">
                                            <FaEnvelope
                                                style={{
                                                    color: themeColor,
                                                    marginRight: "10px",
                                                }}
                                            />
                                        </span>
                                        <div
                                            // type="email"
                                            // name="email"
                                            // value={formData.email}
                                            // onChange={handleChange}
                                            // onFocus={() => setIsEditing(true)}
                                            // placeholder="Email"
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
                                                style={{
                                                    color: themeColor,
                                                    marginRight: "10px",
                                                }}
                                            />
                                        </span>
                                        <div
                                            // type="text"
                                            // name="linkedin"
                                            // value={formData.linkedin}
                                            // onChange={handleChange}
                                            // onFocus={() => setIsEditing(true)}
                                            // placeholder="LinkedIn"
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
                            // style={{
                            //     backgroundColor: backgroundColor,
                            // }}
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
                    <br />
                    <PreviewExperienceTemplate1
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
                    />
                    <SkillsDetailsTemplate1
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                    />
                </div>
            </div>
        </>
    );
};

export default PreviewTemplate1;
