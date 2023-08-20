import React from "react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import "./BasicInfotemplate1.css";

export default function PreviewEducationDetailsTemplate1({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) {
    const savedEducations = JSON.parse(localStorage.getItem("educations"));
    return (
        <>
            <section
                // className=" resume_item resume_work "
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
                        Education Details
                    </h1>
                </div>

                <div className="sectionContent">
                    {savedEducations.map((education, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    className="expTitle"
                                    style={{
                                        minHeight: "20px",
                                        resize: "none",
                                        overflow: "hidden",
                                        color: backgroundColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        fontWeight: 600,
                                    }}
                                >
                                    {education.courseName}
                                </div>
                                <div className="dates-location-container">
                                    <div className="school-clg-name-container">
                                        <FaUniversity
                                            style={{ color: themeColor }}
                                        />
                                        <div
                                            className="expCompanyName"
                                            style={{
                                                color: subheadingColor,
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {education.schoolName}
                                        </div>
                                    </div>

                                    <div className="dates-location-container">
                                        <div className="dates-container">
                                            <FaCalendarAlt
                                                style={{ color: themeColor }}
                                            />

                                            <span
                                                className="date-width"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {education.startYear}
                                            </span>
                                            <span> - </span>
                                            <span
                                                className="date-width"
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {education.endYear}
                                            </span>
                                        </div>
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
