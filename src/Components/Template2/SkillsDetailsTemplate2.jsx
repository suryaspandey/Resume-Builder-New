import React, { useState, useEffect } from "react";
import { skillsData } from "../skillsdata";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import EducationDetailsTemplate2 from "./EducationDetailsTemplate2";

const SkillsDetailsTemplate2 = ({
    // themeColor = { themeColor },
    // backgroundColor = { backgroundColor },
    // textColor = { textColor },
    themeColor,
    backgroundColor,
    textColor,
}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showDropdown, setShowDropdown] = useState(true);

    // Load skills from local storage on initial component mount
    useEffect(() => {
        const savedSkills = localStorage.getItem("selectedSkills");
        if (savedSkills && JSON.parse(savedSkills).length > 0) {
            setSelectedSkills(JSON.parse(savedSkills));
            setShowDropdown(false);
        }
    }, []);

    // Update local storage whenever selectedSkills change
    useEffect(() => {
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
    }, [selectedSkills]);

    const handleSkillSelect = (selectedSkill) => {
        if (
            selectedSkills.length < 6 &&
            !selectedSkills.includes(selectedSkill)
        ) {
            setSelectedSkills((prevSelectedSkills) => [
                ...prevSelectedSkills,
                selectedSkill,
            ]);
        }
    };

    const handleSkillRemove = (removedSkill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((skill) => skill !== removedSkill)
        );
    };

    const handleSave = () => {
        setShowDropdown(false);
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
    };

    const handleAddMore = () => {
        setShowDropdown(true);
    };

    return (
        <>
            <div
                className="resume_item resume_skills"
                style={{
                    backgroundColor: backgroundColor, // Use the backgroundColor state variable
                }}
            >
                <div className="title">
                    <p className="bold">Skills</p>
                </div>
                <ul>
                    {selectedSkills.map((skill) => (
                        <li>
                            <div className="skill_name">
                                <span
                                    key={skill}
                                    className="skill-box"
                                    onClick={() => handleSkillRemove(skill)}
                                >
                                    {skill}
                                    <AiFillDelete
                                        size={16}
                                        style={{
                                            marginLeft: "5px",
                                            cursor: "pointer",
                                        }}
                                    />
                                    {/* <div className="skill_progress">
                                        <span style="width: 80%;"></span>
                                    </div>
                                    <div className="skill_per">80%</div> */}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                {showDropdown && selectedSkills.length < 6 && (
                    <select
                        className="skill-select"
                        onChange={(e) => handleSkillSelect(e.target.value)}
                    >
                        <option value="">Select a skill</option>
                        {skillsData.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                )}
                {showDropdown && (
                    <button className="save-btn" onClick={handleSave}>
                        Save
                    </button>
                )}
                {!showDropdown && (
                    <button className="add-btn" onClick={handleAddMore}>
                        <AiOutlinePlusCircle size={20} />
                    </button>
                )}
            </div>
            <EducationDetailsTemplate2
            // themeColor={themeColor}
            // backgroundColor={backgroundColor}
            // textColor={textColor}
            // subheadingColor={subheadingColor}
            />

            {/*  ------------- ------------ ------------- */}

            {/* -------------- nw     -------- */}
        </>
    );
};

export default SkillsDetailsTemplate2;
