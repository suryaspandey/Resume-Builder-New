import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import {
    AiFillDelete,
    AiOutlinePlusCircle,
    AiOutlineLink,
} from "react-icons/ai";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import { Input } from "antd";
const { TextArea } = Input;

const ProjectDetailsTemplate1 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [projects, setProjects] = useState([]);
    const [showButtons, setShowButtons] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

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
        setIsEditing(true); // Show buttons when a new experience is added
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
        setIsEditing(true); // Show buttons when a new experience is added
        // Show buttons when a new experience is added
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

            if (codeUrl && codeUrl.trim() !== "" && !isValidUrl(codeUrl)) {
                errors.codeUrl = "Please enter a valid code URL";
                isFormValid = false;
            }

            // if (hostedUrl.trim() !== "" && !isValidUrl(hostedUrl)) {
            //     errors.hostedUrl = "Please enter a valid hosted URL";
            //     isFormValid = false;
            // }

            return { ...project, errors };
        });

        setProjects(updatedProjects);

        if (isFormValid) {
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
            setIsEditing(false); // Show buttons when a new experience is added
            // Show buttons when a new experience is added
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
            <section
                style={{
                    borderTop: `2px solid ${backgroundColor}`,
                }}
            >
                <div
                    className="sectionTitle"
                    style={{
                        color: backgroundColor,
                        fontFamily: tempfontStyle,
                    }}
                >
                    <h1>Project Details</h1>
                </div>

                <div className="sectionContent">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <article>
                                <textarea
                                    autoSize
                                    className="expTitle titletextsize "
                                    type="text"
                                    name="title"
                                    placeholder="Project Title"
                                    value={project.title}
                                    onChange={(e) => handleChange(e, index)}
                                    onFocus={() => setIsEditing(true)}
                                    style={{
                                        minHeight: "50px",
                                        resize: "none",
                                        overflow: "hidden",
                                        fontWeight: 900,
                                        color: backgroundColor,
                                        fontFamily: tempfontStyle,
                                    }}
                                />
                                {project.errors.title && (
                                    <p>{project.errors.title}</p>
                                )}
                                {isEditing && (
                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            handleDeleteProject(index)
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
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={project.companyName}
                                        onChange={(e) => handleChange(e, index)}
                                        onFocus={() => setIsEditing(true)}
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
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
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            onFocus={() => setIsEditing(true)}
                                        />
                                        {project.errors.codeUrl && (
                                            <p>{project.errors.codeUrl}</p>
                                        )}
                                    </div>
                                    {/* <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{ marginRight: "5px" }}
                                        />
                                        <input
                                            type="text"
                                            name="hostedUrl"
                                            placeholder="Hosted URL"
                                            value={project.hostedUrl}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            onFocus={() => setIsEditing(true)}
                                        />
                                        {project.errors.hostedUrl && (
                                            <p>{project.errors.hostedUrl}</p>
                                        )}
                                    </div> */}
                                </div>
                                <div className="project-description">
                                    <TextArea
                                        autoSize
                                        maxLength={250}
                                        className="summaryTextareaClass_project"
                                        name="description"
                                        placeholder="Description (10-50 words)"
                                        value={project.description}
                                        onFocus={() => setIsEditing(true)}
                                        onChange={(e) => handleChange(e, index)}
                                        style={{
                                            wordWrap: "break-word",
                                            border: "none",
                                            backgroundColor: "transparent",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    />
                                    {project.errors.description && (
                                        <p>{project.errors.description}</p>
                                    )}
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
                <div class="clear"></div>
            </section>

            {isEditing ? (
                <>
                    <div className="save-button-container">
                        <button className="save-btn" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                    <div className="add-button-container">
                        <button className="add-btn" onClick={handleAddProject}>
                            <AiOutlinePlusCircle />
                        </button>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default ProjectDetailsTemplate1;
