// import React, { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { FaCalendarAlt } from "react-icons/fa";
// import { TiLocation } from "react-icons/ti";
// import { MdWorkHistory } from "react-icons/md";

// const ExperienceDetails = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         const storedExperiences = localStorage.getItem("experiences");
//         if (storedExperiences) {
//             setExperiences(JSON.parse(storedExperiences));
//         } else {
//             setExperiences([
//                 {
//                     title: "",
//                     companyName: "",
//                     startYear: "",
//                     endYear: "",
//                     experienceType: "",
//                     location: "",
//                     description: "",
//                     errors: {
//                         title: "",
//                         companyName: "",
//                         startYear: "",
//                         endYear: "",
//                         experienceType: "",
//                         location: "",
//                         description: "",
//                     },
//                 },
//             ]);
//         }
//     }, []);

//     const handleAddExperience = () => {
//         const newExperience = {
//             title: "",
//             companyName: "",
//             startYear: "",
//             endYear: "",
//             experienceType: "",
//             location: "",
//             description: "",
//             errors: {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             },
//         };

//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             newExperience,
//         ]);
//     };

//     const handleDeleteExperience = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences.splice(index, 1);
//             return updatedExperiences;
//         });
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;

//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 [name]: value,
//                 errors: {
//                     ...updatedExperiences[index].errors,
//                     [name]: "",
//                 },
//             };
//             return updatedExperiences;
//         });
//     };

//     const handleSave = () => {
//         let isFormValid = true;
//         let prevEndYear = Number.MAX_VALUE;

//         const updatedExperiences = experiences.map((experience) => {
//             const {
//                 title,
//                 companyName,
//                 startYear,
//                 endYear,
//                 experienceType,
//                 location,
//                 description,
//             } = experience;
//             const errors = {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             };

//             if (title.trim() === "") {
//                 errors.title = "Please enter a title";
//                 isFormValid = false;
//             }
//             if (companyName.trim() === "") {
//                 errors.companyName = "Please enter a company name";
//                 isFormValid = false;
//             }
//             if (startYear.trim() === "") {
//                 errors.startYear = "Please enter a start year";
//                 isFormValid = false;
//             }
//             if (endYear.trim() === "") {
//                 errors.endYear = "Please enter an end year";
//                 isFormValid = false;
//             }
//             if (experienceType.trim() === "") {
//                 errors.experienceType = "Please enter an experience type";
//                 isFormValid = false;
//             }
//             if (location.trim() === "") {
//                 errors.location = "Please enter a location";
//                 isFormValid = false;
//             }
//             if (description.trim() === "") {
//                 errors.description = "Please enter a description";
//                 isFormValid = false;
//             }

//             if (startYear.trim() !== "" && endYear.trim() !== "") {
//                 const start = parseInt(startYear, 10);
//                 const end =
//                     endYear === "Present"
//                         ? new Date().getFullYear()
//                         : parseInt(endYear, 10);

//                 if (start > end) {
//                     errors.startYear =
//                         "Start year must be earlier than end year";
//                     errors.endYear = "End year must be later than start year";
//                     isFormValid = false;
//                 }

//                 if (end > prevEndYear) {
//                     errors.endYear =
//                         "End year should be in chronological order";
//                     isFormValid = false;
//                 }

//                 prevEndYear = end;
//             }

//             return { ...experience, errors };
//         });

//         setExperiences(updatedExperiences);

//         if (isFormValid) {
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );
//         }
//     };

//     const renderYears = () => {
//         const currentYear = new Date().getFullYear();
//         const years = [];
//         for (let year = 1980; year <= currentYear; year++) {
//             years.push(year);
//         }
//         return years;
//     };

//     const handleKeyDown = (e, index) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             handleNewLine(index);
//         } else {
//             const { name, value } = e.target;
//             const currentDescription = experiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n"
//                 : "";

//             const descriptionWithBulletPoints = updatedDescription + value;
//             const wordCount = descriptionWithBulletPoints.split(/\s+/).length;

//             if (wordCount > 100) {
//                 if (e.key !== "Backspace" && e.key !== "Delete") {
//                     e.preventDefault();
//                 }
//                 return;
//             }

//             setExperiences((prevExperiences) => {
//                 const updatedExperiences = [...prevExperiences];
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     [name]: value,
//                 };
//                 return updatedExperiences;
//             });

//             if (value === "") {
//                 handleNewBulletPoint(index);
//             }
//         }
//     };

//     const handleNewBulletPoint = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n• "
//                 : "• ";
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 description: updatedDescription,
//             };
//             return updatedExperiences;
//         });
//     };

//     // const handleNewLine = (index) => {
//     //     setExperiences((prevExperiences) => {
//     //         const updatedExperiences = [...prevExperiences];
//     //         const currentDescription = updatedExperiences[index].description;
//     //         const updatedDescription = currentDescription + "\n";
//     //         updatedExperiences[index] = {
//     //             ...updatedExperiences[index],
//     //             description: updatedDescription,
//     //         };
//     //         return updatedExperiences;
//     //     });
//     // };
//     const handleNewLine = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const lines = currentDescription.split("\n");

//             // Check if the last line has content
//             if (lines[lines.length - 1].trim().length > 0) {
//                 const updatedDescription = currentDescription + "\n• ";
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     description: updatedDescription,
//                 };
//             }

//             return updatedExperiences;
//         });
//     };

//     return (
//         <div
//             // className="basic-info-container"
//             style={{
//                 backgroundColor: backgroundColor, // Use the backgroundColor state variable
//             }}
//         >
//             {
//                 <h3>
//                     Experience
//                     <span>
//                         <hr />
//                     </span>
//                 </h3>
//             }
//             {experiences.map((experience, index) => (
//                 <div key={index}>
//                     <input
//                         className="expTitle"
//                         type="text"
//                         name="title"
//                         value={experience.title}
//                         onChange={(e) => handleChange(e, index)}
//                         placeholder="Title"
//                     />
//                     {experience.errors.title && (
//                         <p>{experience.errors.title}</p>
//                     )}
//                     <div className="school-clg-name-container">
//                         <MdWorkHistory style={{ color: themeColor }} />
//                         <input
//                             className="expCompanyName"
//                             type="text"
//                             name="companyName"
//                             value={experience.companyName}
//                             onChange={(e) => handleChange(e, index)}
//                             placeholder="Company Name"
//                             style={{ color: subheadingColor }}
//                         />
//                         {experience.errors.companyName && (
//                             <p>{experience.errors.companyName}</p>
//                         )}
//                     </div>

//                     <div className="dates-location-container">
//                         <div className="dates-container">
//                             <FaCalendarAlt style={{ color: themeColor }} />

//                             <select
//                                 className="date-width"
//                                 name="startYear"
//                                 value={experience.startYear}
//                                 onChange={(e) => handleChange(e, index)}
//                             >
//                                 <option value="">Start Year</option>
//                                 {renderYears().map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                             </select>
//                             {experience.errors.startYear && (
//                                 <p>{experience.errors.startYear}</p>
//                             )}
//                             <select
//                                 className="date-width"
//                                 name="endYear"
//                                 value={experience.endYear}
//                                 onChange={(e) => handleChange(e, index)}
//                             >
//                                 <option value="">End Year</option>
//                                 {renderYears().map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                                 <option value="Present">Present</option>
//                             </select>
//                             {experience.errors.endYear && (
//                                 <p>{experience.errors.endYear}</p>
//                             )}
//                         </div>
//                         <div className="location-container">
//                             <TiLocation
//                                 size={18}
//                                 style={{ color: themeColor }}
//                             />

//                             <input
//                                 type="text"
//                                 name="location"
//                                 value={experience.location}
//                                 onChange={(e) => handleChange(e, index)}
//                                 placeholder="Location"
//                                 style={{ color: textColor }}
//                             />
//                             {experience.errors.location && (
//                                 <p>{experience.errors.location}</p>
//                             )}
//                         </div>
//                     </div>

//                     <select
//                         className="exp-select-width"
//                         name="experienceType"
//                         value={experience.experienceType}
//                         onChange={(e) => handleChange(e, index)}
//                     >
//                         <option value="">Experience Type</option>
//                         <option value="Part-time">Part-time</option>
//                         <option value="Full-time">Full-time</option>
//                     </select>
//                     {experience.errors.experienceType && (
//                         <p>{experience.errors.experienceType}</p>
//                     )}
//                     <div className="expDescription">
//                         {/* {renderDescription(experience.description)} */}

//                         <textarea
//                             name="description"
//                             className="exper-textbox"
//                             value={experience.description}
//                             onChange={(e) => handleChange(e, index)}
//                             onKeyDown={(e) => handleKeyDown(e, index)}
//                             placeholder="Description"
//                             rows={3}
//                             style={{ resize: "none" }}
//                         />

//                         {experience.errors.description && (
//                             <p>{experience.errors.description}</p>
//                         )}
//                         <div className="hr-new hr-green" />
//                     </div>

//                     {experiences.length > 1 && (
//                         <button
//                             className="remove-btn"
//                             type="button"
//                             onClick={() => handleDeleteExperience(index)}
//                         >
//                             <AiFillDelete />
//                         </button>
//                     )}
//                 </div>
//             ))}
//             <button
//                 className="add-btn"
//                 type="button"
//                 onClick={handleAddExperience}
//             >
//                 <AiOutlinePlusCircle />
//             </button>
//             {experiences.length > 0 && (
//                 <button className="save-btn" type="button" onClick={handleSave}>
//                     Save
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ExperienceDetails;

import React, { useState, useEffect, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";

const ExperienceDetailsTemplate1 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [experiences, setExperiences] = useState([]);
    const [showButtons, setShowButtons] = useState(false);

    const adjustTextareaHeight = () => {
        const textareaRefs = document.querySelectorAll(".exper-textbox");
        textareaRefs.forEach((textareaRef) => {
            textareaRef.style.height = "auto";
            textareaRef.style.height = textareaRef.scrollHeight + "px";
        });
    };

    useEffect(() => {
        const storedExperiences = localStorage.getItem("experiences");
        if (storedExperiences) {
            setExperiences(JSON.parse(storedExperiences));
        } else {
            setExperiences([
                {
                    company: "",
                    position: "",
                    startYear: "",
                    endYear: "",
                    experienceType: "",
                    location: "",
                    description: "",
                    errors: {
                        company: "",
                        position: "",
                        startYear: "",
                        endYear: "",
                        experienceType: "",
                        location: "",
                        description: "",
                    },
                },
            ]);
        }
    }, []);

    useEffect(() => {
        // Adjust textarea height when the component mounts
        adjustTextareaHeight();
    }, [experiences]);

    const handleAddExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            startYear: "",
            endYear: "",
            experienceType: "",
            location: "",
            description: "",
            errors: {
                company: "",
                position: "",
                startYear: "",
                endYear: "",
                experienceType: "",
                location: "",
                description: "",
            },
        };

        setExperiences((prevExperiences) => [
            ...prevExperiences,
            newExperience,
        ]);
        setShowButtons(false); // Show buttons when a new experience is added
    };

    const handleDeleteExperience = (index) => {
        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences.splice(index, 1);
            return updatedExperiences;
        });
    };

    // const handleChange = (e, index) => {
    //     const { name, value } = e.target;

    //     setExperiences((prevExperiences) => {
    //         const updatedExperiences = [...prevExperiences];
    //         updatedExperiences[index] = {
    //             ...updatedExperiences[index],
    //             [name]: value,
    //             errors: {
    //                 ...updatedExperiences[index].errors,
    //                 [name]: "",
    //             },
    //         };
    //         return updatedExperiences;
    //     });
    // };

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                [name]: value,
                errors: {
                    ...updatedExperiences[index].errors,
                    [name]: "", // Clear the error for the current field
                },
            };
            return updatedExperiences;
        });
        setShowButtons(true); // new
    };

    // const handleSave = () => {
    //     console.log("Saved called");
    //     let isFormValid = true;
    //     let prevEndYear = Number.MAX_VALUE;

    //     const updatedExperiences = experiences.map((experience) => {
    //         const {
    //             company,
    //             position,
    //             startYear,
    //             endYear,
    //             experienceType,
    //             location,
    //             description,
    //         } = experience;
    //         // const errors = {
    //         //     company: "",
    //         //     position: "",
    //         //     startYear: "",
    //         //     endYear: "",
    //         //     experienceType: "",
    //         //     location: "",
    //         //     description: "",
    //         // };
    //         const errors = {};

    //         if (company.trim() === "") {
    //             errors.company = "Please enter a title";
    //             isFormValid = false;
    //         }
    //         if (position.trim() === "") {
    //             errors.position = "Please enter a company name";
    //             isFormValid = false;
    //         }
    //         if (startYear.trim() === "") {
    //             errors.startYear = "Please enter a start year";
    //             isFormValid = false;
    //         }
    //         if (endYear.trim() === "") {
    //             errors.endYear = "Please enter an end year";
    //             isFormValid = false;
    //         }
    //         if (experienceType.trim() === "") {
    //             errors.experienceType = "Please enter an experience type";
    //             isFormValid = false;
    //         }
    //         if (location.trim() === "") {
    //             errors.location = "Please enter a location";
    //             isFormValid = false;
    //         }
    //         if (description.trim() === "") {
    //             errors.description = "Please enter a description";
    //             isFormValid = false;
    //         }

    //         if (startYear.trim() !== "" && endYear.trim() !== "") {
    //             const start = parseInt(startYear, 10);
    //             const end =
    //                 endYear === "Present"
    //                     ? new Date().getFullYear()
    //                     : parseInt(endYear, 10);

    //             if (start > end) {
    //                 errors.startYear =
    //                     "Start year must be earlier than end year";
    //                 errors.endYear = "End year must be later than start year";
    //                 isFormValid = false;
    //             }

    //             // if (end > prevEndYear) {
    //             //     errors.endYear =
    //             //         "End year should be in chronological order";
    //             //     isFormValid = false;
    //             // }

    //             prevEndYear = end;
    //         }

    //         return { ...experience, errors };
    //     });

    //     // Update the experiences state with the updated experiences
    //     setExperiences(updatedExperiences);

    //     if (isFormValid) {
    //         localStorage.setItem(
    //             "experiences",
    //             JSON.stringify(updatedExperiences)
    //         );
    //     }
    // };

    const handleSave = () => {
        let isFormValid = true;
        let prevEndYear = Number.MAX_VALUE;

        const updatedExperiences = experiences.map((experience) => {
            const {
                company,
                position,
                startYear,
                endYear,
                experienceType,
                location,
                description,
            } = experience;

            // Create a new errors object for each experience item
            const errors = {};

            if (!company || !company.trim()) {
                errors.company = "Please enter a company name";
                isFormValid = false;
            }
            if (!position || !position.trim()) {
                errors.position = "Please enter a position";
                isFormValid = false;
            }
            if (!startYear || !startYear.trim()) {
                errors.startYear = "Please enter a start year";
                isFormValid = false;
            }
            if (!endYear || !endYear.trim()) {
                errors.endYear = "Please enter an end year";
                isFormValid = false;
            }
            if (!experienceType || !experienceType.trim()) {
                errors.experienceType = "Please enter an experience type";
                isFormValid = false;
            }
            if (!location || !location.trim()) {
                errors.location = "Please enter a location";
                isFormValid = false;
            }
            if (!description || !description.trim()) {
                errors.description = "Please enter a description";
                isFormValid = false;
            }

            if (startYear.trim() && endYear.trim()) {
                const start = parseInt(startYear, 10);
                const end =
                    endYear === "Present"
                        ? new Date().getFullYear()
                        : parseInt(endYear, 10);

                if (start > end) {
                    errors.startYear =
                        "Start year must be earlier than end year";
                    errors.endYear = "End year must be later than start year";
                    isFormValid = false;
                }

                // if (end > prevEndYear) {
                //     errors.endYear =
                //         "End year should be in chronological order";
                //     isFormValid = false;
                // }

                prevEndYear = end;
            }

            // Return the updated experience object with the errors
            return { ...experience, errors };
        });

        // Update the experiences state with the updated experiences
        setExperiences(updatedExperiences);

        if (isFormValid) {
            localStorage.setItem(
                "experiences",
                JSON.stringify(updatedExperiences)
            );

            setShowButtons(false); // new
        }
    };

    const renderYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = 1980; year <= currentYear; year++) {
            years.push(year);
        }
        return years;
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleNewLine(index);
        } else {
            const { name, value } = e.target;
            const currentDescription = experiences[index].description;
            const updatedDescription = currentDescription
                ? currentDescription + "\n"
                : "";

            const descriptionWithBulletPoints = updatedDescription + value;
            const wordCount = descriptionWithBulletPoints.split(/\s+/).length;

            if (wordCount > 100) {
                if (e.key !== "Backspace" && e.key !== "Delete") {
                    e.preventDefault();
                }
                return;
            }

            setExperiences((prevExperiences) => {
                const updatedExperiences = [...prevExperiences];
                updatedExperiences[index] = {
                    ...updatedExperiences[index],
                    [name]: value,
                };
                return updatedExperiences;
            });

            if (value === "") {
                handleNewBulletPoint(index);
            }
        }
    };

    const handleNewBulletPoint = (index) => {
        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            const currentDescription = updatedExperiences[index].description;
            const updatedDescription = currentDescription
                ? currentDescription + "\n• "
                : "• ";
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                description: updatedDescription,
            };
            return updatedExperiences;
        });
    };

    const handleNewLine = (index) => {
        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            const currentDescription = updatedExperiences[index].description;
            const lines = currentDescription.split("\n");

            // Check if the last line has content
            if (lines[lines.length - 1].trim().length > 0) {
                const updatedDescription = currentDescription + "\n• ";
                updatedExperiences[index] = {
                    ...updatedExperiences[index],
                    description: updatedDescription,
                };
            }

            return updatedExperiences;
        });
    };

    return (
        <
            // id="mainArea"
            // // className="basic-info-container"
            // style={{
            //     backgroundColor: backgroundColor, // Use the backgroundColor state variable
            // }}
        >
            <section
                style={{
                    backgroundColor: backgroundColor, // Use the backgroundColor state variable
                }}
            >
                <div className="sectionTitle">
                    <h1>Work Experience</h1>
                </div>

                <div className="sectionContent">
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <article>
                                <input
                                    className="expTitle"
                                    type="text"
                                    name="company"
                                    value={experience.company}
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder="Title"
                                />
                                {experience.errors.company && (
                                    <p>{experience.errors.company}</p>
                                )}
                                {experiences.length > 1 &&
                                    showButtons && ( // new
                                        <button
                                            className="remove-btn"
                                            type="button"
                                            onClick={() =>
                                                handleDeleteExperience(index)
                                            }
                                        >
                                            <AiFillDelete />
                                        </button>
                                    )}

                                <div className="school-clg-name-container">
                                    <MdWorkHistory
                                        style={{ color: themeColor }}
                                    />
                                    <input
                                        className="expCompanyName"
                                        type="text"
                                        name="position"
                                        value={experience.position}
                                        onChange={(e) => handleChange(e, index)}
                                        placeholder="Company Name"
                                        // style={{ color: subheadingColor }}
                                        style={{ color: textColor }}
                                    />
                                    {experience.errors.position && (
                                        <p>{experience.errors.position}</p>
                                    )}
                                </div>
                                <div className="dates-location-container">
                                    <div className="dates-container">
                                        <FaCalendarAlt
                                            style={{ color: themeColor }}
                                        />

                                        <select
                                            className="date-width"
                                            name="startYear"
                                            value={experience.startYear}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                        >
                                            <option value="">Start Year</option>
                                            {renderYears().map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                        {experience.errors.startYear && (
                                            <p>{experience.errors.startYear}</p>
                                        )}
                                        <select
                                            className="date-width"
                                            name="endYear"
                                            value={experience.endYear}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                        >
                                            <option value="">End Year</option>
                                            {renderYears().map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                            <option value="Present">
                                                Present
                                            </option>
                                        </select>
                                        {experience.errors.endYear && (
                                            <p>{experience.errors.endYear}</p>
                                        )}
                                    </div>
                                    <div className="location-container">
                                        <TiLocation
                                            size={18}
                                            style={{ color: themeColor }}
                                        />

                                        <input
                                            type="text"
                                            name="location"
                                            value={experience.location}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            placeholder="Location"
                                        />
                                        {experience.errors.location && (
                                            <p>{experience.errors.location}</p>
                                        )}
                                    </div>
                                </div>
                                <select
                                    className="exp-select-width"
                                    name="experienceType"
                                    value={experience.experienceType}
                                    onChange={(e) => handleChange(e, index)}
                                >
                                    <option value="">Experience Type</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Full-time">Full-time</option>
                                </select>
                                {experience.errors.experienceType && (
                                    <p>{experience.errors.experienceType}</p>
                                )}
                                {/* description */}
                                <div className="expDescription">
                                    <textarea
                                        name="description"
                                        className="exper-textbox"
                                        value={experience.description}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        placeholder="Description"
                                        rows={3}
                                        style={{ resize: "none" }}
                                    />

                                    {experience.errors.description && (
                                        <p>{experience.errors.description}</p>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
                <div className="clear"></div>
            </section>
            <button
                style={{ display: "none" }}
                className="add-btn"
                type="button"
                onClick={handleAddExperience}
            >
                <AiOutlinePlusCircle />
            </button>
            {experiences.length > 0 && showButtons && (
                <>
                    <button
                        className="save-btn"
                        type="button"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                    <button
                        className="add-btn"
                        type="button"
                        onClick={handleAddExperience}
                    >
                        <AiOutlinePlusCircle />
                    </button>
                </>
            )}
        </>
    );
};

export default ExperienceDetailsTemplate1;
