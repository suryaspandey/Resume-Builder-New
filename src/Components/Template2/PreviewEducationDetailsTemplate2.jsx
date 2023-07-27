import React from "react";
import CertificationsTemplate2 from "./CertificationsTemplate2";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import PreviewCertificationsTemplate2 from "./PreviewCertificationsTemplate2";

export default function PreviewEducationDetailsTemplate2({
    themeColor,
    textColor,
    tempfontSize,
    tempfontStyle,
    subheadingColor,
    backgroundColor,
}) {
    const savedEducation = JSON.parse(localStorage.getItem("educations")) || [];
    return (
        <>
            <div
                className=" resume_item resume_work "
                style={{
                    // backgroundColor: backgroundColor,
                    borderBottom: `2px solid ${themeColor}`,
                    width: "90%",
                }}
            >
                <div className="title">
                    <p className="bold" style={{ fontFamily: tempfontStyle }}>
                        EDUCATION DETAILS
                    </p>
                </div>
                <ul>
                    {savedEducation.map((education, index) => (
                        <li>
                            <div key={index}>
                                <div
                                    className="temp2name expTitle"
                                    placeholder="Course Name"
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    {education.courseName}
                                </div>

                                <div className="school-clg-name-container-preview">
                                    <FaUniversity
                                        style={{ color: themeColor }}
                                    />
                                    <div
                                        className="expCompanyName"
                                        type="text"
                                        placeholder="School/University Name"
                                        style={{
                                            // color: subheadingColor,
                                            color: "white",
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
                        </li>
                    ))}
                </ul>
            </div>

            <PreviewCertificationsTemplate2
                themeColor={themeColor}
                backgroundColor={backgroundColor}
                textColor={textColor}
                // subheadingColor={subheadingColor}
                tempfontSize={tempfontSize}
                tempfontStyle={tempfontStyle}
            />
        </>
    );
}
