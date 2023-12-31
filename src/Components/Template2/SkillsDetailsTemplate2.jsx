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
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    // const [showButtons, setShowButtons] = useState(true);

    // Load skills from local storage on initial component mount
    useEffect(() => {
        const savedSkills = localStorage.getItem("selectedSkills");
        if (savedSkills && JSON.parse(savedSkills).length > 0) {
            setSelectedSkills(JSON.parse(savedSkills));
            setShowDropdown(false);
            // setShowButtons(showButtons);
        }
    }, []);

    // Update local storage whenever selectedSkills change
    useEffect(() => {
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
    }, [selectedSkills]);

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
        // setShowButtons(true);
    };

    const handleSkillRemove = (removedSkill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((skill) => skill !== removedSkill)
        );
        setIsEditing(true); // Set isEditing to true when a skill is removed
        setIsSaved(false); // Set isSaved to false when a skill is removed
    };

    const handleSave = () => {
        // localStorage.setItem(
        //     "selectedSkills",
        //     // JSON.stringify({ selectedSkills, showButtons: false })
        //     JSON.stringify({ selectedSkills })
        // );

        if (selectedSkills.length === 0) {
            setErrorMessage("Select at least one skill");
            setIsSaved(false);
            return;
        }
        setIsEditing(false);
        setShowDropdown(false);
        setErrorMessage("");
        setIsSaved(true);
    };

    const handleAddMore = () => {
        setShowDropdown(true);
        setIsEditing(true);
        // setShowButtons(true);
    };

    const handleSkillSelectin = (selectedSkill) => {
        // Set the index of the selected skill
        setSelectedSkillIndex(selectedSkills.indexOf(selectedSkill));
        // Activate edit mode
        setIsEditing(true);
    };

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
                        Key Skills
                    </p>
                </div>
                <ul>
                    {selectedSkills.map((skill) => (
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
                                    }}
                                    key={skill}
                                    className="skill-box"
                                    onClick={() => handleSkillRemove(skill)}
                                    onFocus={() => setIsEditing(true)}
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
                <div className="error-message">
                    {errorMessage && <p>{errorMessage}</p>}
                </div>

                {showDropdown && selectedSkills.length < 8 && (
                    <select
                        className="skill-select"
                        onChange={(e) => handleSkillSelect(e.target.value)}
                        style={{
                            fontFamily: tempfontStyle,
                            fontSize: tempfontSize,
                        }}
                    >
                        <option value="">Select</option>
                        {skillsData.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                )}

                {(selectedSkills.length === 0 || isEditing) && (
                    <>
                        <button className="add-btn" onClick={handleAddMore}>
                            <AiOutlinePlusCircle size={20} />
                        </button>

                        <button className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    </>
                )}

                {/* {showDropdown && !isSaved && (
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
