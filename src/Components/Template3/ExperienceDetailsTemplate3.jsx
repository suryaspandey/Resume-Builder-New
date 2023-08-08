import React, { useState, useEffect, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";

const ExperienceDetailsTemplate3 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [experiences, setExperiences] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

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
        setIsEditing(true);
        // setShowButtons(false); // Show buttons when a new experience is added
    };

    const handleDeleteExperience = (index) => {
        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences.splice(index, 1);
            return updatedExperiences;
        });
        // setIsEditing(true);
    };

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
        // setShowButtons(true); // new
        setIsEditing(true);
    };

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

            // setShowButtons(false); // new
            setIsEditing(false);
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
        <>
            <section
                style={{
                    // borderTop: `2px solid ${backgroundColor}`,
                    margin: "0 20px",
                }}
            >
                {/* <div className="sectionTitle"> */}
                <div>
                    <h1
                        style={{
                            color: "white",
                            fontFamily: tempfontStyle,
                            backgroundColor: backgroundColor,
                            fontStyle: "italic",
                            fontSize: "1.2em",
                        }}
                    >
                        Work Experience
                    </h1>
                </div>

                {/* <div className="sectionContent"> */}
                <div>
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    className="expTitle-date"
                                    style={{ display: "flex" }}
                                >
                                    <input
                                        className="expTitle"
                                        type="text"
                                        name="company"
                                        value={experience.company}
                                        onChange={(e) => handleChange(e, index)}
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="Title"
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                            fontWeight: "600",
                                        }}
                                    />
                                    {experience.errors.company && (
                                        <p>{experience.errors.company}</p>
                                    )}
                                    {experiences.length > 1 &&
                                        isEditing && ( // new
                                            <button
                                                className="remove-btn"
                                                type="button"
                                                onClick={() =>
                                                    handleDeleteExperience(
                                                        index
                                                    )
                                                }
                                            >
                                                <AiFillDelete />
                                            </button>
                                        )}

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
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
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
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
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
                                </div>

                                <div
                                    className="school-clg-name-container"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
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
                                        onFocus={() => setIsEditing(true)}
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                    {experience.errors.position && (
                                        <p>{experience.errors.position}</p>
                                    )}

                                    {/* <div className="dates-location-container"> */}
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
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        />
                                        {experience.errors.location && (
                                            <p>{experience.errors.location}</p>
                                        )}
                                    </div>
                                    {/* </div> */}
                                </div>

                                {/* <select
                                    className="exp-select-width"
                                    name="experienceType"
                                    value={experience.experienceType}
                                    onChange={(e) => handleChange(e, index)}
                                    onFocus={() => setIsEditing(true)}
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    <option value="">Experience Type</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Full-time">Full-time</option>
                                </select>
                                {experience.errors.experienceType && (
                                    <p>{experience.errors.experienceType}</p>
                                )} */}
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
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="Description"
                                        rows={3}
                                        style={{
                                            resize: "none",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
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
            {isEditing && experiences.length > 0 ? (
                <>
                    <button
                        className="add-btn"
                        type="button"
                        onClick={handleAddExperience}
                    >
                        <AiOutlinePlusCircle />
                    </button>
                    <button
                        className="save-btn"
                        type="button"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </>
            ) : null}
        </>
    );
};

export default ExperienceDetailsTemplate3;
