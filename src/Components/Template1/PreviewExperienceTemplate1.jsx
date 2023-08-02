import React from "react";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

export default function PreviewExperienceTemplate1({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) {
    const savedEduction = JSON.parse(localStorage.getItem("experiences")) || [];

    return (
        <>
            <section
                style={{
                    borderTop: `2px solid ${backgroundColor}`,
                }}
            >
                <div className="sectionTitle">
                    <h1
                        style={{
                            color: backgroundColor,
                            fontFamily: tempfontStyle,
                        }}
                    >
                        Work Experience
                    </h1>
                </div>

                <div className="sectionContent">
                    {savedEduction.map((experience, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    className="expTitle"
                                    style={{
                                        color: textColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        fontWeight: "600",
                                    }}
                                >
                                    {experience.company}
                                </div>

                                <div className="school-clg-name-container preview1-exp-details">
                                    <MdWorkHistory
                                        style={{ color: themeColor }}
                                    />
                                    <div
                                        className="expCompanyName"
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {experience.position}
                                    </div>
                                </div>
                                <div className=" prev1-dates-loc-container">
                                    <div className="dates-container">
                                        <FaCalendarAlt
                                            style={{ color: themeColor }}
                                        />

                                        <span
                                            className="date-width"
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                                width: "33px",
                                            }}
                                        >
                                            {experience.startYear}
                                        </span>
                                        <span> - </span>

                                        <span
                                            className="date-width"
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {experience.endYear}
                                        </span>
                                    </div>
                                    <div className="location-container prev1-loc-container">
                                        <TiLocation
                                            size={18}
                                            style={{ color: themeColor }}
                                        />

                                        <div
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {experience.location}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="exp-select-width"
                                    // name="experienceType"
                                    // value={experience.experienceType}
                                    // onChange={(e) => handleChange(e, index)}
                                    // onFocus={() => setIsEditing(true)}
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    {experience.experienceType}
                                </div>
                                {experience.errors.experienceType && (
                                    <p>{experience.errors.experienceType}</p>
                                )}
                                {/* description */}
                                <div className="expDescription">
                                    <div
                                        className="exper-textbox"
                                        style={{
                                            resize: "none",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {experience.description
                                            .split("\n•")
                                            .map((item, idx) => (
                                                <div key={idx}>
                                                    {idx === 0
                                                        ? `${item.trim()}`
                                                        : `• ${item.trim()}`}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
                <div className="clear"></div>
            </section>
        </>
    );
}
