import React from "react";

export default function PreviewSkillsDetailsTemplate1({
    themeColor,
    backgroundColor,
    textColor,
    tempfontSize,
    tempfontStyle,
}) {
    const savedSkills =
        JSON.parse(localStorage.getItem("selectedSkills")) || [];
    return (
        <>
            <section
                style={{
                    borderTop: `2px solid ${backgroundColor}`,
                }}
            >
                <div class="sectionTitle">
                    <h1
                        style={{
                            fontFamily: tempfontStyle,
                            color: backgroundColor,
                        }}
                    >
                        Key Skills
                    </h1>
                </div>

                <div className="sectionContent">
                    <div className="selected-skills">
                        {/* <div className="keySkills"> */}
                        {savedSkills.map((skill) => (
                            <span
                                key={skill}
                                className="skill_name skill-box"
                                style={{
                                    fontFamily: tempfontStyle,
                                    fontSize: tempfontSize,
                                    padding: "5px",
                                    margin: "3px",
                                    borderBottom: `2px solid ${backgroundColor}`,
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div class="clear"></div>
            </section>
        </>
    );
}
