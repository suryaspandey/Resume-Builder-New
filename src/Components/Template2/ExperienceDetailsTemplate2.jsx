// updated working code below

// import React, { useState, useEffect } from "react";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         const storedData = localStorage.getItem("experiences");
//         if (storedData) {
//             const parsedData = JSON.parse(storedData);
//             if (Array.isArray(parsedData)) {
//                 setExperiences(parsedData);
//             } else {
//                 setExperiences([]);
//             }
//         } else {
//             setExperiences([]);
//         }
//     }, []);

//     const addExperience = () => {
//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             {
//                 company: "",
//                 position: "",
//                 startDate: "",
//                 endDate: "",
//                 description: "",
//                 errors: {},
//             },
//         ]);
//     };

//     const handleExperienceChange = (index, property, value) => {
//         setExperiences((prevExperiences) =>
//             prevExperiences.map((experience, experienceIndex) => {
//                 if (experienceIndex === index) {
//                     return { ...experience, [property]: value };
//                 }
//                 return experience;
//             })
//         );
//     };

//     const removeExperience = (index) => {
//         setExperiences((prevExperiences) =>
//             prevExperiences.filter(
//                 (experience, experienceIndex) => experienceIndex !== index
//             )
//         );
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let isValid = true;

//         const updatedExperiences = experiences.map((experience) => {
//             const { company, position, startDate, endDate, description } =
//                 experience;

//             // Perform validations
//             const errors = {};

//             if (company.trim() === "") {
//                 errors.company = "Company cannot be empty";
//                 isValid = false;
//             }

//             if (position.trim() === "") {
//                 errors.position = "Position cannot be empty";
//                 isValid = false;
//             }

//             if (startDate.trim() === "") {
//                 errors.startDate = "Start Date cannot be empty";
//                 isValid = false;
//             }

//             if (endDate.trim() === "") {
//                 errors.endDate = "End Date cannot be empty";
//                 isValid = false;
//             }

//             if (description.trim() === "") {
//                 errors.description = "Description cannot be empty";
//                 isValid = false;
//             }

//             return { ...experience, errors };
//         });

//         if (isValid) {
//             // Save data to local storage
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );

//             // Update the state
//             setExperiences(updatedExperiences);
//         } else {
//             // Update the state with the error messages
//             setExperiences(updatedExperiences);
//         }
//     };

//     return (
//         <>
//             <div className="experience">
//                 <h2 className="experience_heading">Experience</h2>
//                 <div className="experience_content">
//                     {experiences.map((experience, index) => (
//                         <div key={index} className="experience_item">
//                             <input
//                                 type="text"
//                                 placeholder="Company"
//                                 value={experience.company}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "company",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors && experience.errors.company && (
//                                 <p>{experience.errors.company}</p>
//                             )}
//                             <input
//                                 type="text"
//                                 placeholder="Position"
//                                 value={experience.position}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "position",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors &&
//                                 experience.errors.position && (
//                                     <p>{experience.errors.position}</p>
//                                 )}
//                             <input
//                                 type="text"
//                                 placeholder="Start Date"
//                                 value={experience.startDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "startDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors &&
//                                 experience.errors.startDate && (
//                                     <p>{experience.errors.startDate}</p>
//                                 )}
//                             <input
//                                 type="text"
//                                 placeholder="End Date"
//                                 value={experience.endDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "endDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors && experience.errors.endDate && (
//                                 <p>{experience.errors.endDate}</p>
//                             )}
//                             <textarea
//                                 placeholder="Description"
//                                 value={experience.description}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "description",
//                                         e.target.value
//                                     )
//                                 }
//                             ></textarea>
//                             {experience.errors &&
//                                 experience.errors.description && (
//                                     <p>{experience.errors.description}</p>
//                                 )}
//                             <button
//                                 className="remove-experience"
//                                 onClick={() => removeExperience(index)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="experience_buttons">
//                     <button className="add-experience" onClick={addExperience}>
//                         Add Experience
//                     </button>
//                     <button className="save-experience" onClick={handleSubmit}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

// updated working code above

import React, { useState, useEffect } from "react";
import {
    AiFillDelete,
    AiOutlinePlusCircle,
    AiOutlineLink,
} from "react-icons/ai";

import { Input } from "antd";
const { TextArea } = Input;

import ProjectDetailsTemplate2 from "./ProjectDetailTemplate2";
import SummaryTemplate2 from "./SummaryTemplate2";

const ExperienceDetailsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [experiences, setExperiences] = useState([]);
    // const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("experiences");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (Array.isArray(parsedData)) {
                setExperiences(parsedData);
            } else {
                setExperiences([]);
            }
        } else {
            setExperiences([]);
        }
    }, []);

    const addExperience = () => {
        setExperiences((prevExperiences) => [
            ...prevExperiences,
            {
                company: "",
                position: "",
                startYear: "",
                endYear: "",
                description: "",
                errors: {},
            },
        ]);
        // setShowButtons(false);
        setIsEditing(true);
    };

    const handleExperienceChange = (index, property, value) => {
        setExperiences((prevExperiences) =>
            prevExperiences.map((experience, experienceIndex) => {
                if (experienceIndex === index) {
                    if (
                        property === "description" &&
                        experience.description.trim() === ""
                    ) {
                        value = "• " + value.trimStart(); // Add bullet point at the beginning
                    }
                    return { ...experience, [property]: value };
                }
                return experience;
            })
        );
        // setShowButtons(true);
        setIsEditing(true);
    };

    const removeExperience = (index) => {
        setExperiences((prevExperiences) =>
            prevExperiences.filter(
                (experience, experienceIndex) => experienceIndex !== index
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        const updatedExperiences = experiences.map((experience) => {
            const { company, position, startYear, endYear, description } =
                experience;

            // Perform validations
            const errors = {};

            if (company.trim() === "") {
                errors.company = "Company cannot be empty";
                isValid = false;
            }

            if (position.trim() === "") {
                errors.position = "Position cannot be empty";
                isValid = false;
            }

            if (startYear.trim() === "") {
                errors.startYear = "Start Year cannot be empty";
                isValid = false;
            }

            if (endYear.trim() === "") {
                errors.endYear = "End Year cannot be empty";
                isValid = false;
            }

            if (startYear.trim() !== "" && endYear.trim() !== "") {
                if (parseInt(startYear) >= parseInt(endYear)) {
                    errors.startYear =
                        "Start Year should be less than End Year";
                    isValid = false;
                }
            }

            if (description.trim() === "") {
                errors.description = "Description cannot be empty";
                isValid = false;
            } else if (description.trim().split(" ").length > 50) {
                errors.description = "Description cannot exceed 50 words";
                isValid = false;
            }

            return { ...experience, errors };
        });

        if (isValid) {
            // Save data to local storage
            localStorage.setItem(
                "experiences",
                JSON.stringify(updatedExperiences)
            );

            // Update the state
            setExperiences(updatedExperiences);
            // setShowButtons(false);
            setIsEditing(false);
        } else {
            // Update the state with the error messages
            setExperiences(updatedExperiences);
        }
    };

    const handleDescriptionKeyPress = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleExperienceChange(
                index,
                "description",
                e.target.value + "\n• "
            );
        }
    };

    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 50; i--) {
            years.push(i);
        }
        return years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ));
    };

    const calculateTextareaRows = (content) => {
        const lines = content.split("\n");
        return lines.length;
    };

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

                    <SummaryTemplate2
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
                        {experiences.map((experience, index) => (
                            <li>
                                <div key={index}>
                                    <input
                                        className="titleColor expTitle"
                                        type="text"
                                        placeholder="Company"
                                        value={experience.company}
                                        onChange={(e) =>
                                            handleExperienceChange(
                                                index,
                                                "company",
                                                e.target.value
                                            )
                                        }
                                        onFocus={() => setIsEditing(true)}
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                    {experience.errors &&
                                        experience.errors.company && (
                                            <p>{experience.errors.company}</p>
                                        )}
                                    {isEditing && (
                                        <button
                                            className="remove-experience"
                                            onClick={() =>
                                                removeExperience(index)
                                            }
                                        >
                                            <AiFillDelete />
                                        </button>
                                    )}
                                    {/*  */}
                                    <div className="position-date">
                                        <input
                                            type="text"
                                            placeholder="Position"
                                            value={experience.position}
                                            onChange={(e) =>
                                                handleExperienceChange(
                                                    index,
                                                    "position",
                                                    e.target.value
                                                )
                                            }
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        />
                                        {experience.errors &&
                                            experience.errors.position && (
                                                <p>
                                                    {experience.errors.position}
                                                </p>
                                            )}
                                        <select
                                            value={experience.startYear}
                                            onChange={(e) =>
                                                handleExperienceChange(
                                                    index,
                                                    "startYear",
                                                    e.target.value
                                                )
                                            }
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            <option value="">Start Year</option>
                                            {getYearOptions()}
                                        </select>
                                        {experience.errors &&
                                            experience.errors.startYear && (
                                                <p>
                                                    {
                                                        experience.errors
                                                            .startYear
                                                    }
                                                </p>
                                            )}
                                        <select
                                            value={experience.endYear}
                                            onChange={(e) =>
                                                handleExperienceChange(
                                                    index,
                                                    "endYear",
                                                    e.target.value
                                                )
                                            }
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            <option value="">End Year</option>
                                            {getYearOptions()}
                                            <option value="Present">
                                                Present
                                            </option>
                                        </select>
                                        {experience.errors &&
                                            experience.errors.endYear && (
                                                <p>
                                                    {experience.errors.endYear}
                                                </p>
                                            )}
                                    </div>

                                    {/* </div> */}
                                    <TextArea
                                        autoSize
                                        // autoSize={{
                                        //     minRows: 5,
                                        //     maxRows: 5,
                                        // }}
                                        maxLength={250}
                                        placeholder="Description"
                                        value={experience.description}
                                        onChange={(e) =>
                                            handleExperienceChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        onFocus={() => setIsEditing(true)}
                                        onKeyDown={(e) =>
                                            handleDescriptionKeyPress(e, index)
                                        }
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                    {/*  */}

                                    {/* <textarea
                                        placeholder="Description"
                                        value={experience.description}
                                        onChange={(e) =>
                                            handleExperienceChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        onFocus={() => setIsEditing(true)}
                                        onKeyDown={(e) =>
                                            handleDescriptionKeyPress(e, index)
                                        }
                                        // rows={calculateTextareaRows(
                                        //     experience.description
                                        // )}
                                    ></textarea> */}

                                    {experience.errors &&
                                        experience.errors.description && (
                                            <p>
                                                {experience.errors.description}
                                            </p>
                                        )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="line"></div> */}
                </div>
                {isEditing ? (
                    <div className="experience_buttons">
                        <button className="add-btn" onClick={addExperience}>
                            <AiOutlinePlusCircle />
                        </button>
                        <button className="save-btn" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                ) : null}

                <ProjectDetailsTemplate2
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
};

export default ExperienceDetailsTemplate2;
