import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import {
    AiFillDelete,
    AiOutlinePlusCircle,
    AiOutlineLink,
} from "react-icons/ai";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import EducationDetailsTemplate2 from "./EducationDetailsTemplate2";

const ProjectDetailsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = localStorage.getItem("projects");
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        } else {
            setProjects([
                {
                    title: "",
                    companyName: "",
                    codeUrl: "",
                    hostedUrl: "",
                    description: "",
                    errors: {
                        title: "",
                        description: "",
                        codeUrl: "",
                        hostedUrl: "",
                    },
                },
            ]);
        }
    }, []);

    const handleAddProject = () => {
        const newProject = {
            title: "",
            companyName: "",
            codeUrl: "",
            hostedUrl: "",
            description: "",
            errors: {
                title: "",
                description: "",
                codeUrl: "",
                hostedUrl: "",
            },
        };

        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    const handleDeleteProject = (index) => {
        setProjects((prevProjects) => {
            const updatedProjects = [...prevProjects];
            updatedProjects.splice(index, 1);
            return updatedProjects;
        });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        setProjects((prevProjects) => {
            const updatedProjects = [...prevProjects];
            updatedProjects[index] = {
                ...updatedProjects[index],
                [name]: value,
                errors: {
                    ...updatedProjects[index].errors,
                    [name]: "",
                },
            };
            return updatedProjects;
        });
    };

    const handleSave = () => {
        let isFormValid = true;

        const updatedProjects = projects.map((project) => {
            const { title, description, codeUrl, hostedUrl } = project;
            const errors = {
                title: "",
                description: "",
                codeUrl: "",
                hostedUrl: "",
            };

            if (title.trim() === "") {
                errors.title = "Please enter a project title";
                isFormValid = false;
            }

            if (description.trim() === "") {
                errors.description = "Please enter a project description";
                isFormValid = false;
            } else {
                const wordCount = description.trim().split(/\s+/).length;
                if (wordCount < 10 || wordCount > 50) {
                    errors.description =
                        "Project description should be between 10 and 50 words";
                    isFormValid = false;
                }
            }

            if (codeUrl.trim() !== "" && !isValidUrl(codeUrl)) {
                errors.codeUrl = "Please enter a valid code URL";
                isFormValid = false;
            }

            if (hostedUrl.trim() !== "" && !isValidUrl(hostedUrl)) {
                errors.hostedUrl = "Please enter a valid hosted URL";
                isFormValid = false;
            }

            return { ...project, errors };
        });

        setProjects(updatedProjects);

        if (isFormValid) {
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
        }
    };

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <>
            <div
                className="resume_item resume_work"
                style={{
                    backgroundColor: backgroundColor, // Use the backgroundColor state variable
                }}
            >
                <div className="title">
                    <p className="bold">PROJECTS</p>
                </div>
                <ul>
                    {projects.map((project, index) => (
                        <li>
                            <div key={index}>
                                <input
                                    className="expTitle"
                                    type="text"
                                    name="title"
                                    placeholder="Project Title"
                                    value={project.title}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {project.errors.title && (
                                    <p>{project.errors.title}</p>
                                )}

                                <button
                                    className="remove-btn"
                                    onClick={() => handleDeleteProject(index)}
                                >
                                    <AiFillDelete />
                                </button>

                                <div className="school-clg-name-container">
                                    <MdWorkHistory
                                        style={{ color: themeColor }}
                                    />
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={project.companyName}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>
                                <div className="project-links">
                                    <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            name="codeUrl"
                                            placeholder="Code URL"
                                            value={project.codeUrl}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                        />
                                        {project.errors.codeUrl && (
                                            <p>{project.errors.codeUrl}</p>
                                        )}
                                    </div>
                                    <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            name="hostedUrl"
                                            placeholder="Hosted URL"
                                            value={project.hostedUrl}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                        />
                                        {project.errors.hostedUrl && (
                                            <p>{project.errors.hostedUrl}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="project-description">
                                    <textarea
                                        name="description"
                                        placeholder="Description (10-50 words)"
                                        value={project.description}
                                        onChange={(e) => handleChange(e, index)}
                                    ></textarea>
                                    {project.errors.description && (
                                        <p>{project.errors.description}</p>
                                    )}
                                </div>

                                {/* <button
                                        className="remove-btn"
                                        onClick={() =>
                                            handleDeleteProject(index)
                                        }
                                    >
                                        <AiFillDelete />
                                    </button> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="add-button-container">
                <button className="add-btn" onClick={handleAddProject}>
                    <AiOutlinePlusCircle />
                </button>
            </div>
            <div className="save-button-container">
                <button className="save-btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </>
    );
};

export default ProjectDetailsTemplate2;
