import React, { useState, useEffect } from "react";
import { skillsData } from "../skillsdata";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

const SkillsDetailsTemplate3 = ({
    themeColor,
    backgroundColor,
    textColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showDropdown, setShowDropdown] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSaved, setIsSaved] = useState(false);

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
        // setShowButtons(true);
        setIsEditing(true); // Set isEditing to true when a skill is removed
        setIsSaved(false); // Set isSaved to false when a skill is removed
    };

    const handleSave = () => {
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
    };

    return (
        <>
            <section
                style={{
                    // borderTop: `2px solid ${backgroundColor}`,
                    margin: "0 20px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div>
                    <h1
                        style={{
                            fontFamily: tempfontStyle,
                            color: "white",
                            backgroundColor: backgroundColor,
                            fontStyle: "italic",
                            fontSize: "1.2em",
                        }}
                    >
                        Key Skills
                    </h1>
                </div>

                {/* <div className="sectionContent"> */}
                <div>
                    {/* <div className="selected-skills"> */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}
                    >
                        {/* <div className="keySkills"> */}
                        {selectedSkills.map((skill) => (
                            <>
                                {/* <BsCheck2Circle
                                    style={{
                                        color: themeColor,
                                    }}
                                /> */}
                                <span
                                    key={skill}
                                    className="skill_name skill-box"
                                    onClick={() => handleSkillRemove(skill)}
                                    onFocus={() => setIsEditing(true)}
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        padding: "5px",
                                        margin: "3px",
                                        borderBottom: `2px solid ${backgroundColor}`,
                                    }}
                                >
                                    {/* <BsCheck2Circle
                                        style={{
                                            color: backgroundColor,
                                        }}
                                    /> */}
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
                                </span>
                            </>
                        ))}
                    </div>
                    <div className="error-message">
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>

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
                </div>
                <div class="clear"></div>
                {/* <div
                    className="top-color"
                    style={{ background: backgroundColor, height: "3px" }}
                >
                    &nbsp;&nbsp;
                </div> */}
            </section>
        </>
    );
};

export default SkillsDetailsTemplate3;
