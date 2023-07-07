// import React, { useState, useEffect } from "react";
// import { skillsData } from "../skillsdata";
// import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";

// const SkillsDetailsTemplate1 = ({
//     // themeColor = { themeColor },
//     // backgroundColor = { backgroundColor },
//     // textColor = { textColor },
//     themeColor,
//     backgroundColor,
//     textColor,
// }) => {
//     const [selectedSkills, setSelectedSkills] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(true);
//     const [showButtons, setShowButtons] = useState(false);

//     // Load skills from local storage on initial component mount
//     useEffect(() => {
//         const savedSkills = localStorage.getItem("selectedSkills");
//         if (savedSkills && JSON.parse(savedSkills).length > 0) {
//             setSelectedSkills(JSON.parse(savedSkills));
//             setShowDropdown(false);
//         }
//     }, []);

//     // Update local storage whenever selectedSkills change
//     useEffect(() => {
//         localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
//     }, [selectedSkills]);

//     const handleSkillSelect = (selectedSkill) => {
//         if (
//             selectedSkills.length < 6 &&
//             !selectedSkills.includes(selectedSkill)
//         ) {
//             setSelectedSkills((prevSelectedSkills) => [
//                 ...prevSelectedSkills,
//                 selectedSkill,
//             ]);
//         }
//         // setShowButtons(true);
//     };

//     const handleSkillRemove = (removedSkill) => {
//         setSelectedSkills((prevSelectedSkills) =>
//             prevSelectedSkills.filter((skill) => skill !== removedSkill)
//         );
//     };

//     const handleSave = () => {
//         setShowDropdown(false);
//         localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
//         setShowButtons(false);
//     };

//     const handleAddMore = () => {
//         setShowDropdown(true);
//         setShowButtons(false);
//     };

//     return (
//         <>
//             <section
//                 style={{
//                     backgroundColor: backgroundColor, // Use the backgroundColor state variable
//                 }}
//             >
//                 <div class="sectionTitle">
//                     <h1>Key Skills</h1>
//                 </div>

//                 <div className="sectionContent">
//                     <div className="selected-skills">
//                         {/* <div className="keySkills"> */}
//                         {selectedSkills.map((skill) => (
//                             <span
//                                 key={skill}
//                                 className="skill_name skill-box"
//                                 onClick={() => handleSkillRemove(skill)}
//                             >
//                                 {skill}
//                                 <AiFillDelete
//                                     size={16}
//                                     style={{
//                                         marginLeft: "5px",
//                                         cursor: "pointer",
//                                     }}
//                                 />
//                             </span>
//                         ))}
//                     </div>
//                     {showDropdown && selectedSkills.length < 6 && (
//                         <select
//                             className="skill-select"
//                             onChange={(e) => handleSkillSelect(e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             {skillsData.map((skill) => (
//                                 <option key={skill} value={skill}>
//                                     {skill}
//                                 </option>
//                             ))}
//                         </select>
//                     )}
//                     {showDropdown && (
//                         <button className="save-btn" onClick={handleSave}>
//                             Save
//                         </button>
//                     )}
//                     {!showDropdown && (
//                         <button className="add-btn" onClick={handleAddMore}>
//                             <AiOutlinePlusCircle size={20} />
//                         </button>
//                     )}
//                 </div>
//                 <div class="clear"></div>
//             </section>
//         </>
//     );
// };

// export default SkillsDetailsTemplate1;
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
    const [showButtons, setShowButtons] = useState(false);

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
        setShowButtons(true);
    };

    const handleSkillRemove = (removedSkill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.filter((skill) => skill !== removedSkill)
        );
        setShowButtons(true);
    };

    const handleSave = () => {
        setShowDropdown(false);
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
        setShowButtons(false);
    };

    const handleAddMore = () => {
        setShowDropdown(true);
        setShowButtons(true);
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
                                className="skill_name skill-box"
                                onClick={() => handleSkillRemove(skill)}
                            >
                                {skill}

                                {showButtons && (
                                    <AiFillDelete
                                        size={16}
                                        style={{
                                            marginLeft: "5px",
                                            cursor: "pointer",
                                        }}
                                    />
                                )}
                            </span>
                        ))}
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
                    {showButtons && showDropdown && (
                        <button className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    )}
                    {showButtons && !showDropdown && (
                        <button className="add-btn" onClick={handleAddMore}>
                            <AiOutlinePlusCircle size={20} />
                        </button>
                    )}
                </div>
                <div class="clear"></div>
            </section>
        </>
    );
};

export default SkillsDetailsTemplate1;
