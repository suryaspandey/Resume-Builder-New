import React, { useEffect, useState } from "react";
import EducationDetailsTemplate2 from "./EducationDetailsTemplate2";
import PreviewEducationDetailsTemplate2 from "./PreviewEducationDetailsTemplate2";

export default function PreviewSkillsTemplate2({
    themeColor,
    backgroundColor,
    textColor,
    tempfontSize,
    tempfontStyle,
    subheadingColor,
    // selectedSkills,
}) {
    // const [selectedSkills, setSelectedSkills] = useState([]);
    const savedSkills =
        JSON.parse(localStorage.getItem("selectedSkills")) || [];

    // useEffect(() => {
    //     const savedSkills = localStorage.getItem(selectedSkills);
    //     if (savedSkills && JSON.parse(savedSkills).length > 0) {
    //         setSelectedSkills(JSON.parse(savedSkills));
    //     }
    // }, []);

    return (
        <>
            <div
                className=" resume_item resume_skills"
                style={{
                    // backgroundColor: backgroundColor,
                    borderBottom: `2px solid ${themeColor}`,
                    width: "90%",
                    alignContent: "center",
                }}
            >
                <div className="title">
                    <p
                        className="bold"
                        style={{
                            fontFamily: tempfontStyle,
                        }}
                    >
                        Skills
                    </p>
                </div>
                <ul>
                    {savedSkills.map((skill) => (
                        <li key={skill}>
                            <div className="skill_name ">
                                <span
                                    style={{
                                        border: `2px solid ${themeColor}`,
                                        // backgroundColor: themeColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        padding: "5px",
                                        margin: "3px",
                                        borderRadius: "5px",
                                        // color: "white",
                                    }}
                                    key={skill}
                                    className="skill-box"
                                    // onClick={() => handleSkillRemove(skill)}
                                >
                                    {skill}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <PreviewEducationDetailsTemplate2
                themeColor={themeColor}
                // backgroundColor={backgroundColor}
                textColor={textColor}
                subheadingColor={subheadingColor}
                tempfontSize={tempfontSize}
                tempfontStyle={tempfontStyle}
            />
        </>
    );
}
