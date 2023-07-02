import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import {
    AiFillDelete,
    AiOutlinePlusCircle,
    AiOutlineLink,
} from "react-icons/ai";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";

const ProjectDetails = ({
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
        <div
            // className="basic-info-container"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <h3>
                Project Details
                <span>
                    <hr />
                </span>
            </h3>
            {projects.map((project, index) => (
                <div className="project-info" key={index}>
                    <div className="project-title">
                        <input
                            className="expTitle"
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            value={project.title}
                            onChange={(e) => handleChange(e, index)}
                        />
                        {project.errors.title && (
                            <span className="error-message">
                                {project.errors.title}
                            </span>
                        )}
                    </div>
                    <div className="school-clg-name-container">
                        <MdWorkHistory style={{ color: themeColor }} />
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
                                style={{ marginRight: "5px" }}
                            />
                            <input
                                type="text"
                                name="codeUrl"
                                placeholder="Code URL"
                                value={project.codeUrl}
                                onChange={(e) => handleChange(e, index)}
                            />
                            {project.errors.codeUrl && (
                                <span className="error-message">
                                    {project.errors.codeUrl}
                                </span>
                            )}
                        </div>
                        <div>
                            <RiLinksFill
                                color={themeColor}
                                style={{ marginRight: "5px" }}
                            />
                            <input
                                type="text"
                                name="hostedUrl"
                                placeholder="Hosted URL"
                                value={project.hostedUrl}
                                onChange={(e) => handleChange(e, index)}
                            />
                            {project.errors.hostedUrl && (
                                <span className="error-message">
                                    {project.errors.hostedUrl}
                                </span>
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
                            <span className="error-message">
                                {project.errors.description}
                            </span>
                        )}
                    </div>
                    <div className="project-actions">
                        <button
                            className="remove-btn"
                            onClick={() => handleDeleteProject(index)}
                        >
                            <AiFillDelete />
                        </button>
                    </div>
                </div>
            ))}
            <div className="add-button-container">
                <button className="add-btn" onClick={handleAddProject}>
                    <AiOutlinePlusCircle />
                </button>
            </div>
            <div className="save-button-container">
                <button className="save-button" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
