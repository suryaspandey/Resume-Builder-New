import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

const EducationDetails = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [educations, setEducations] = useState([]);

    // useEffect(() => {
    //     const storedEducations = localStorage.getItem("educations");
    //     if (storedEducations) {
    //         setEducations(JSON.parse(storedEducations));
    //     }
    // }, []);

    useEffect(() => {
        const storedEducations = localStorage.getItem("educations");
        if (storedEducations) {
            setEducations(JSON.parse(storedEducations));
        } else {
            setEducations([
                {
                    courseName: "",
                    schoolName: "",
                    startYear: "",
                    endYear: "",
                    percentage: "",
                    errors: {
                        courseName: "",
                        schoolName: "",
                        startYear: "",
                        endYear: "",
                        percentage: "",
                    },
                },
            ]);
        }
    }, []);

    const handleAddEducation = () => {
        const newEducation = {
            courseName: "",
            schoolName: "",
            startYear: "",
            endYear: "",
            percentage: "",
            errors: {
                courseName: "",
                schoolName: "",
                startYear: "",
                endYear: "",
                percentage: "",
            },
        };

        setEducations((prevEducations) => [...prevEducations, newEducation]);
    };

    const handleDeleteEducation = (index) => {
        setEducations((prevEducations) => {
            const updatedEducations = [...prevEducations];
            updatedEducations.splice(index, 1);
            return updatedEducations;
        });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        setEducations((prevEducations) => {
            const updatedEducations = [...prevEducations];
            updatedEducations[index] = {
                ...updatedEducations[index],
                [name]: value,
                errors: {
                    ...updatedEducations[index].errors,
                    [name]: "",
                },
            };
            return updatedEducations;
        });
    };

    const handleSave = () => {
        let isFormValid = true;

        const updatedEducations = educations.map((education) => {
            const { courseName, schoolName, startYear, endYear, percentage } =
                education;
            const errors = {
                courseName: "",
                schoolName: "",
                startYear: "",
                endYear: "",
                percentage: "",
            };

            if (courseName.trim() === "") {
                errors.courseName = "Please enter a course name";
                isFormValid = false;
            }
            if (schoolName.trim() === "") {
                errors.schoolName = "Please enter a school/university name";
                isFormValid = false;
            }
            if (startYear.trim() === "") {
                errors.startYear = "Please enter a start year";
                isFormValid = false;
            }
            if (endYear.trim() === "") {
                errors.endYear = "Please enter an end year";
                isFormValid = false;
            }
            if (percentage.trim() === "") {
                errors.percentage = "Please enter a percentage";
                isFormValid = false;
            } else {
                const parsedPercentage = parseFloat(percentage);
                if (
                    isNaN(parsedPercentage) ||
                    parsedPercentage < 1 ||
                    parsedPercentage > 100
                ) {
                    errors.percentage =
                        "Percentage must be a number between 1 and 100";
                    isFormValid = false;
                }
            }

            return { ...education, errors };
        });

        setEducations(updatedEducations);

        if (isFormValid) {
            localStorage.setItem(
                "educations",
                JSON.stringify(updatedEducations)
            );
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

    return (
        <div
            // className="basic-info-container"
            style={{
                backgroundColor: backgroundColor, // Use the backgroundColor state variable
            }}
        >
            <h3>
                Education
                <span>
                    <hr />
                </span>
            </h3>
            {educations.map((education, index) => (
                <div key={index}>
                    <input
                        className="expTitle"
                        type="text"
                        name="courseName"
                        value={education.courseName}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Course Name"
                    />
                    {education.errors.courseName && (
                        <p>{education.errors.courseName}</p>
                    )}
                    <div className="school-clg-name-container">
                        <FaUniversity style={{ color: themeColor }} />
                        <input
                            className="expCompanyName"
                            type="text"
                            name="schoolName"
                            value={education.schoolName}
                            onChange={(e) => handleChange(e, index)}
                            placeholder="School/University Name"
                            style={{ color: subheadingColor }}
                        />
                        {education.errors.schoolName && (
                            <p>{education.errors.schoolName}</p>
                        )}
                    </div>

                    <div className="dates-location-container">
                        <div className="dates-container">
                            <FaCalendarAlt style={{ color: themeColor }} />

                            <select
                                className="date-width"
                                name="startYear"
                                value={education.startYear}
                                onChange={(e) => handleChange(e, index)}
                            >
                                <option value="">Start Year</option>
                                {renderYears().map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            {education.errors.startYear && (
                                <p>{education.errors.startYear}</p>
                            )}
                            <select
                                className="date-width"
                                name="endYear"
                                value={education.endYear}
                                onChange={(e) => handleChange(e, index)}
                            >
                                <option value="">End Year</option>
                                {renderYears().map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                                <option value="Present">Present</option>
                            </select>
                            {education.errors.endYear && (
                                <p>{education.errors.endYear}</p>
                            )}
                        </div>
                        <div className="location-container">
                            <input
                                type="text"
                                name="percentage"
                                value={education.percentage}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Percentage"
                                style={{ color: textColor }}
                            />
                            {education.errors.percentage && (
                                <p>{education.errors.percentage}</p>
                            )}
                        </div>
                    </div>

                    <div className="hr-new hr-green" />

                    {educations.length > 1 && (
                        <button
                            className="remove-btn"
                            type="button"
                            onClick={() => handleDeleteEducation(index)}
                        >
                            <AiFillDelete />
                        </button>
                    )}
                </div>
            ))}

            <button
                className="add-btn"
                type="button"
                onClick={handleAddEducation}
            >
                <AiOutlinePlusCircle />
            </button>

            {educations.length > 0 && (
                <button className="save-btn" type="button" onClick={handleSave}>
                    Save
                </button>
            )}
        </div>
    );
};

export default EducationDetails;
