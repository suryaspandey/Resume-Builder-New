import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

export default function PreviewExperienceDetailsTemplate3({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) {
    const savedEduction = JSON.parse(localStorage.getItem("experiences"));

    return (
        <>
            <section
                style={{
                    // borderTop: `2px solid ${backgroundColor}`,
                    margin: "0 20px",
                }}
            >
                {/* <div className="sectionTitle"> */}
                <div>
                    <h1
                        style={{
                            color: "white",
                            fontFamily: tempfontStyle,
                            backgroundColor: backgroundColor,
                            fontStyle: "italic",
                            fontSize: "1.2em",
                        }}
                    >
                        Work Experience
                    </h1>
                </div>

                {/* <div className="sectionContent"> */}
                <div>
                    {savedEduction.map((experience, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    className="expTitle-date"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div
                                        className="expTitle"
                                        // type="text"
                                        // name="company"
                                        // value={experience.company}
                                        // onChange={(e) => handleChange(e, index)}
                                        // onFocus={() => setIsEditing(true)}
                                        // placeholder="Title"
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {experience.company}
                                    </div>

                                    <div className="dates-container">
                                        <FaCalendarAlt
                                            style={{ color: themeColor }}
                                        />

                                        <span
                                            // className="date-width"
                                            // name="startYear"
                                            // value={experience.startYear}
                                            // onChange={(e) =>
                                            //     handleChange(e, index)
                                            // }
                                            // onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {experience.startYear}
                                        </span>
                                        <span> - </span>

                                        <span
                                            className="date-width"
                                            // name="endYear"
                                            // value={experience.endYear}
                                            // onChange={(e) =>
                                            //     handleChange(e, index)
                                            // }
                                            // onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {experience.endYear}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className="school-clg-name-container preview1-exp-details"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <div className="pos-prew3">
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

                                    {/* <div className="dates-location-container"> */}
                                    <div className="location-container prev1-loc-contaainer">
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
                                    {/* </div> */}
                                </div>

                                {/* description */}
                                <div className="expDescription">
                                    <div
                                        // name="description"
                                        className="exper-textbox"
                                        // value={experience.description}
                                        // onChange={(e) => handleChange(e, index)}
                                        // onKeyDown={(e) =>
                                        //     handleKeyDown(e, index)
                                        // }
                                        // onFocus={() => setIsEditing(true)}
                                        // placeholder="Description"
                                        // rows={3}
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
