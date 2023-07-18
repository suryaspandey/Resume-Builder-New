import React, { useState, useEffect } from "react";
import { skillsData } from "../skillsdata";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import EducationDetailsTemplate2 from "./EducationDetailsTemplate2";

const SkillsDetailsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showDropdown, setShowDropdown] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [showButtons, setShowButtons] = useState(true);

    // Load skills from local storage on initial component mount
    useEffect(() => {
        const savedSkills = localStorage.getItem("selectedSkills");
        if (savedSkills && JSON.parse(savedSkills).length > 0) {
            setSelectedSkills(JSON.parse(savedSkills));
            setShowDropdown(false);
            setShowButtons(showButtons);
        }
    }, []);

    // Update local storage whenever selectedSkills change
    useEffect(() => {
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
    }, [selectedSkills, showButtons]);

    const handleSkillSelect = (selectedSkill) => {
        if (
            selectedSkills.length < 8 &&
            !selectedSkills.includes(selectedSkill)
        ) {
            setSelectedSkills((prevSelectedSkills) => [
                ...prevSelectedSkills,
                selectedSkill,
            ]);
        }

        setIsEditing(true);
        setShowButtons(true);
    };

    const handleSkillRemove = (removedSkill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((skill) => skill !== removedSkill)
        );
    };

    const handleSave = () => {
        setShowDropdown(false);
        localStorage.setItem(
            "selectedSkills",
            JSON.stringify({ selectedSkills, showButtons: false })
        );
        setIsEditing(false);
        setShowButtons(false);
    };

    const handleAddMore = () => {
        setShowDropdown(true);
        setIsEditing(true);
        setShowButtons(true);
    };

    return (
        <>
            <div
                className=" resume_item resume_skills"
                style={{
                    backgroundColor: backgroundColor,
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
                    {selectedSkills.map((skill) => (
                        <li key={skill}>
                            <div className="skill_name ">
                                <span
                                    style={{
                                        border: `2px solid ${themeColor}`,
                                        backgroundColor: themeColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                    key={skill}
                                    className="skill-box"
                                    onClick={() => handleSkillRemove(skill)}
                                >
                                    {skill}
                                    {isEditing && (
                                        <AiFillDelete
                                            size={16}
                                            style={{
                                                marginLeft: "5px",
                                                cursor: "pointer",
                                            }}
                                        />
                                    )}

                                    {/* <div className="skill_progress">
                                        <span style="width: 80%;"></span>
                                    </div>
                                    <div className="skill_per">80%</div> */}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                {showDropdown && selectedSkills.length < 8 && (
                    <select
                        className="skill-select"
                        onChange={(e) => handleSkillSelect(e.target.value)}
                    >
                        <option value="">Select</option>
                        {skillsData.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                )}

                {/* {!showDropdown && ( */}
                {showButtons && (
                    <>
                        <button className="add-btn" onClick={handleAddMore}>
                            <AiOutlinePlusCircle size={20} />
                        </button>
                        {isEditing && (
                            <button className="save-btn" onClick={handleSave}>
                                Save
                            </button>
                        )}
                    </>
                )}

                {/* {showDropdown && (
                    <button className="save-btn" onClick={handleSave}>
                        Save
                    </button>
                )} */}
            </div>
            <EducationDetailsTemplate2
                themeColor={themeColor}
                // backgroundColor={backgroundColor}
                textColor={textColor}
                // subheadingColor={subheadingColor}
                tempfontSize={tempfontSize}
                tempfontStyle={tempfontStyle}
            />
        </>
    );
};

export default SkillsDetailsTemplate2;
