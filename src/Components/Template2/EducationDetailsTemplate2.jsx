import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import ExperienceDetailsTemplate2 from "./ExperienceDetailsTemplate2";
import CertificationsTemplate2 from "./CertificationsTemplate2";

const EducationDetailsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [educations, setEducations] = useState([]);
    // const [showButtons, setShowButtons] = useState(false); // new
    const [isEditing, setIsEditing] = useState(false);

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
                    // percentage: "",
                    errors: {
                        courseName: "",
                        schoolName: "",
                        startYear: "",
                        endYear: "",
                        // percentage: "",
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
            // percentage: "",
            errors: {
                courseName: "",
                schoolName: "",
                startYear: "",
                endYear: "",
                // percentage: "",
            },
        };

        setEducations((prevEducations) => [...prevEducations, newEducation]);
        // setShowButtons(false);
        setIsEditing(true);
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
            localStorage.setItem(
                "educations",
                JSON.stringify(updatedEducations)
            );
            return updatedEducations;
        });
        // setShowButtons(true);
        setIsEditing(true);
    };

    const handleSave = () => {
        let isFormValid = true;

        console.log("isFormValid" + isFormValid);
        console.log("setIsEditing" + setIsEditing);

        const updatedEducations = educations.map((education) => {
            // const { courseName, schoolName, startYear, endYear, percentage } =
            //     education;

            const { courseName, schoolName, startYear, endYear } = education;
            const errors = {
                courseName: "",
                schoolName: "",
                startYear: "",
                endYear: "",
                // percentage: "",
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
            // if (percentage.trim() === "") {
            //     errors.percentage = "Please enter a percentage";
            //     isFormValid = false;
            // } else {
            //     const parsedPercentage = parseFloat(percentage);
            //     if (
            //         isNaN(parsedPercentage) ||
            //         parsedPercentage < 1 ||
            //         parsedPercentage > 100
            //     ) {
            //         errors.percentage =
            //             "Percentage must be a number between 1 and 100";
            //         isFormValid = false;
            //     }
            // }

            return { ...education, errors };
        });

        setEducations(updatedEducations);
        console.log("inside isFormValid check" + isFormValid);

        if (isFormValid) {
            console.log("inside isFormValid check" + isFormValid);
            console.log("setIsEditing" + setIsEditing);

            localStorage.setItem(
                "educations",
                JSON.stringify(updatedEducations)
            );
            // setShowButtons(false);
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

    return (
        <>
            <div
                className=" resume_item resume_work "
                style={{
                    // backgroundColor: backgroundColor,
                    borderBottom: `2px solid ${themeColor}`,
                    width: "90%",
                }}
            >
                <div
                    className="title"
                    // style={{
                    //     borderBottom: `2px solid ${themeColor}`,
                    //     width: "90%",
                    // }}
                >
                    <p className="bold" style={{ fontFamily: tempfontStyle }}>
                        EDUCATION DETAILS
                    </p>
                </div>
                <ul>
                    {educations.map((education, index) => (
                        <li>
                            <div key={index}>
                                <input
                                    className="temp2name expTitle"
                                    type="text"
                                    name="courseName"
                                    value={education.courseName}
                                    onChange={(e) => handleChange(e, index)}
                                    onFocus={() => setIsEditing(true)}
                                    placeholder="Course Name"
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                />
                                {education.errors.courseName && (
                                    <p>{education.errors.courseName}</p>
                                )}

                                {educations.length > 1 && isEditing && (
                                    <button
                                        className="remove-btn"
                                        type="button"
                                        onClick={() =>
                                            handleDeleteEducation(index)
                                        }
                                    >
                                        <AiFillDelete />
                                    </button>
                                )}
                                <div className="school-clg-name-container">
                                    <FaUniversity
                                        style={{ color: themeColor }}
                                    />
                                    <input
                                        className="expCompanyName"
                                        type="text"
                                        name="schoolName"
                                        value={education.schoolName}
                                        onChange={(e) => handleChange(e, index)}
                                        onFocus={() => setIsEditing(true)}
                                        placeholder="School/University Name"
                                        style={{
                                            color: subheadingColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                    {education.errors.schoolName && (
                                        <p>{education.errors.schoolName}</p>
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
                                            value={education.startYear}
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
                                        {education.errors.startYear && (
                                            <p>{education.errors.startYear}</p>
                                        )}
                                        <select
                                            className="date-width"
                                            name="endYear"
                                            value={education.endYear}
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
                                        {education.errors.endYear && (
                                            <p>{education.errors.endYear}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {isEditing ? (
                <button
                    className="add-btn"
                    type="button"
                    onClick={handleAddEducation}
                >
                    <AiOutlinePlusCircle />
                </button>
            ) : null}

            {educations.length > 0 && isEditing && (
                <button className="save-btn" type="button" onClick={handleSave}>
                    Save
                </button>
            )}

            <CertificationsTemplate2
                themeColor={themeColor}
                backgroundColor={backgroundColor}
                textColor={textColor}
                subheadingColor={subheadingColor}
                tempfontSize={tempfontSize}
                tempfontStyle={tempfontStyle}
            />
        </>
    );
};

export default EducationDetailsTemplate2;
