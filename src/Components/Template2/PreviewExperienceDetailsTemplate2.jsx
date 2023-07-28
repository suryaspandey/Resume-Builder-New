import React from "react";
import PreviewSummaryTemplate2 from "./PreviewSummaryTemplate2";
import ProjectDetailsTemplate2 from "./ProjectDetailTemplate2";
import PreviewProjectDetails from "./PreviewProjectDetailsTemplate2";
import PreviewProjectDetailsTemplate2 from "./PreviewProjectDetailsTemplate2";
import { MdWork, MdWorkHistory } from "react-icons/md";

export default function PreviewExperienceDetailsTemplate2({
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
            <div
                className="resume_right"
                style={{
                    themeColor: themeColor, // Use the backgroundColor state variable
                }}
            >
                <div
                    className="resume_item resume_about"
                    style={{
                        borderBottom: `2px solid ${backgroundColor}`,
                    }}
                >
                    <div className="title">
                        <p
                            style={{
                                color: backgroundColor,
                                fontFamily: tempfontStyle,
                            }}
                            className="bold"
                        >
                            PROFILE
                        </p>
                    </div>

                    <PreviewSummaryTemplate2
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                </div>

                <div
                    className="resume_item resume_work"
                    style={{
                        borderBottom: `2px solid ${backgroundColor}`,
                    }}
                >
                    <div className="title">
                        <p
                            style={{
                                color: backgroundColor,
                                fontFamily: tempfontStyle,
                            }}
                            className="bold"
                        >
                            WORK EXPERIENCE
                        </p>
                    </div>
                    <ul>
                        {savedEduction.map((experience, index) => (
                            <li>
                                <div key={index}>
                                    <div
                                        className="titleColor expTitle"
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {experience.company}
                                    </div>

                                    <div className="position-date">
                                        <div className="position_icon">
                                            <MdWorkHistory
                                                style={{ color: themeColor }}
                                            />
                                            <div
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                }}
                                            >
                                                {experience.position}
                                            </div>
                                        </div>

                                        <div className="exp_dates">
                                            <span
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                    // paddingLeft: "200px",
                                                }}
                                            >
                                                {experience.startYear}
                                            </span>
                                            <span> - </span>
                                            <span
                                                style={{
                                                    fontFamily: tempfontStyle,
                                                    fontSize: tempfontSize,
                                                    // paddingLeft: "30px",
                                                }}
                                            >
                                                {experience.endYear}
                                            </span>
                                        </div>
                                    </div>

                                    {/* </div> */}
                                    <div
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent",
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
                                    {/*  */}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="line"></div> */}
                </div>

                <PreviewProjectDetailsTemplate2
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
}
