import React, { useState, useEffect } from "react";
import { skillsData } from "../skillsdata";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";

const SkillsDetailsTemplate1 = ({
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
            <section
                style={{
                    backgroundColor: backgroundColor, // Use the backgroundColor state variable
                }}
            >
                <div class="sectionTitle">
                    <h1>Key Skills</h1>
                </div>

                <div className="sectionContent">
                    <div className="selected-skills">
                        {/* <div className="keySkills"> */}
                        {selectedSkills.map((skill) => (
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
                            </span>
                        ))}
                    </div>
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
                        <button className="save-button" onClick={handleSave}>
                            Save
                        </button>
                    )}
                    {!showDropdown && (
                        <button className="add-button" onClick={handleAddMore}>
                            <AiOutlinePlusCircle size={20} />
                        </button>
                    )}
                </div>
                <div class="clear"></div>
            </section>
            {/* -------------- nw     -------- */}
        </>
    );
};

export default SkillsDetailsTemplate1;
